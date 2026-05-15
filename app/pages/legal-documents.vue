<template>
  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px] mb-[90px]">
    <div class="flex flex-col md:gap-10 gap-5 xl:w-[1180px] lg:w-[940px] w-full text-black">
      
      <h1 class="md:text-[40px] text-3xl font-bold">{{ $t('legalPage.title') }}</h1>
      
      <p class="text-lg text-gray-600 opacity-80">
        {{ $t('legalPage.description') }}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 mt-5 text-black">
        <div class="p-6 bg-white border border-gray-200 rounded-xl flex flex-col gap-4 shadow-sm">
          <h3 class="font-bold text-xl">{{ $t('legalPage.title2') }}</h3>
          <p class="text-gray-600 text-sm">{{ $t('legalPage.description2') }}</p>
          <a href="/components/statut.pdf" target="_blank" class="text-blue-600 font-medium underline hover:text-blue-800 transition">
            {{ $t('legalPage.button') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
