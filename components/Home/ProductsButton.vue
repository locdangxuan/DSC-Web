<template>
  <div :class="productButtonClass">
    <div class="products-button-label">
      {{ $t("home.products") }}
    </div>
    <div class="products-button-img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      productButtonClass: "products-button stick-to-bottom"
    }
  },
  created() {
    this.$bus.$on("igniteRocket", () => {
      // Other components can ignite the rocket!
      this.productButtonClass += " flyaway"
    })
  }
}
</script>
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
  &.flyaway {
    animation: flyaway 1.5s;
    .products-button-label {
      display: none;
    }
  }
}

@keyframes flyaway {
  0% {
    transform: scale(0.8) scaleX(0.8) translateY(12.5%);
  }
  10% {
    transform: scale(0.8) scaleX(-0.8) translateY(12.5%);
  }
  30% {
    transform: scale(0.6) scaleX(-0.8) translateY(12.5%) rotate(-50deg);
  }
  100% {
    transform: scale(0) scaleX(-1) translateY(12.5%) rotate(-80deg);
    bottom: 400px;
    right: -80px;
  }
}
.products-button-label {
  color: white;
  font-size: 24px;
  font-family: Itim;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0.4;
  transform: translate(-100%, -50%);
  transition-duration: 0.3s;
}
.products-button:hover {
  transform: scale(1);
  .products-button-label {
    opacity: 1;
    font-size: 48px;
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
