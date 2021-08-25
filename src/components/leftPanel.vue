<template>
  <div class="leftPanel">
    <img class="avatar" :src="require(`@/assets/images/face.svg`)" />

    <div>
      <p class="title">Front-end challenge!</p>
      <p class="subtitle mt-3">
        This is a design that you will need <br />
        to code up and impress us
      </p>
    </div>
    <div class="arrowContainer">
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
}

.title {
  font-weight: bold;
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
  margin-top: 10%;
  margin-bottom: 15%;
}
.avatar {
  max-height: 80%;
  padding-top: 20%;
  padding-bottom: 15%;
}
</style>
