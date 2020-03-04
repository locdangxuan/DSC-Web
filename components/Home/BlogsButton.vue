<template>
  <div class="blogs-button stick-to-bottom">
    <div class="blogs-button-label">
      <p>
        {{ $t("home.blogs") }}
      </p>
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
  width: 150px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(0);
  background: url(~assets/img/home/bubbles/info/bubble-info-bottom.svg);
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
.blogs-button:hover {
  .blogs-button-label {
    opacity: 1;
    transform: translateY(calc(-100% - 1rem));
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
    transform: translateY(calc(-100% - 1rem));
  }
}
</style>
