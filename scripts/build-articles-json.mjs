import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const rootDir = path.resolve(process.cwd());

async function loadArticlesForLocale(locale) {
  const contentDir = path.join(rootDir, 'content', 'articles', locale);
  let entries = [];
  try {
    const files = await fs.readdir(contentDir);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const fullPath = path.join(contentDir, file);
      const raw = await fs.readFile(fullPath, 'utf8');
      const { data, content } = matter(raw);

      const slug = data.slug || file.replace(/\.md$/, '');
      const title = data.title || slug;
      const excerpt = data.excerpt || '';
      const date = data.date || null;
      const image = data.image || null;
      const heroImage = data.heroImage || image || null;

      // Normalize authors: prefer list of objects { name }, fallback to single author string
      let authors = [];
      if (Array.isArray(data.authors)) {
        authors = data.authors
          .map((a) => (typeof a === 'string' ? a : a?.name))
          .filter(Boolean);
      } else if (typeof data.author === 'string' && data.author.trim().length) {
        authors = [data.author.trim()];
      }

      const bodyHtml = marked.parse(content || '');

      entries.push({
        slug,
        title,
        excerpt,
        date,
        image,
        heroImage,
        authors,
        body: bodyHtml,
      });
    }
  } catch (e) {
    // no content directory yet; that's fine
    return [];
  }

  // Sort by date desc if available
  entries.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return entries;
}

async function main() {
  const locales = ['sk', 'en'];
  const outDir = path.join(rootDir, 'app', 'data', 'articles');
  await fs.mkdir(outDir, { recursive: true });

  for (const locale of locales) {
    const articles = await loadArticlesForLocale(locale);
    const outPath = path.join(outDir, `${locale}.json`);
    await fs.writeFile(outPath, JSON.stringify(articles, null, 2), 'utf8');
    console.log(`Wrote ${articles.length} ${locale.toUpperCase()} articles to`, outPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
