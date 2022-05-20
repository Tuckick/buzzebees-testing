<template>
  <div v-show="isSelected" class="modal-container" @click.self="closeModal()">
    <img
      src="../../assets/images/icons/previous.png"
      alt="previous button"
      class="button-image"
      @click="clickPrevious()"
    />
    <img
      :src="
        require('../../assets/images/fruits/' + this.listData[showImg] + '.jpg')
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
  data() {
    return {
      index: 0,
    };
  },
  computed: {
    showImg() {
      const activeImage = this.indexOfSelectedImage;
      return activeImage + this.index;
    },
  },
  methods: {
    clickPrevious() {
      this.index -= 1;
      const previousImage = this.indexOfSelectedImage + this.index;
      if (previousImage <= 0) {
        this.index++;
      }
    },

    clickNext() {
      this.index += 1;
      const nextImage = this.indexOfSelectedImage + this.index;
      if (nextImage >= this.listData.length) {
        this.index--;
      }
    },

    closeModal() {
      this.$emit("visible", false);
      this.index = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  display: flex;
  place-items: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);

  .modal-image {
    margin: auto;
    display: block;
    width: 77%;
    max-width: 700px;
  }

  .button-image {
    padding: 4px;
    width: 72px;
    height: 72px;

    @media (max-width: 767px) {
      width: 24px;
      height: 24px;
    }
  }

  .button-image:hover {
    opacity: 0.7;
  }

  .modal-image,
  .button-image {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .close-btn {
    position: absolute;
    top: -44px;
    right: 0;
    height: 32px;
  }
}
</style>
