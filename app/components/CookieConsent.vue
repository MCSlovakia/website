<template>
  <Transition name="cookie-slide">
    <aside
      v-if="isVisible"
      class="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 md:pb-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div class="mx-auto w-full max-w-5xl rounded-2xl border border-mcs-orange-light/40 bg-mcs-blue/95 p-5 text-txt-white-prim shadow-2xl backdrop-blur-sm md:p-6">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <h2 class="merriweather text-xl leading-tight md:text-2xl">
              {{ title }}
            </h2>
            <p class="mt-2 text-sm leading-relaxed text-txt-white-sec md:text-base">
              {{ description }}
            </p>
            <p class="mt-2 text-xs text-txt-white-sec/90 md:text-sm">
              {{ detailsPrefix }}
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="text-mcs-orange-light underline decoration-mcs-orange-light/80 underline-offset-2 transition hover:text-mcs-orange"
              >
                {{ privacyLabel }}
              </NuxtLink>
              {{ andText }}
              <NuxtLink
                :to="localePath('/processing-policy')"
                class="text-mcs-orange-light underline decoration-mcs-orange-light/80 underline-offset-2 transition hover:text-mcs-orange"
              >
                {{ processingLabel }}
              </NuxtLink>
              .
            </p>
          </div>

          <div class="flex flex-wrap gap-2 md:justify-end">
            <button
              type="button"
              class="rounded border border-mcs-orange px-4 py-2 text-sm font-semibold text-txt-white-prim transition hover:bg-mcs-orange hover:text-txt-white-prim"
              @click="rejectCookies"
            >
              {{ rejectLabel }}
            </button>
            <button
              type="button"
              class="rounded bg-mcs-orange px-4 py-2 text-sm font-semibold text-txt-white-prim transition hover:bg-mcs-orange-light"
              @click="acceptCookies"
            >
              {{ acceptLabel }}
            </button>
          </div>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
const STORAGE_KEY = 'mcs_cookie_consent_v1';

type ConsentValue = 'accepted' | 'rejected';

const { locale } = useI18n();
const localePath = useLocalePath();
const isVisible = ref(false);

const isSk = computed(() => locale.value === 'sk');

const title = computed(() =>
  isSk.value ? 'Súhlas so súbormi cookie' : 'Cookie Consent'
);
const description = computed(() =>
  isSk.value
    ? 'Používame analytické cookies (Google Analytics) na meranie návštevnosti a zlepšovanie webu.'
    : 'We use analytics cookies (Google Analytics) to measure traffic and improve this website.'
);
const detailsPrefix = computed(() =>
  isSk.value ? 'Viac informácií nájdete v' : 'See more in our'
);
const privacyLabel = computed(() =>
  isSk.value ? 'zásadách ochrany súkromia' : 'privacy policy'
);
const andText = computed(() =>
  isSk.value ? ' a ' : ' and '
);
const processingLabel = computed(() =>
  isSk.value ? 'zásadách spracovania údajov' : 'processing policy'
);
const rejectLabel = computed(() => (isSk.value ? 'Odmietnuť' : 'Reject'));
const acceptLabel = computed(() => (isSk.value ? 'Prijať' : 'Accept'));

const sendGtag = (...args: unknown[]) => {
  if (typeof window === 'undefined') {
    return;
  }

  const gtag = (window as { gtag?: (...innerArgs: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag(...args);
  }
};

const updateAnalyticsConsent = (value: 'granted' | 'denied') => {
  sendGtag('consent', 'update', {
    analytics_storage: value,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
};

const acceptCookies = () => {
  updateAnalyticsConsent('granted');
  sendGtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });

  localStorage.setItem(STORAGE_KEY, 'accepted');
  isVisible.value = false;
};

const rejectCookies = () => {
  updateAnalyticsConsent('denied');
  localStorage.setItem(STORAGE_KEY, 'rejected');
  isVisible.value = false;
};

onMounted(() => {
  const savedConsent = localStorage.getItem(STORAGE_KEY) as ConsentValue | null;

  if (savedConsent === 'accepted') {
    updateAnalyticsConsent('granted');
    return;
  }

  if (savedConsent === 'rejected') {
    updateAnalyticsConsent('denied');
    return;
  }

  isVisible.value = true;
});
</script>

<style scoped>
.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: all 0.28s ease;
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  opacity: 0;
  transform: translateY(18px);
}
</style>
