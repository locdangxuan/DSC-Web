<template>
  <component :is="template" :page-data="page" />
</template>

<script>
export default {
  layout: "page",
  name: "LandingPage",
  data() {
    return {
      template: this.$get_template("contact-form"), // Get the template
      page: this.$fake("pages")[0] // Get the first object in data/fake/pages.js
    }
  },
  mounted() {
    console.log(this.$nuxt)
  },
  head() {
    return {
      title: this.page.title,
      description: this.page.description
    }
  }
}
</script>

<style lang="scss"></style>
