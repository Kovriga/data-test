<script setup lang="ts">
</script>

<template>
  <div class="bg-[url(/src/assets/img/login.png)] bg-cover py-[40px] px-[90px]">
    <div class="flex justify-end-safe">
      <button class="btn__white text-2xl text-[#8529CE]">Регистрация</button>
    </div>
    <form class="flex flex-col items-center mt-[120px]">
      <p class="text-4xl text-[#8529CE] font-bold mb-[60px]">Вход</p>
      <input class="input" placeholder="Почта / Номер телефона"/>
      <input class="input" placeholder="Пароль" />
      <button class="btn__primary text-2xl text-white" type="submit">Войти</button>
    </form>

    <div class="flex flex-col items-center mt-[60px]">
      <p class="text-2xl">Забыли пароль? <a class="text-[#8529CE] underline" href="#">Восстановить</a></p>
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
  background: #9767C633;
  margin-bottom: 24px;
}
</style>
