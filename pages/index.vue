<template>
  <b-container fluid class="home-page p-0">
    <Title />
    <nuxt-link to="/blogs">
      <BlogsButton />
    </nuxt-link>
    <nuxt-link to="/events">
      <EventsButton />
    </nuxt-link>
    <nuxt-link to="/products">
      <ProductsButton />
    </nuxt-link>
    <nuxt-link to="/team">
      <TeamButton />
    </nuxt-link>
  </b-container>
</template>

<script>
export default {
  layout: "page",
  name: "Home",
  components: {
    BlogsButton: () => import("~/components/Home/BlogsButton.vue"),
    EventsButton: () => import("~/components/Home/EventsButton.vue"),
    ProductsButton: () => import("~/components/Home/ProductsButton.vue"),
    TeamButton: () => import("~/components/Home/TeamButton.vue"),
    Title: () => import("~/components/Home/Title.vue")
  },
  created() {},
  methods: {},
  head() {
    return {
      title: "Home page",
      description: "A short dummy description"
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: block;
  height: 100%;
  position: relative;
}
</style>
