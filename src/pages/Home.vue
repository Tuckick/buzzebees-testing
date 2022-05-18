<template>
  <div class="home-container">
    <div class="home-container-detail">
      <div class="logo-container">
        <img
          src="../assets/images/logo/godzicode-logo.png"
          alt="godzicode logo"
          class="logo"
        />
      </div>
      <div class="text-container">
        <p class="first-line">Thank you</p>
        <p class="second-line">
          for giving me an <span class="big-word">opportunity.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style lang="scss" scoped>
.home-container {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(233, 233, 237, 1) 19%,
    rgba(233, 239, 241, 1) 49%,
    rgba(233, 233, 237, 1) 81%,
    rgba(255, 255, 255, 1) 100%
  );

  &-detail {
    position: relative;

    .text-container {
      color: black;
      font-weight: 400;
      text-align: left;
      padding: 40px;

      .first-line {
        font-size: 64px;
        padding: 0;
        margin: 0;

        @media (max-width: 767px) {
          font-size: 28px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          font-size: 48px;
        }
      }
      .second-line {
        font-size: 48px;
        padding: 0;
        margin: 0;

        @media (max-width: 767px) {
          font-size: 20px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          font-size: 40px;
        }
      }
      .big-word {
        font-size: 72px;
        color: #f9ac17;

        @media (max-width: 767px) {
          font-size: 32px;
          padding-left: 24px;
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          font-size: 64px;
        }
      }
    }
  }

  .logo-container {
    .logo {
      max-width: 40%;
    }
  }
}
</style>
