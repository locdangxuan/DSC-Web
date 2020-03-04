<template>
  <div class="team-button stick-to-bottom">
    <div class="team-button-label">
      <p>
        {{ $t("home.team") }}
      </p>
    </div>
    <div class="team-button-img" />
  </div>
</template>
<style lang="scss" scoped>
.team-button {
  display: block;
  height: 170px;
  width: 170px;
  position: absolute;
  right: 2rem;
  transform: scale(0.8) translateY(12.5%);
  transition-duration: 0.3s;
  cursor: pointer;
}
.team-button-label {
  width: 150px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(0);
  background: url(~assets/img/home/bubbles/success/bubble-success-top.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: 0px;
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
.team-button:hover {
  .team-button-label {
    opacity: 1;
    transform: translateY(calc(-100% - 1rem));
  }
}
.team-button-img {
  display: block;
  height: 170px;
  width: 170px;
  background: url(~assets/img/home/team-icon.svg);
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
}
@media (max-width: 992px) {
  .team-button {
    position: initial;
    transform: scale(0.8);
    margin: 50px auto 100px;
  }
  .team-button-label {
    position: initial;
    opacity: 1;
    margin: auto;
    transform: translateY(calc(-100% - 1rem));
    background: url(~assets/img/home/bubbles/success/bubble-success-bottom.svg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: -10px;
  }
}
</style>
