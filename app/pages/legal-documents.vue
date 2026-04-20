<template>
  <div class="flex lg:px-auto px-5 justify-center md:mt-[90px] mt-[50px] mb-[90px]">
    <div class="flex flex-col md:gap-10 gap-5 xl:w-[1180px] lg:w-[940px] w-full text-white text-white">
      <h1 class="md:text-[40px] text-3xl font-bold">Právne dokumenty</h1>
      
      <div class="grid md:grid-cols-2 gap-6 mt-5 text-black">
        <div class="p-6 bg-white rounded-xl flex flex-col gap-4">
          <h3 class="font-bold text-xl">Štatút MCSlovakia</h3>
          <p class="text-gray-600 text-sm">Základný dokument definujúci fungovanie našej organizácie.</p>
          <a href="/components/statut.pdf" target="_blank" class="text-blue-600 font-medium underline">
            Otvoriť Štatút (PDF)
          </a>
        </div>
        
        <div class="p-6 bg-white rounded-xl flex flex-col gap-4">
          <h3 class="font-bold text-xl">Zdrojový kód webu</h3>
          <p class="text-gray-600 text-sm">Naše stanovy a dokumentáciu spravujeme otvorene na GitHube.</p>
          <a href="https://github.com/MCSlovakia/website" target="_blank" class="text-blue-600 font-medium underline">
            GitHub repozitár
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
