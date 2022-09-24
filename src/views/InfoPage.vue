<template>
  <div class="info-page">

    <div class="info-page__container">

      <h1 class="info-page__title">В мире книг</h1>

      <div class="info-page__instruction">
        <h2 class="info-page__instruction-title">Инструкция:</h2>
        <p class="info-page__instruction-text">
          Распредели книги, ориентируясь на названия, по соответствующим
          рубрикам таблицы: «Жанры фольклора», «Не являются жанрами фольклора».
        </p>
      </div>

      <router-link :to="{ name: 'home' }" class="info-page__btn btn">Продолжить</router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: "InfoPage"
}
</script>

<style scoped lang="scss">

.info-page {
  width: 100%;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 36px;
    width: 66.9799%;
    margin: 0 auto;
    z-index: 1;
  }

  &__title {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 1.2;
    color: #8BD74B;
  }

  &__instruction {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 0 0 1.25em 1.25em;
    border-top: 2px solid #8BD74B;
    padding: 1.375em 2.25em;

    &-title {
      font-weight: 700;
      font-size: 1.5625rem;
      line-height: 1.875;
      color: #183B59;
    }

    &-text {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 140%;
      color: #183B59;
    }
  }
}

</style>
