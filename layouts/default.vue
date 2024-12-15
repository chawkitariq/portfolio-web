<script setup lang="ts">
</script>

<template>
  <div class="h-screen grid grid-rows-[auto_1fr_auto]">
    <NuxtLayout name="header" />
    <Toaster />
    <NuxtPage />
    <NuxtLayout name="footer" />
  </div>
</template>
