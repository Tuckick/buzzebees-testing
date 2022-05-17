<template>
  <div id="app">
    <HeaderBar id="header"></HeaderBar>
    <div id="body">

      <router-view></router-view>
    </div>
    <FooterBar id="footer"></FooterBar>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Akshar:wght@500&display=swap');

html, body {
  font-family: 'Akshar', sans-serif;
}

#app {
  font-family: 'Akshar', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f3f;
}

#body {
  padding: 20px;
}
</style>
