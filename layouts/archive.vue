<template>
  <b-container fluid class="p-0 page-layout">
    <component :is="section" v-for="section in layout" :key="section" />
  </b-container>
</template>

<script>
export default {
  components: {
    Navbar: () => import("~/common/Navbar.vue"),
    Sidebar: () => import("~/common/Sidebar.vue"),
    Footer: () => import("~/common/Footer.vue")
  },
  data() {
    return {
      // Why this? Well, you can store this array in database or somewhere => dynamic layout!
      layout: [
        "Navbar",
        "nuxt", // Need exact 1 <nuxt/> no more or less, you can try and see the ugly result :D
        // <nuxt/> will be the view for components in ~/pages
        // "Sidebar",
        "Footer"
      ]
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
.page-layout {
  height: 100vh;
  background-color: #040211 !important;
  background: url(~assets/img/common/space-bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -300px;
  transition-duration: 0.5s;
}
@media (max-width: 992px) {
  .page-layout {
    height: auto;
    // background-size: cover;
  }
}
</style>
