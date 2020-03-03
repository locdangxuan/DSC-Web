<template>
  <b-row class="container">
    <b-col lg="7" class="contact-form">
      <FormContact />
      <div class="contact-icon-space-shuttle-img" />
    </b-col>
    <b-col lg="5" class="map-layout">
      <iframe
        class="gmap_canvas"
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=dai%20hoc%20bach%20khoa%20da%20nang&t=&z=13&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      />
    </b-col>
    <FormInfor />
  </b-row>
</template>

<script>
export default {
  name: "ContactForm",
  components: {
    FormContact: () => import("~/components/Contact/Form.vue"),
    FormInfor: () => import("~/components/Contact/Infor.vue")
  }
}
</script>

<style lang="scss" scoped>
.container {
}
.contact-form {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
}
.contact-icon-space-shuttle-img {
  background: url("~assets/img/common/space-shuttle-icon.svg");
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  background-size: cover;
  position: absolute;
  width: 270px;
  height: 370px;
  bottom: 30px;
  z-index: -1;
}
.map-layout {
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0px;
  transition-duration: 2.5s;
}
.gmap_canvas {
  position: absolute;
}
@media (max-width: 992px) {
  .container {
    max-width: 922px;
    position: unset;
    margin: 0;
  }
  .contact-form {
    position: relative;
  }
  .map-layout {
    position: relative;
  }
  .gmap_canvas {
    position: relative;
  }
}
</style>
