<template>
  <footer class="bg-mcs-blue py-[100px] flex items-center justify-between md:mt-[100px] mt-[60px]">
    <div class="xl:w-[1180px] lg:w-[940px] w-full flex-wrap lg:mx-auto mx-5 flex flex-col gap-20">
      <div class="flex flex-row items-start justify-between flex-wrap gap-5">
        <div class="logo--container">
          <NuxtLink to="/" class="flex items-center">
            <img src="/assets/logo/logo-footer.svg" alt="MCS logo" class="w-[150px] h-auto">
          </NuxtLink>
          <div>
            <NuxtLink
              v-for="(link, idx) in smLinks" :key="idx"
              :to="link.url"
              class="text-txt-white-sec hover:text-mcs-orange-light transition duration-150 mr-4 text-2xl"
              >
              <i :class="link.icon"></i>
            </NuxtLink>
          </div>
        </div>
        <div
            v-for="(section, idx) in footerLinks" :key="idx">
          <h3 class="font-semibold text-txt-white-prim mb-5 md:text-base text-sm">{{ section.name }}</h3>
          <ul class="flex flex-col gap-3 md:text-base text-sm">
            <li v-for="(link, lidx) in section.links" :key="lidx">
              <NuxtLink :to="link.to" class="hover:text-mcs-orange-light font-normal mb-3 transition duration-150 text-txt-white-sec">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-5 sm:w-[460px] w-full">
          <h3 class="text-txt-white-prim font-semibold md:text-base text-sm">
            Organizácia
          </h3>
          <ul class="text-txt-white-sec flex flex-col gap-2 md:text-base text-sm">
            <li>Model Conferences Slovakia n.o.</li>
            <li>Registrovaná na Ministerstve vnútra SR, registračné číslo OVVS-433474/637/2025-NO</li>
            <li>Dobrovského 2200/6, 811 08 Bratislava — Staré Mesto</li>
            <div class="flex sm:gap-7 gap-2 sm:flex-row flex-col">
              <li>IČO: 55 888 888</li>
              <li>IBAN: SK14 1100 0000 0029 4727 1726</li>
            </div>
            <NuxtLink to="mailto:info@mcslovakia.com" class="hover:text-mcs-orange-light transition duration-150 text-txt-white-sec">
              info@mcslovakia.com</NuxtLink>
          </ul>


        </div>

      </div>
      <div class="flex sm:flex-row flex-col sm:justify-between sm:items-center items-start text-txt-white-sec text-xs gap-5">
        <p>© Model Conferences Slovakia 2025</p>
        <div class="flex sm:gap-4 gap-2 sm:flex-row flex-col">
          <NuxtLink to="/privacy-policy" class="hover:text-mcs-orange-light transition duration-150">Zásady ochrany osobných údajov</NuxtLink>
          <NuxtLink to="/processing-policy" class="hover:text-mcs-orange-light transition duration-150">Spracovanie osobných údajov</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const smLinks = [
  { name: "LinkedIn", icon: "ri-linkedin-box-fill", url: "https://www.linkedin.com/company/model-conferences-slovakia/" },
  { name: "Instagram", icon: "ri-instagram-fill", url: "https://www.instagram.com/mc.slovakia/" },
  { name: "TikTok", icon: "ri-tiktok-fill", url: "https://www.tiktok.com/@mc.slovakia" },
  { name: "YouTube", icon: "ri-youtube-fill", url: "https://www.youtube.com/@modelconferencessk" },
];

const footerLinks = [
  { name: "Navigácia",
    links: [
      { name: "O nás", to: "/about" },
      { name: "Projekty", to: "/projects" },
      { name: "Partneri", to: "/partners" },
      { name: "Podporte nás", to: "/support-us" },
      { name: "Články", to: "/articles" },
      { name: "Galéria", to: "/gallery" },
    ]
  },
  { name: "Informácie",
    links: [
      { name: "Kontakt", to: "/contacts" },
      { name: "Média o nás", to: "/" },
      { name: "Tlačové správy", to: "/" },
      { name: "Výročné správy", to: "/" },
      { name: "Právne dokumenty", to: "/" },
      { name: "Finančné výkazy", to: "/" },
    ]
  }
];
</script>

<style>
.logo--container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 479px) {
  .logo--container {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
}

</style>