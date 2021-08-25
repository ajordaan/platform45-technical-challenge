<template>
  <div class="iconContainer">
    <img :src="require('@/assets/images/' + this.imageUrl)" />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: { type: String, required: true },
  },
};
</script>

<style></style>
