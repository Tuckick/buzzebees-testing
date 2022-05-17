<template>
  <div v-show="isSelected" class="modal-container">
    <img
      src="../../assets/images/icons/previous.png"
      alt="previous button"
      class="button-image"
    />
    <img
      :src="require('../../assets/images/fruits/' + selectedImage + '.jpg')"
      alt="show your selected fruit"
      class="modal-image"
    />
    <img
      src="../../assets/images/icons/next.png"
      alt="next button"
      class="button-image"
    />
  </div>
</template>

<script>
export default {
  name: "ModalView",
  props: {
    isSelected: {
      type: Boolean,
      default: false,
      require: true,
    },
    selectedImage: {
      type: String,
      default: "fruit-01",
      require: false,
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
  box-shadow: 0 0px 4px 2px #585858;

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
