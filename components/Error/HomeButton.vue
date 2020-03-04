<template>
  <div class="home-button">
    <div class="home-button-img" />
  </div>
</template>
<style lang="scss" scoped>
.home-button {
  display: block;
  height: 600px;
  width: 630px;
  position: absolute;
  transform: scale(0.8) translate(-50%, 12.5%);
  transition-duration: 0.3s;
  cursor: pointer;
  bottom: 0;
}
.home-button-img {
  display: block;
  height: 600px;
  width: 630px;
  background: url(~assets/img/error/home-icon.svg);
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  .home-button {
    position: relative;
    height: 100vh;
  }
}
@media (max-width: 576px) {
  .home-button-img {
    display: none;
  }
}
</style>
