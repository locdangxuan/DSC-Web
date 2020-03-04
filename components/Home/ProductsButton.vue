<template>
  <div :class="productButtonClass">
    <div class="products-button-label">
      <p>
        {{ $t("home.products") }}
      </p>
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
  width: 150px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0%;
  opacity: 0;
  transform: translate(-50%, -50%);
  background: url(~assets/img/home/bubbles/danger/bubble-danger-left.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -10px;
  border-radius: 5px;
  overflow: hidden;
  transition-duration: 0.3s;
  p {
    margin: 0;
    color: rgb(4, 4, 53);
    font-family: Google;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
}
.products-button:hover {
  .products-button-label {
    opacity: 1;
    transform: translate(-100%, -50%);
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
    margin: auto;
    transform: translateY(calc(-100% - 1rem));
    background: url(~assets/img/home/bubbles/danger/bubble-danger-bottom.svg);
    background-repeat: no-repeat;
    background-position-y: -10px;
    background-position-x: center;
  }
}
</style>
