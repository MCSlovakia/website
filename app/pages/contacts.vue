<template>
  <div class="flex lg:mx-auto mx-5 justify-center">
    <div class="flex flex-col md:gap-6 sm:gap-5 gap-4 md:mt-12 mt-8 xl:w-[1180px] lg:w-[940px] w-full">
      <div class="flex flex-col md:gap-6 gap-4 justify-between">
        <h1 class="md:text-5xl sm:text-3xl text-2xl">
          Kontakt
        </h1>
        <div class="flex md:flex-row flex-col md:gap-6 gap-5 justify-between">
          <p class="md:text-[18px] text-base text-txt-black-sec lg:w-[700px] w-full">
            Máte otázky alebo záujem o spoluprácu? Kontaktujte nás cez formulár alebo iným spôsobom, radi vám odpovieme.
          </p>
          <ButtonSec
              class="text-txt-black-prim inline"
              text="Vyplniť formulár"
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
const router = useRouter();

const ContactCardsContent = [
  {
    title: "Email",
    description: "Napíšte nám email na adresu",
    descriptionHtml: 'Napíšte nám email na adresu <a href="mailto:info@mcslovakia.com" class="text-mcs-orange underline hover:no-underline hover:text-mcs-orange-light">info@mcslovakia.com</a>'
  },
  {
    title: "Telefón",
    description: "Zavolajte nám na číslo",
    descriptionHtml: 'Zavolajte nám na číslo <a href="tel:+421912345678" class="text-mcs-orange underline hover:no-underline hover:text-mcs-orange-light">+421 907 357 491</a>'
  }
];
</script>

