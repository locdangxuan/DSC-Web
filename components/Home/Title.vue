<template>
  <div class="home-title">
    <div class="home-title-logo" />
    <div class="home-title-text">
      <p class="m-0 mt-3">
        Developer student club
      </p>
      <p class="m-0">
        Danang University of Technology
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-title {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -100%);
}
.home-title-text {
  font-size: 28px;
}
.home-title-logo {
  display: block;
  margin: auto;
  background: url(~assets/img/common/dsc-logo.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 150px;
  height: 50px;
}
@media (max-width: 992px) {
  .home-title {
    position: initial;
    transform: translate(0, 0);
    padding-top: 100px;
  }
}
</style>
