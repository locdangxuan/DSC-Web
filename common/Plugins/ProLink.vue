<template>
  <a @click="proRedirect">
    <slot />
  </a>
</template>
<script>
export default {
  // eslint-disable-next-line
  props: ["delay", "to", "emit"],
  created() {
    // Catch the click event and redirect itself, like a normal <nuxt-link> tag
    this.$bus.$on("redirect", linkFromBus => {
      setTimeout(() => {
        this.$nuxt.$router.push({ path: linkFromBus })
      }, this.delay)
    })
  },
  methods: {
    proRedirect() {
      this.$bus.$emit(this.emit)
      this.$bus.$emit("redirect", this.to)
    }
  }
}
</script>
