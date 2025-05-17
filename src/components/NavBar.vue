<script setup>
</script>
<template>
  <div class="flex header">
    <div class="container justify-between flex text-white font-semibold">
      <div class="header__title">
        <h1 class="text-2xl">SKILLMASTER</h1>
      </div>
      <div class="header__description text-sm">
        <a class="flex-grow-0">О НАС</a>
        <a class="flex-grow">ЦЕНЫ</a>
        <a class="flex-grow text-right">СКАЧАТЬ СЕЙЧАС</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 77px;
  display: flex;
  background: #8E38D2;
  justify-content: space-between;
  width: 100%;

  &__title {
    display: flex;
    align-items: center;
  }
  &__description {
    display: flex;
    align-items: center;
    a {
      margin-left: 40px;
    }
  }
}
</style>
