<template>
  <div v-show="isSelected" class="modal-container">
    <img
      src="../../assets/images/icons/previous.png"
      alt="previous button"
      class="button-image"
      @click="clickPrevious()"
    />
    <img
      :src="
        require('../../assets/images/fruits/' +
          this.listData[this.activeImage] +
          '.jpg')
      "
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
      index: 0,
      activeImage: this.indexOfSelectedImage,
    };
  },
  props: {
    isSelected: {
      type: Boolean,
      require: true,
      default: false,
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
    clickPrevious() {
      this.index -= 1;
      const previousImage = this.indexOfSelectedImage + this.index;
      if (previousImage >= 0) {
        this.activeImage = previousImage;
      } else {
        this.activeImage = 0;
        this.index = 0;
      }
    },

    clickNext() {
      this.index += 1;
      const nextImage = this.indexOfSelectedImage + this.index;
      if (nextImage < this.listData.length) {
        this.activeImage = nextImage;
      } else {
        this.activeImage = 11;
        this.index = 12;
      }
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
