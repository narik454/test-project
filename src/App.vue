<template>
  <router-view/>
</template>

<style lang="scss">
@import "../node_modules/normalize.css/normalize.css";
@import "@/assets/styles.css";

*, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  font-family: 'Inter', sans-serif;
}

.btn {
  font-weight: 500;
  font-size: 0.8333333vw;
  line-height: 140%;
  width: 9.9479166vw;
  height: 2.3958333vw;
  padding: 0.625vw 2.7083333vw;
  background-color: #8BD74B;
  border-radius: 1.5em;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
}



.wrapper {
  width: 72.9168%;
  background-color: #FFFFFF;
}

.draggable-item {
  position: relative;
  padding: 1.25vw 2.760416vw 1.25vw 3.59375vw;
  background: #FFFFFF;
  box-shadow: 0 0.25em 0.25em rgba(12, 110, 214, 0.16);
  border-radius: 0.75em;
  //width: 17.8125em;
  //height: 17.5em;
  width: 14.844vw;
  height: 14.584vw;
  cursor: grab;
}

.draggable-item__img {
  background-size: contain;
  background-repeat: no-repeat;
  //height: 14.5em;
  height: 12.083334vw;
}

.draggable-item:before {
  content: url("@/assets/svg/draggable.svg");
  position: absolute;
  top: 50%;
  left: 0.625vw;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;


  &-background {
    position: fixed;
    background-color: #ECF6E9;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-header {
    box-shadow: 0 0.25em 0.25em rgba(12, 110, 214, 0.16);
    border-radius: 0 0 0.5em 0.5em;
    background-color: #FFFFFF;
    padding: 1.14584vw 2.96875vw;
    z-index: 1;

    &__btn {
      padding: 0.625vw 0;

      &-text {
        font-weight: 400;
        font-size: 0.9375vw;
        line-height: 1.302083vw;
        color: #8BD74B;
        display: inline-flex;
        align-items: center;
        column-gap: 0.4166667vw;

        &:before {
          content: url("@/assets/svg/btn-arrow.svg");
          font-size: 1.5vw;
          width: 1.875166vw;
          height: 1.875166vw;
          line-height: 1vw;
          //padding-top: 0.208333vw;
          background-color: #8BD74B;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  &-main {


    &__title {
      background: linear-gradient(90deg, #3F8CFF 0.06%, #60B9A6 99.94%);
      box-shadow: 0 0.35em 0.4em rgba(12, 110, 214, 0.25);
      border-radius: 0.6em;
      padding: 2.083333vw 0.833333vw;
      font-weight: 700;
      font-size: 2.083333vw;
      line-height: 2.5vw;
      color: #FFFFFF;
      text-align: center;
      margin: 0 2.083333vw;
    }

    &__container {
      padding: 0 2.96875vw;
      margin-top: 4.6875vw;
      display: grid;
      grid-template-areas:
        "drag drop"
        ". drop";
      grid-template-columns: 1fr 1fr;
      column-gap: 2.5vw;

      .home-main__draggable-list {
        display: grid;
        grid-area: drag;
        grid-template-columns: 1fr 1fr;
        gap: 0.625vw 2.5vw;
      }

      > .home-main__droppable-list {
        display: grid;
        grid-area: drop;
        grid-template-columns: 1fr 1fr;
        column-gap: 2.5vw;

        > .droppable-list__categories {
          position: relative;
          display: grid;
          row-gap: 0.625vw;

          > span {
            position: absolute;
            //width: 15.833333em;
            width: 14.844vw;
            text-align: center;
            font-weight: 600;
            font-size: 0.9375vw;
            line-height: 1.145833vw;
            color: #183B59;
            top: -3.333333vw;
          }

          > .droppable-item {
            //width: 17.8125em;
            //height: 17.5em;
            width: 14.844vw;
            height: 14.584vw;
            background: #F2F2F2;
            border: 1px dashed #B0B2C1;
            border-radius: 0.75em;
          }
        }
      }
    }

    &__btn {
      margin: 1.6666666667vw 0 1.6666666667vw 2.96875vw;
    }
  }

  &-footer {
    width: 100%;
  }
}

.droppable-item {
  //width: 17.8125em;
  //height: 17.5em;
  width: 14.844vw;
  height: 14.584vw;
  background: #F2F2F2;
  border: 1px dashed #B0B2C1;
  border-radius: 0.75em;
}

.home-main__draggable-list {
  display: grid;
  grid-area: drag;
  grid-template-columns: 1fr 1fr;
  gap: 0.625vw 2.5vw;
}

> .home-main__droppable-list {
  display: grid;
  grid-area: drop;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5vw;

  > .droppable-list__categories {
    position: relative;
    display: grid;
    row-gap: 0.625vw;

    > span {
      position: absolute;
      //width: 15.833333em;
      width: 14.844vw;
      text-align: center;
      font-weight: 600;
      font-size: 0.9375vw;
      line-height: 1.145833vw;
      color: #183B59;
      top: -3.333333vw;
    }

    > .droppable-item {
      //width: 17.8125em;
      //height: 17.5em;
      width: 14.844vw;
      height: 14.584vw;
      background: #F2F2F2;
      border: 1px dashed #B0B2C1;
      border-radius: 0.75em;
    }
  }
}

</style>
