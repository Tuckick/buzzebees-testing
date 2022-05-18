<template>
  <div id="ProfilePage">
    <div class="page-title">
      <h1>Profile Page</h1>
    </div>
    <div class="profile-container">
      <div class="personal-information-container">
        <p style="border-bottom: 1px solid #f9ac17;">
          Nuttaya Pensrisirikul <span class="star-word">[ Tuck ]</span> <br />I
          was born on 10 Sep 1995
          <span class="star-word">[ 26 years old ]</span>
          <br />I am graduated in Electrical Technology Education
          <span class="star-word">major</span> Computer Engineering
          <span class="star-word">from</span> King Mongkut's University of
          Technology Thonburi.
        </p>
        <p>
          I have worked in
          <span class="star-word">fullstack developer</span> for 3 years. I am
          really enjoy when coding even some time it break up, I always find a
          way out.<br />And in the <span class="star-word">next 3 years</span> I
          will become to <span class="star-word">expert frontend</span>
          developer.
        </p>
        <div class="my-skill">
          <h4>Skills</h4>
          <div class="image-skill-container">
            <img
              v-for="(item, index) in skillList"
              :key="index"
              :src="require('../assets/images/logo/skills/' + item + '.png')"
              :alt="item"
              class="image-skill"
            />
          </div>
        </div>
      </div>
      <div class="profile-image-container">
        <img
          src="../assets/images/tuck-profile.png"
          alt="Tuck Profile"
          class="image"
        />
      </div>
      <div class="beauty-box" />
      <div class="beauty-box2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      skillList: [
        "vue",
        "javascript",
        "html-5",
        "css",
        "sass",
        "flutter",
        "kotlin",
        "aws",
        "serverless",
        "git",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#ProfilePage {
  display: block;
  .page-title {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(233, 233, 237, 1) 19%,
      rgba(233, 239, 241, 1) 49%,
      rgba(233, 233, 237, 1) 81%,
      rgba(255, 255, 255, 1) 100%
    );
  }

  .profile-container {
    position: relative;
    border: 2px solid #f9ac17;
    border-radius: 8px;

    .personal-information-container {
      width: 60%;
      padding: 20px;
      font-size: 18px;
      text-align: left;
      line-height: 1.5;

      .star-word {
        color: #f9ac17;
      }

      .my-skill {
        font-size: 28px;
        color: #f9ac17;
        margin: 32px auto auto;

        h4 {
          margin-top: 0;
          margin-bottom: 20px;
        }

        .image-skill-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .image-skill {
            max-height: 80px;
            padding: 8px;
          }
        }
      }

      @media (max-width: 767px) {
         width: 100%;
         padding: 2px;
         font-size: 16px;
      }
    }

    .profile-image-container {
      position: absolute;
      bottom: 0;
      right: 0;

      .image {
        max-height: 400px;
        width: inherit;
      }

      @media (max-width: 767px) {
        position: unset;
      }
    }

    .beauty-box {
      z-index: -1;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 70%;

      background-color: #ffe1a5;
      border-top-left-radius: 100%;
    }
  }
}
</style>
