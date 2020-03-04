<template>
  <b-container class="error">
    <nuxt-link to="/">
      <HomeButton />
    </nuxt-link>
    <ErrorContent />
  </b-container>
</template>

<script>
export default {
  layout: "page",
  name: "Error",
  components: {
    HomeButton: () => import("~/components/Error/HomeButton.vue"),
    ErrorContent: () => import("~/components/Error/ErrorContent.vue")
  },
  created() {},
  methods: {},
  head() {
    return {
      title: "Error page",
      description: "A short dummy description"
    }
  }
}
</script>

<style lang="scss" scoped></style>
