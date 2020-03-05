<template>
  <div>
    <div class="button-infor" @click.prevent="toggleInfor()">
      CONTACT INFORMATION
    </div>
    <b-card
      :class="containerstatus"
      g-variant="dark"
      style="position: fixed; z-index: 2; transition-duration: 0.3s; height: 32%; top: 25%; background-color: grey"
      @click.prevent="toggleInfor()"
    >
      <b-card-text>
        <p>
          For more ways for you to reach us:
        </p>
        <p>
          <b>
            dsc.dut@gmail.com
          </b>
        </p>
        <p>
          <a href="#">fb.com/dscdut/ </a>
        </p>
        <p>
          <b>
            (+84) 976 76 60 89
          </b>
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
  width: fit-content;
  z-index: 2;
  transition-duration: 0.5s;
  transform: translateX(0%);
  color: white;
  font-size: 22px;
}
.container-hidden {
  position: fixed;
  width: fit-content;
  z-index: 2;
  transition-duration: 0.3s;
  right: 0;
  transform: translateX(100%);
}
@media (max-width: 992px) {
  .container {
    height: fit-content;
  }
}
</style>
