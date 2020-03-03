<template>
  <b-container fluid class="home-page p-0">
    <Title />
    <ProLink :delay="1000" :to="'/blogs'" :emit="'igniteRocket'">
      <BlogsButton />
    </ProLink>
    <ProLink :delay="1000" :to="'/events'" :emit="'igniteRocket'">
      <EventsButton />
    </ProLink>
    <ProLink :delay="1000" :to="'/products'" :emit="'igniteRocket'">
      <ProductsButton />
    </ProLink>
    <ProLink :delay="1000" :to="'/team'" :emit="'igniteRocket'">
      <TeamButton />
    </ProLink>
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
