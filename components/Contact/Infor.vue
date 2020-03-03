<template>
  <div>
    <div class="button-infor" @click.prevent="toggleInfor()">
      CONTACT INFORMATION
    </div>
    <b-card
      header="Default"
      :class="containerstatus"
      g-variant="dark"
      style="position: fixed; z-index: 2; transition-duration: 0.3s; height: 32%; top: 25%; background-color: grey"
      @click.prevent="toggleInfor()"
    >
      <b-card-text>
        <p>
          Đây là thông tin
        </p>
        <p>
          Đây là thông tin
        </p>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "InfoForm",
  data() {
    return {
      statusInfor: false,
      containerstatus: "container-hidden"
    }
  },
  methods: {
    toggleInfor() {
      this.statusInfor = !this.statusInfor
      if (this.statusInfor) {
        this.containerstatus = "container"
      } else {
        this.containerstatus = "container-hidden"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.button-infor {
  position: fixed;
  top: 40%;
  transform: rotate(-90deg);
  width: 13em;
  height: 3em;
  right: -95px;
  background-color: grey;
  text-align: center;
  border-radius: 10px;
}
.container {
  right: 0;
  position: fixed;
  width: 20%;
  z-index: 2;
  transition-duration: 0.5s;
  transform: translateX(0%);
  text-color: white;
  font-size: 22px;
}
.container-hidden {
  position: fixed;
  width: 20%;
  z-index: 2;
  transition-duration: 0.3s;
  right: 0;
  transform: translateX(100%);
}
@media (max-width: 992px) {
  .container {
    right: 0;
    position: fixed;
    width: 40%;
    z-index: 2;
    transition-duration: 0.5s;
    transform: translateX(0%);
    text-color: white;
    font-size: 22px;
  }
}
</style>
