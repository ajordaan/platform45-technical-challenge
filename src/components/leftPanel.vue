<template>
  <div class="leftPanel">
    <img class="avatar" :src="require(`@/assets/images/face.svg`)" />

    <div>
      <p class="title">Front-end challenge!</p>
      <p class="subtitle mt-3">
        This is a design that you will need to code up and impress us
      </p>
    </div>
    <div @click="$emit('arrowClicked')" class="arrowContainer">
      <img class="arrow" :src="require(`@/assets/images/arrow.svg`)" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.leftPanel {
  background-color: #ffd500;
  height: 100%;
}

.title {
  font-weight: bold;
  font-size: 2.1rem;
}

.subtitle {
  margin-left: 20%;
  margin-right: 20%;
  font-size: 1.3rem;
}

.arrowContainer {
  width: 65px;
  height: 65px;
  background: #383838;
  margin: 0 auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
}
.avatar {
  max-height: 80%;
  padding-top: 30%;
  padding-bottom: 20%;
}

@media screen and (max-width: 1023px) {
  .avatar {
    padding-top: 20%;
  }

  .leftPanel {
    padding-bottom: 20%;
  }
}
</style>
