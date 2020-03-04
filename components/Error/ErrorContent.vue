<template>
  <div class="errorContent" />
</template>
<style lang="scss" scoped>
.errorContent {
  width: 300px;
  height: 200px;
  background: url(~assets/img/error/404.svg);
  background-size: cover;
  right: 10rem;
  top: 5rem;
  position: absolute;
}
@media (max-width: 992px) {
  .errorContent {
    width: 200px;
    height: 170px;
    background-size: cover;
    position: absolute;
    right: 6rem;
  }
}
</style>
