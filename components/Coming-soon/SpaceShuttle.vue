<template>
  <div class="space-shuttle-img" />
</template>

<script>
export default {
  name: "SpaceShuttle"
}
</script>

<style lang="scss" scoped>
.space-shuttle-img {
  background: url(~assets/img/coming-soon/Space_Shuttle.svg);
  background-size: cover;
  position: absolute;
  width: 530px;
  height: 410px;
  top: 15%;
}
@media (max-width: 992px) {
  .space-shuttle-img {
    position: absolute;
    transform: scale(0.8) translate(0, 0);
    top: 35%;
    width: 400px;
    height: 320px;
  }
}
</style>
