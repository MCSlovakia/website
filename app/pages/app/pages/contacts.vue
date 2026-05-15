<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-12 mt-8 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex flex-col md:gap-6 gap-4 justify-between">
        <h1 class="md:text-5xl sm:text-3xl text-2xl">
          {{ $t('contactsPage.title') }}
        </h1>
        <div class="flex md:flex-row flex-col md:gap-6 gap-5 justify-between">
          <p class="md:text-[18px] text-base text-txt-black-sec lg:w-[700px] w-full">
            {{ $t('contactsPage.description') }}
          </p>
          <ButtonSec
              class="text-txt-black-prim inline"
              :text="$t('contactsPage.formButton')"
              @click="() => router.push('/support-us')"
          />
        </div>
      </div>
      <div class="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
        <Card
            v-for="(item, idx) in ContactCardsContent"
            :key="idx"
            :title="item.title"
            :description="item.description"
            :descriptionHtml="item.descriptionHtml"
        />
      </div>
      <!-- Social card with same width as normal card -->
      <div class="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4 mt-2">
        <SocialCard />
      </div>
    </div>
  </div>

  <div>
    <div>
      <h2>

      </h2>
      <div>

      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import ButtonSec from "~/components/buttonSec.vue";
import Card from "~/components/card.vue";
import SocialCard from "~/components/SocialCard.vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

// Contact information - kept outside of i18n files
const contactEmail = "info@mcslovakia.com";
const contactPhone = "+421 907 357 491";

const ContactCardsContent = [
  {
    title: t('contactsPage.cards.email.title'),
    description: t('contactsPage.cards.email.description'),
    descriptionHtml: `${t('contactsPage.cards.email.description')} <a href="mailto:${contactEmail}" class="text-mcs-orange underline hover:no-underline hover:text-mcs-orange-light">${contactEmail}</a>`
  },
  {
    title: t('contactsPage.cards.phone.title'),
    description: t('contactsPage.cards.phone.description'),
    descriptionHtml: `${t('contactsPage.cards.phone.description')} <a href="tel:${contactPhone.replace(/\s+/g, '')}" class="text-mcs-orange underline hover:no-underline hover:text-mcs-orange-light">${contactPhone}</a>`
  }
];
</script>

