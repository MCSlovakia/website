<template>
  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px] mb-[90px]">
    <div class="flex flex-col md:gap-10 gap-5 xl:w-[1180px] lg:w-[940px] w-full text-black">
      <h1 class="md:text-[40px] text-3xl font-bold">{{ $t('financialPage.title') }}</h1>
      
      <div class="p-8 bg-blue-600 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-5 text-white shadow-lg">
        <div>
          <h2 class="text-2xl font-bold font-serif">{{ $t('financialPage.account.title') }}</h2>
          <p class="opacity-90">Sledujte naše financie transparentne v reálnom čase.</p>
        </div>
        <a href="#" class="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition whitespace-nowrap">
          Otvoriť účet
        </a>
      </div>

      <div class="mt-5">
        <h2 class="text-2xl font-bold mb-4 text-black">{{ $t('financialPage.documents') }}</h2>
        <div class="grid md:grid-cols-2 gap-4">
           <p class="text-gray-500 italic">Momentálne nie sú dostupné žiadne správy.</p>
        </div>
      </div>
    </div>
  </div>
</template>
