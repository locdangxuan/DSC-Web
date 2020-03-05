<template>
  <div class="container">
    <div class="form">
      <FormContact />
    </div>
    <div class="space-icon">
      <SpaceIcon />
    </div>
    <div class="map">
      <MapLayout />
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  components: {
    FormContact: () => import("~/components/Contact/Form.vue"),
    SpaceIcon: () => import("~/components/Contact/Space.vue"),
    MapLayout: () => import("~/components/Contact/Map.vue")
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.form {
  width: 40%;
  height: auto;
  position: absolute;
  left: 0%;
  margin: auto;
}
.space-icon {
  position: absolute;
  z-index: 0;
  bottom: 0%;
  left: 0;
}
.map {
  position: absolute;
  height: 100%;
  width: 60%;
  right: 0;
  transition-duration: 0.5s;
}
.info {
  position: absolute;
  height: 100%;
  width: 40%;
}
@media (max-width: 992px) {
  .container {
    width: 100%;
    height: fit-content;
    position: relative;
    height: 100%;
  }
  .form {
    width: 100%;
    float: left;
    position: relative;
    margin-bottom: 10%;
  }
  .space-icon {
    position: relative;
    transition-duration: 0.5s;
  }
  .map {
    height: 50%;
    width: 100%;
    position: relative;
    transition-duration: 0.5s;
  }
  .info {
    position: absolute;
    height: 0%;
    width: 40%;
  }
}
</style>
