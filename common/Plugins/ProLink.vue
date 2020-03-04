<template>
  <a @click="proRedirect">
    <slot />
  </a>
</template>
<script>
export default {
  // eslint-disable-next-line
  props: ["delay", "to", "emit"],
  data() {
    return {
      redirectDelay: this.delay || 0,
      emittedEvent: this.emit || ""
    }
  },
  created() {
    // Catch the click event and redirect itself, like a normal <nuxt-link> tag
    // linkFromBus == this.to
    this.$bus.$on("redirect", linkFromBus => {
      setTimeout(() => {
        this.$nuxt.$router.push({ path: linkFromBus })
      }, this.redirectDelay)
    })
  },
  methods: {
    proRedirect() {
      this.$bus.$emit(this.emittedEvent)
      this.$bus.$emit("redirect", this.to)
    }
  }
}
</script>
