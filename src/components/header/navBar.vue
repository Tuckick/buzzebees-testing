<template>
  <div>
    <ul class="nav-bar-container">
      <router-link to="/profile"> Profile </router-link>
      <router-link to="/gallery"> Gallery </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.nav-bar-container {
  width: 100%;
  display: flex;
  justify-content: inherit;
  align-items: center;
  color: #3f3f3f;
  list-style: none;

  a {
    width: 100%;
    padding: 20px;
    color: #3f3f3f;
    font-weight: bold;
    text-decoration: none;
  }
  a:focus {
    color: #f9ac17;
  }
  a:active {
    color: #f9ac17;
  }
}
</style>
