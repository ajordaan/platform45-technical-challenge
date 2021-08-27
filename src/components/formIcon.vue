<template>
  <div @click="iconClicked" class="iconWrapper noselect">
    <div :class="['iconContainer', 'grow', { iconClicked: clicked }]">
      <img :src="require('@/assets/images/' + currentImage)" />
    </div>
    <p class="iconText">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: { type: String, required: true },
    text: { type: String, default: "" },
  },
  data() {
    return {
      currentImage: this.imageUrl,
      clicked: false,
    };
  },
  methods: {
    iconClicked() {
      this.clicked = !this.clicked;

      if (this.clicked) {
        this.currentImage = this.clickedImageUrl;
      } else {
        this.currentImage = this.imageUrl;
      }

      this.$emit("iconClicked");
    },
    unclick() {
      this.clicked = false;
      this.currentImage = this.imageUrl;
    },
  },
  computed: {
    clickedImageUrl() {
      return (
        this.imageUrl.split(".")[0] + "--white." + this.imageUrl.split(".")[1]
      );
    },
  },
};
</script>

<style scoped lang="scss">
$inputBgColour: #f5f8f9;
$selectedIconBgColour: #b1bfcd;
.iconWrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.iconClicked {
  background: $selectedIconBgColour !important;
}

.iconContainer {
  width: 55px;
  height: 55px;
  background: $inputBgColour;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconText {
  color: gray;
  margin-left: 20px;
}

@media (hover: hover) and (pointer: fine) {
  .iconWrapper:hover > .iconContainer {
    transform: scale(1.4);
  }
}
</style>
