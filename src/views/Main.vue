<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <div class="flex justify-center">
    <div class="flex-none px-[30px] content-start border-[#8529CE] border-r-2">
      <h1 class="my-[40px] text-3xl font-bold text-[#8529CE] text-center cursor-pointer" @click="router.push('/')">SKILLMASTER</h1>
      <div class="flex flex-col">
        <router-link to="/testing" activeClass="s-router__action" class="s-router">ТЕСТИРОВАНИЯ</router-link>
        <router-link to="/sections" activeClass="s-router__action" class="s-router" aria-disabled="true">РАЗДЕЛЫ</router-link>
        <router-link to="/rating" activeClass="s-router__action" class="s-router" aria-disabled="true">РЕЙТИНГ</router-link>
        <router-link to="/shop" activeClass="s-router__action" class="s-router" aria-disabled="true">МАГАЗИН</router-link>
        <router-link to="/profile" activeClass="s-router__action" class="s-router">ПРОФИЛЬ</router-link>
      </div>
    </div>
    <div class="grow">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.s-router {
  font-family: Montserrat,serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  text-transform: uppercase;
  text-align: center;
  gap: 10px;
  border-radius: 15px;
  padding: 16px 24px;
  color: #8529CE;
  margin-top: 20px;
  &__action{
    color: #FFFFFF;
    background: #8529CE;
  }
}
</style>
