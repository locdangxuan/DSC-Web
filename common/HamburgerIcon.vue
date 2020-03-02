<template>
  <div :class="className" @click="toggleMenu()">
    <div class="hamburger-slice-1" />
    <div class="hamburger-slice-2" />
    <div class="hamburger-slice-3" />
    <div class="hamburger-slice-4" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickState: false,
      className: "hamburger-menu"
    }
  },
  methods: {
    toggleMenu() {
      this.clickState = !this.clickState
      if (this.clickState) {
        this.className = "hamburger-menu active"
        this.$bus.$emit("activateNavbar")
      } else {
        this.className = "hamburger-menu"
        this.$bus.$emit("deactivateNavbar")
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hamburger-menu {
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: relative;
  border: 3px solid #fff;
  border-radius: 4px;
}

.hamburger-slice-1,
.hamburger-slice-2,
.hamburger-slice-3,
.hamburger-slice-4 {
  width: 25px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
  border-radius: 3px;
}

.hamburger-slice-1 {
  transform: translate(-50%, calc(-50% - 8px));
}

.hamburger-slice-4 {
  transform: translate(-50%, calc(-50% + 8px));
}

.active .hamburger-slice-1 {
  transform: translate(-50%, -50%);
  opacity: 0;
}

.active .hamburger-slice-2 {
  transform: translate(-50%, -50%) rotate(45deg);
}

.active .hamburger-slice-3 {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.active .hamburger-slice-4 {
  transform: translate(-50%, -50%);
  opacity: 0;
}
</style>
