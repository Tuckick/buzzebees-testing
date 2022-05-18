<template>
  <div class="hamburger-container">
    <img
      src="../../assets/images/icons/hamburger.png"
      alt="hamburger menu"
      class="icon"
      @click="isShowMenu()"
    />
    <div v-if="this.isShow" class="menu-side-bar-container">
      <ul class="menu-list">
        <img
          src="../../assets/images/icons/close.png"
          alt="close menu"
          class="icon close-icon"
          @click="isCloseMenu()"
        />
        <div @click="goToProfile()" class="menu-list-box">
          <img
            src="../../assets/images/icons/profile.png"
            alt="profile icon"
            class="menu-list-box-icon"
          />
          Profile
        </div>
        <div @click="goToGallery()" class="menu-list-box">
          <img
            src="../../assets/images/icons/gallery.png"
            alt="gallery icon"
            class="menu-list-box-icon"
          />
          Gallery
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    isShowMenu() {
      return (this.isShow = true);
    },
    isCloseMenu() {
      return (this.isShow = false);
    },
    goToProfile() {
      this.isCloseMenu();
      this.$router.push("/profile");
    },
    goToGallery() {
      this.isCloseMenu();
      this.$router.push("/gallery");
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  .icon {
    max-height: 24px;
    width: fit-content;
  }

  .menu-side-bar-container {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background-color: #f9ac17;
    box-shadow: 0px 0 4px 2px #585858;

    .menu-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;

      &-box {
        padding: 32px;
        border-bottom: 1px solid #d9a238;
        color: #3f3f3f;
        font-weight: bold;
        text-decoration: none;

        &-icon {
          max-height: 24px;
          width: fit-content;
          padding-right: 8px;
        }
      }

      .close-icon {
        align-self: end;
        padding: 16px;
      }
    }
  }
}
</style>
