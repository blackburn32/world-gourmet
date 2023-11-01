<template>
  <main class="flex flex-col max-h-screen">
      <Header />
      <div class="flex flex-row w-full max-h-full justify-center overflow-hidden">
            <Navigation class="w-1/4 max-h-full overflow-y-scroll"/>
            <div class="flex flex-row w-3/4 max-h-full justify-between overflow-y-scroll">
                <ContentDoc class="prose mx-4 py-10 max-h-full"/>
                <div class="grow"/>
            </div>
      </div>
  </main>
</template>
<script setup lang="ts">
</script>