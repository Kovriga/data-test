<template>
  <div class="mx-[80px] py-[60px]">
    <img src="/src/assets/img/skillmaster.png" alt="" />
    <div class="flex">
      <div class="flex flex-col mt-[100px]">
        <p class="text-[32px] font-medium w-[666px] uppercase">
          играй и развивай гибкие навыки прямо в своем телефоне
        </p>
        <router-link class="s-bottom__primary mt-[60px] uppercase text-[24px]" to="/login">начать сейчас</router-link>
        <router-link class="s-bottom__second mt-[20px] uppercase text-[24px]" to="/register">уже есть аккаунт</router-link>
      </div>
      <div class="pl-[100px]">
        <img
          class="skils-main max-w-[800px]"
          src="/src/assets/img/skils-main.png"
          alt="skils-main"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skils-main {
  position: relative;
  top: -50px;
}

.s-bottom {
  &__primary {
    text-align: center;
    gap: 10px;
    border-radius: 25px;
    padding: 10px 57px;
    border: 1px #9e56d8 solid;
    color: #ffffff;
    background: #9e56d8;
    transition: background 0.3s ease;

    &:hover {
      border: 1px #ffffff solid;
      background: #fdb941;
      color: #ffffff;
    }
  }

  &__second {
    text-align: center;
    gap: 10px;
    border-radius: 25px;
    padding: 10px 57px;
    border: 1px #9e56d8 solid;
    color: #9e56d8;
    background: #ffffff;
    transition: background 0.3s ease;

    &:hover {
      border: 1px #ffffff solid;
      background: #fdb941;
      color: #ffffff;
    }
  }
}
</style>
