<script setup lang="ts"></script>

<template>
  <div class="bg-[url(/src/assets/img/login.png)] bg-cover py-[40px] px-[90px]">
    <form class="flex flex-col items-center mt-[120px]">
      <p class="text-4xl text-[#E66385] font-bold mb-[60px]">Вход</p>
      <input class="input" placeholder="Имя" />
      <input class="input" placeholder="Номер телефона" />
      <input class="input" placeholder="Почта" />
      <button class="btn__red text-2xl text-white" type="submit">Войти</button>
    </form>

    <div class="flex flex-col items-center mt-[60px]">
      <p class="text-2xl">
        Забыли пароль? <a class="text-[#8529CE] underline" href="#">Восстановить</a>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">

.input {
  width: 497px;
  height: 76px;
  gap: 10px;
  border-radius: 15px;
  padding: 16px 24px;
  background: #E73C6833;
  margin-bottom: 24px;
}
</style>
