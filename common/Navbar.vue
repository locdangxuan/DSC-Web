<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    style="position: fixed; width: 100%; z-index: 2; transition-duration: 0.3s"
    :class="navBarClass"
  >
    <HamburgerIcon class="d-none d-lg-block float-left mr-2" />
    <b-navbar-toggle target="nav-collapse" />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-if="this.$route.path != '/'">
          <nuxt-link to="/">
            <b-button variant="outline-light" class="navbar-button">
              <fa :icon="['fas', 'home']" />
            </b-button>
          </nuxt-link>
        </b-nav-item>
        <b-nav-item
          v-if="this.$route.path != '/blogs'"
          :class="navItemClass"
          style="transition-duration: 0.3s"
        >
          <ProLink :delay="1000" :to="'/blogs'" :emit="'igniteRocket'">
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("home.blogs") }}
            </b-button>
          </ProLink>
        </b-nav-item>
        <b-nav-item
          v-if="this.$route.path != '/products'"
          :class="navItemClass"
          style="transition-duration: 0.3s"
        >
          <ProLink :delay="1000" :to="'/products'" :emit="'igniteRocket'">
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("home.products") }}
            </b-button>
          </ProLink>
        </b-nav-item>
        <b-nav-item
          v-if="this.$route.path != '/events'"
          :class="navItemClass"
          style="transition-duration: 0.3s"
        >
          <ProLink :delay="1000" :to="'/events'" :emit="'igniteRocket'">
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("home.events") }}
            </b-button>
          </ProLink>
        </b-nav-item>
        <b-nav-item
          v-if="this.$route.path != '/team'"
          :class="navItemClass"
          style="transition-duration: 0.3s"
        >
          <ProLink :delay="1000" :to="'/team'" :emit="'igniteRocket'">
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("home.team") }}
            </b-button>
          </ProLink>
        </b-nav-item>
      </b-navbar-nav>
      <!--  -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="this.$route.path != '/pages/introduction'">
          <ProLink
            :delay="1000"
            :to="'/pages/introduction'"
            :emit="'igniteRocket'"
          >
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("common.introduction") }}
            </b-button>
          </ProLink>
        </b-nav-item>
        <b-nav-item v-if="this.$route.path != '/pages/contact'">
          <ProLink :delay="1000" :to="'/pages/contact'" :emit="'igniteRocket'">
            <b-button variant="outline-light" class="navbar-button">
              {{ $t("common.contact") }}
            </b-button>
          </ProLink>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    HamburgerIcon: () => import("~/common/HamburgerIcon.vue")
  },
  data() {
    return {
      navBarClass: "navbar-hidden",
      navItemClass: "navbar-hidden-item"
    }
  },
  created() {
    this.$bus.$on("activateNavbar", () => {
      // From HamburgerIcon.vue
      this.navBarClass = "navbar-shown"
      this.navItemClass = "navbar-shown-item"
    })
    this.$bus.$on("deactivateNavbar", () => {
      // From HamburgerIcon.vue
      this.navBarClass = "navbar-hidden"
      this.navItemClass = "navbar-hidden-item"
    })
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.navbar-button {
  padding: 0.25rem 0.75rem;
  border: 3px solid #ffffff !important;
}
@media (min-width: 992px) {
  .navbar-hidden {
    background: url(~assets/img/common/block-black.svg);
    background-repeat: repeat-x;
    background-size: contain;
    background-position-y: -100px;
  }
  .navbar-shown {
    background: url(~assets/img/common/block-black.svg);
    background-repeat: repeat-x;
    background-size: contain;
    background-position-y: 0px;
  }
  .navbar-hidden-item {
    transform: translateY(-100px);
  }
  .navbar-shown-item {
    transform: translateY(0);
  }
}
</style>
