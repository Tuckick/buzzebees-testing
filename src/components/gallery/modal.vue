<template>
  <div v-show="isSelected" class="modal-container">
    <img
      src="../../assets/images/icons/previous.png"
      alt="previous button"
      class="button-image"
      @click="clickPrevious()"
    />
    <img
      :src="require('../../assets/images/fruits/' + currentImage() + '.jpg')"
      alt="show your selected fruit"
      class="modal-image"
    />
    <img
      src="../../assets/images/icons/next.png"
      alt="next button"
      class="button-image"
      @click="clickNext()"
    />
  </div>
</template>

<script>
export default {
  name: "ModalView",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    isSelected: {
      type: Boolean,
      require: true,
      default: false,
    },
    selectedImage: {
      type: String,
      require: false,
      default: "fruit-01",
    },
    indexOfSelectedImage: {
      type: Number,
      require: false,
      default: 0,
    },
    listData: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  methods: {
    currentImage() {
      return this.listData.find((item) => item == this.selectedImage);
    },

    clickPrevious() {
      console.log("click Previous");
    },

    clickNext() {
      console.log("click next");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: fit-content;
  padding: 0;
  background-color: #f3f3f3;
  box-shadow: 0 0 4px 0 #585858;

  .modal-image {
    height: 450px;
    width: 600px;
  }

  .button-image {
    padding: 4px;
    width: 24px;
    height: 24px;
  }
}
</style>
