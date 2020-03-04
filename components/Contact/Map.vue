<template>
  <div class="container">
    <iframe
      class="gmap_canvas"
      width="100%"
      height="100%"
      src="https://maps.google.com/maps?q=dai%20hoc%20bach%20khoa%20da%20nang&t=&z=13&ie=UTF8&iwloc=&output=embed"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    />
  </div>
</template>

<script>
export default {
  name: "SpaceIcon"
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.map-layout {
  overflow: hidden;
  position: absolute;
  transition-duration: 0.5s;
}
@media (max-width: 992px) {
  .container {
    position: relative;
  }
}
</style>
