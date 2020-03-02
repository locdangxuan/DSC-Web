<template>
  <b-container fluid class="footer">
    <span class="footer-logo" />
    <span class="footer-content">{{ $t("common.footer.title") }}</span>
    <span class="footer-social-url">
      <a href="https://fb.com">Facebook</a>
      <span> | </span>
      <a href="https://fb.com">Github</a>
      <span> | </span>
      <a href="https://fb.com">Instagram</a>
      <span> | </span>
      <a
        v-if="$i18n.locale == 'en'"
        href="#"
        size="sm"
        style="font-weight: bold"
        variant="danger"
        @click="$i18n.locale = 'vi'"
      >
        {{ $t("home.lang") }}
      </a>
      <a
        v-if="$i18n.locale == 'vi'"
        href="#"
        size="sm"
        style="font-weight: bold"
        variant="danger"
        @click="$i18n.locale = 'en'"
      >
        {{ $t("home.lang") }}
      </a>
    </span>
  </b-container>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  padding: 0.25rem;
  background-color: rgb(0, 0, 0);
  color: #fff;
}
.footer-logo {
  display: block;
  float: left;
  height: 16px;
  width: 35px;
  margin-top: 4px;
  margin-right: 0.25rem;
  background: url(~assets/img/common/footer-logo.svg);
  background-size: contain;
  background-repeat: no-repeat;
}
.footer-content {
  float: left;
}
.footer-social-url {
  float: right;
  a {
    color: #fff !important;
  }
}
@media (max-width: 991.98px) {
  .footer {
    text-align: center;
    position: initial;
  }
  .footer-logo {
    display: block;
    float: none;
    margin: auto;
  }
  .footer-content {
    display: block;
    float: none;
  }
  .footer-social-url {
    display: block;
    float: none;
  }
}
// @media (min-width: 768px) and (max-width: 991.98px) {

// }
// @media (min-width: 576px) and (max-width: 767.98px) {

// }
// @media (max-width: 575.98px) {

// }
</style>
