<template>
  <div class="events-button">
    <div class="events-button-label">
      <p>
        {{ $t("home.events") }}
      </p>
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
  width: 150px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform: translate(0, 0);
  background: url(~assets/img/home/bubbles/warning/bubble-warning-right.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -10px;
  border-radius: 5px;
  overflow: hidden;
  transition-duration: 0.3s;
  p {
    margin: 0;
    color: rgb(4, 4, 53);
    font-family: Google;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 50px;
  }
}
.events-button:hover {
  .events-button-label {
    opacity: 1;
    transform: translate(70%, 0);
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
    margin: auto;
    transform: translateY(calc(-100% - 1rem));
    background: url(~assets/img/home/bubbles/warning/bubble-warning-bottom.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: -10px;
  }
}
</style>
