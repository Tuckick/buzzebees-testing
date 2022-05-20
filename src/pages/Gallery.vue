<template>
  <div id="GalleryPage">
    <div class="page-title">
      <h1>Gallery Page</h1>
    </div>
    <div class="gallery-container">
      <img
        v-for="(item, index) in listFruit"
        :key="index"
        :src="require('../assets/images/fruits/' + item + '.jpg')"
        :alt="item.name"
        class="fruit-image"
        @click="clickImage(index)"
      />
    </div>
    <ModalView
      :isSelected="isSelected"
      :indexOfSelectedImage="indexOfSelectedImage"
      :listData="listFruit"
      @visible="closeModal()"
    />
  </div>
</template>

<script>
import ModalView from "../components/gallery/modal.vue";

export default {
  name: "GalleryPage",
  components: {
    ModalView,
  },
  data() {
    return {
      listFruit: [
        "fruit-01",
        "fruit-02",
        "fruit-03",
        "fruit-04",
        "fruit-05",
        "fruit-06",
        "fruit-07",
        "fruit-08",
        "fruit-09",
        "fruit-10",
        "fruit-11",
        "fruit-12",
      ],
      isSelected: false,
      indexOfSelectedImage: 0,
    };
  },
  methods: {
    clickImage(index) {
      this.isSelected = true;
      this.indexOfSelectedImage = index;
    },
    closeModal(v) {
      this.isSelected = v;
    },
  },
};
</script>

<style lang="scss" scoped>
#GalleryPage {
  align-items: center;
  text-align: -webkit-center;

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
  .gallery-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 16px;
    justify-content: center;
    justify-items: center;
    margin-bottom: 40px;

    .fruit-image {
      width: 200px;
      height: 200px;
      border: 2px solid #f9ac17;
      object-fit: cover;
    }

    .fruit-image:hover {
      opacity: 0.7;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, 200px);
      grid-template-rows: repeat(6, 200px);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(12, 200px);
    }
  }
}
</style>
