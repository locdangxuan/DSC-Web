<template>
  <div>
    <div class="errorContent" />
  </div>
</template>
<style lang="scss" scoped>
.errorContent {
  width: 300px;
  height: 210px;
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
@media (max-width: 768px) {
  .errorContent {
    width: 200px;
    height: 170px;
    background-size: cover;
    position: absolute;
    right: 3rem;
    top: 10rem;
  }
}
@media (max-width: 576px) {
  .errorContent {
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
