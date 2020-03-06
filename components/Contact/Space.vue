<template>
  <div class="contact-icon-space-shuttle-img" />
</template>

<script>
export default {
  name: "SpaceIcon"
}
</script>

<style lang="scss" scoped>
.contact-icon-space-shuttle-img {
  background: url("~assets/img/contact/space-shuttle-icon.svg");
  background-size: cover;
  position: relative;
  width: 270px;
  height: 183px;
  // bottom: 30px;
  // z-index: -1;
  transition-duration: 0.5s;
}
@media (max-width: 992px) {
  .contact-icon-space-shuttle-img {
    width: 170px;
    height: 120px;
    position: fixed;
    bottom: 25%;
  }
}
</style>
