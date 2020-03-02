<template>
  <div class="blogs-button stick-to-bottom">
    <div class="blogs-button-label">
      {{ $t("home.blogs") }}
    </div>
    <div class="blogs-button-img" />
  </div>
</template>
<style lang="scss" scoped>
.blogs-button {
  display: block;
  height: 170px;
  width: 170px;
  position: absolute;
  left: 25%;
  transform: scale(0.8) translate(-50%, 12.5%);
  transition-duration: 0.3s;
  cursor: pointer;
}
.blogs-button-label {
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0;
  transform: translate(-50%, 0%);
  transition-duration: 0.3s;
}
.blogs-button:hover {
  transform: scale(1) translate(-50%, 0);
  .blogs-button-label {
    opacity: 1;
    transform: translate(-50%, -100%);
  }
}
.blogs-button-img {
  display: block;
  height: 170px;
  width: 170px;
  background: url(~assets/img/home/blogs-icon.svg);
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  .blogs-button {
    position: initial;
    margin: 100px auto;
    transform: scale(0.8) translate(0, 0);
  }
  .blogs-button-label {
    position: initial;
    opacity: 1;
    transform: translate(0, 170px);
  }
}
</style>
