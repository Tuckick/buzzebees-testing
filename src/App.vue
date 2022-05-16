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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3f3f3f;
}

#body {
  padding: 20px;
}

/* #footer{
 position:fixed;
 bottom:0;
 width: 100%;
} */
</style>
