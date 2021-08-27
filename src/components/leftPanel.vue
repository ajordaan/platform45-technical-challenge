<template>
  <div class="leftPanel">
    <img class="avatar" :src="require(`@/assets/images/face.svg`)" />

    <div>
      <p class="title">Front-end challenge!</p>
      <p class="subtitle mt-3">
        This is a design that you will need to code up and impress us
      </p>
    </div>
    <div @click="clicked" class="arrowContainer noselect grow">
      <img
        :class="['arrow', { flip: flipped }]"
        :src="require(`@/assets/images/arrow.svg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flipped: false,
    };
  },
  methods: {
    clicked() {
      this.flipped = !this.flipped;
      this.$emit("arrowClicked");
      if (this.onMobile() && this.flipped) {
        setTimeout(() => {
          this.scroll();
        }, 1000);
      }
    },
    scroll() {
      this.$smoothScroll({
        scrollTo: document.getElementById("sliderPanel"),
        offset: 25,
        updateHistory: false,
      });
    },
    onMobile() {
      const mediaQuery = window.matchMedia("(max-width: 1023px)");

      return mediaQuery.matches;
    },
  },
};
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
  cursor: pointer;
}

.arrow {
  transition: transform 1s;
}

.flip {
  transform: rotateY(180deg);
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

  .arrow {
    transform: rotate(90deg);
  }
  .flip {
    transform: rotate(-90deg);
  }
}
</style>
