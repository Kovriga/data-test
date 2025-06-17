<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import MainCard from '@/components/main/MainCard.vue'
import Subscription from '@/components/Subscription.vue'
</script>

<template>
  <div>
    <header>
      <nav-bar />
    </header>
    <section>
      <main-card />
      <div class="bg-[url(/src/assets/img/price.png)] bg-size-[auto_240px] h-[240px] bg-repeat-x w-auto"/>
      <subscription/>
    </section>
  </div>
</template>

<style scoped></style>
