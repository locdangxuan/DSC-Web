<template>
  <div class="team-button stick-to-bottom">
    <div class="team-button-label">
      {{ $t("home.team") }}
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
  color: white;
  font-size: 24px;
  font-weight: bold;
  font-family: Itim;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  opacity: 0.4;
  transform: translate(-50%, -100%);
  transition-duration: 0.3s;
}
.team-button:hover {
  transform: scale(1);
  .team-button-label {
    opacity: 1;
    font-size: 48px;
    transform: translate(-50%, -100%);
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
    transform: translate(0, 170px);
  }
}
</style>
