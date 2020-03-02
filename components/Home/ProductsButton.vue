<template>
  <div class="products-button stick-to-bottom">
    <div class="products-button-label">
      {{ $t("home.products") }}
    </div>
    <div class="products-button-img" />
  </div>
</template>
<style lang="scss" scoped>
.products-button {
  display: block;
  height: 240px;
  width: 170px;
  position: absolute;
  right: calc(4rem + 200px);
  transform: scale(0.8) translateY(12.5%);
  transition-duration: 0.3s;
  cursor: pointer;
}
.products-button-label {
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, 0%);
  transition-duration: 0.3s;
}
.products-button:hover {
  transform: scale(1);
  .products-button-label {
    opacity: 1;
    transform: translate(-50%, -100%);
  }
}
.products-button-img {
  display: block;
  height: 240px;
  width: 170px;
  background: url(~assets/img/home/products-icon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  .products-button {
    position: initial;
    margin: 100px auto;
    transform: scale(0.8);
  }
  .products-button-label {
    position: initial;
    opacity: 1;
    transform: translate(0, 240px);
  }
}
</style>
