<template>
  <div id="GalleryPage">
    <h1>Gallery Page</h1>
    <div class="gallery-container">
      <img
        v-for="item in listFruit"
        :key="item.index"
        :src="require('../assets/images/fruits/' + item + '.jpg')"
        :alt="item.name"
        class="fruit-image"
        @click="clickImage(item)"
      />
    </div>
    <ModalView
      :isSelected="this.isSelected"
      :selectedImage="selectedImage"
    ></ModalView>
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
      selectedImage: "",
    };
  },
  methods: {
    clickImage(i) {
      this.isSelected = true;
      this.selectedImage = i;
    },
  },
};
</script>

<style lang="scss" scoped>
#GalleryPage {
  align-items: center;
  text-align: -webkit-center;

  .gallery-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(3, 200px);
    grid-gap: 16px;
    justify-content: center;
    margin-bottom: 40px;

    .fruit-image {
      width: inherit;
      height: inherit;
      border: 1px solid #f9ac17;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
