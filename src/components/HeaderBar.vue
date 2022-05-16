<template>
  <div class="header-container">
    <img
      src="../assets/images/logo/godzicode-logo.png"
      alt="godzicode logo"
      @click="goToHomePage()"
      class="logo"
    />
    <!-- <NavBar></NavBar> -->
    <HamburgerMenu></HamburgerMenu>
  </div>
</template>

<script>
// import NavBar from "../components/header/navBar.vue";
import HamburgerMenu from "../components/header/hamburgerMenu.vue";

export default {
  name: "HeaderBar",
  components: {
    // NavBar,
    HamburgerMenu,
  },
  methods: {
    goToHomePage(){
      this.$router.push({ name: 'HomePage' })
    }
    
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: -3px -1px 4px 2px #585858;
  padding: 16px;
  .logo {
    max-height: 100px;
  }
}
</style>
