<template>
  <div class="iconWrapper">
    <div class="iconContainer">
      <img :src="require('@/assets/images/' + imageUrl)" />
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
};
</script>

<style scoped lang="scss">
$inputBgColour: #f5f8f9;
.iconWrapper {
  display: flex;
  align-items: center;
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
</style>
