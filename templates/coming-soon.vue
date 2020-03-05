<template>
  <div class="container">
    <OrbitalStation />
    <SpaceShuttle />
    <Content />
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  components: {
    OrbitalStation: () => import("~/components/Coming-soon/OrbitalStation.vue"),
    SpaceShuttle: () => import("~/components/Coming-soon/SpaceShuttle.vue"),
    Content: () => import("~/components/Coming-soon/Title.vue")
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  position: relative;
}
@media (max-width: 992px) {
  .container {
    height: 88vh;
    position: relative;
  }
}
</style>
