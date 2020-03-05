<template>
  <div class="errorContent">
    <h1>404</h1>
    <h2>NOT FOUND</h2>
  </div>
</template>
<style lang="scss" scoped>
.errorContent {
  width: 300px;
  height: 210px;
  // background: url(~assets/img/error/404.svg);
  background-size: cover;
  right: 10rem;
  top: 5rem;
  position: absolute;
  color: white;
  h1 {
    font-size: 150px;
  }
  h2 {
    font-size: 50px;
  }
}
@media (max-width: 992px) {
  .errorContent {
    width: 200px;
    height: 170px;
    position: absolute;
    right: 10rem;
    h1 {
      font-size: 100px;
    }
    h2 {
      font-size: 30px;
    }
  }
}
@media (max-width: 768px) {
  .errorContent {
    width: 200px;
    height: 170px;
    position: absolute;
    right: 2rem;
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
    h1 {
      font-size: 150px;
    }
    h2 {
      font-size: 50px;
    }
  }
}
</style>
