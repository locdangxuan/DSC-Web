<template>
  <div class="events-button">
    <div class="events-button-label">
      {{ $t("home.events") }}
    </div>
    <div class="events-button-img" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      eventItemClass: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.events-button {
  display: block;
  height: 212px;
  width: 200px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: scale(0.8) translate(50%, 12.5%);
  transition-duration: 0.3s;
  cursor: pointer;
}
.events-button-label {
  color: white;
  font-size: 24px;
  font-family: Itim;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 100%;
  opacity: 0.4;
  transform: translate(0%, 0%);
  transition-duration: 0.3s;
}
.events-button:hover {
  transform: scale(1) translate(50%, 12.5%);
  .events-button-label {
    opacity: 1;
    font-size: 48px;
    transform: translate(0%, -50%);
  }
}
.events-button-img {
  display: block;
  height: 200px;
  width: 212px;
  background: url(~assets/img/home/events-icon.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  .events-button {
    position: initial;
    transform: scale(0.8) translate(0, 0);
    margin: 100px auto;
  }
  .events-button-label {
    position: initial;
    opacity: 1;
    transform: translate(0%, 200px);
  }
}
</style>
