<template>
  <div class="footer-container">
    <div v-for="item in contactList" :key="item.index" class="footer-detail">
      <img
        :src="require('../assets/images/icons/' + item.icon + '.png')"
        :alt="item.name"
        class="footer-detail-icon"
      />
      <a :href="item.link" target="_blank" class="footer-detail-desc">{{
        item.detail
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      contactList: [
        {
          name: "telephone",
          icon: "telephone",
          detail: "091-0269651",
          link: "tel:0910269651",
        },
        {
          name: "email",
          icon: "email",
          detail: "godzicodev@gmail.com",
          link: "mailto:godzicodev@gmail.com",
        },
        {
          name: "facebook",
          icon: "facebook",
          detail: "tuck tuckk",
          link: "https://www.facebook.com/tuk.pensrisirikul",
        },
        {
          name: "instagram",
          icon: "instagram",
          detail: "tuckick",
          link: "https://instagram.com/tuckick",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: -2px 1px 4px 2px #585858;
  padding: 16px;

  .footer-detail {
    display: flex;
    align-items: center;
    margin: 8px;
    &-icon {
      max-height: 32px;
      margin-right: 8px;
    }

    &-desc {
      color: #3f3f3f;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .footer-detail {
      flex: 40%;
    }
  }
  @media (max-width: 767px) {
    display: block;
  }
}
</style>