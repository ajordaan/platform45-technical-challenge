<template>
  <div id="app">
    <div class="wrapper">
      <div class="columns is-desktop box">
        <div class="leftPanel has-text-centered column is-5-desktop">
          <left-panel @arrowClicked="slidePanel"></left-panel>
        </div>
        <div class="formPanel column is-7-desktop">
          <transition name="slide">
            <div class="slider" v-show="panelOpen">
              <div class="coverText">
                <p class="title">My world today</p>
                <p class="subtitle mt-3">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante.
                  <b style="text-decoration: underline"> View all days </b> eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo. Quisque sit amet est et
                  sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                  sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                  elit eget tincidunt condimentum, eros ipsum rutrum orci,
                  sagittis tempus lacus enim ac dui. Donec non enim in turpis
                  pulvinar facilisis. Ut felis. Praesent dapibus, neque id
                  cursus faucibus, tortor neque egestas augue, eu vulputate
                  magna eros eu erat. Aliquam erat
                </p>
              </div>
            </div>
          </transition>

          <form-panel></form-panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormPanel from "./components/formPanel.vue";
import LeftPanel from "./components/leftPanel.vue";
export default {
  name: "App",
  data() {
    return {
      panelOpen: false,
    };
  },
  methods: {
    slidePanel() {
      this.panelOpen = !this.panelOpen;
    },
  },
  components: { LeftPanel, FormPanel },
};
</script>

<style lang="scss" scoped>
.formPanel {
  position: relative;
}

.leftPanel {
  z-index: 1000 !important;
  position: relative;
}

.coverText {
  margin-top: 20%;
}

.slider {
  position: absolute;
  z-index: 3;
  background: orange;
  width: 100%;
  height: 100%;
  left: 0;
  transition: left 1s ease-in-out;
  border-radius: 0 30px 30px 0;

  // transform: translateX(-100%);
}
.slide-enter,
.slide-leave-active {
  left: -100%;
}

.title {
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 50px !important;
  font-weight: bold;
  font-size: 2.1rem;
}
.subtitle {
  color: #383838;
  font-weight: 400;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.2rem;
}
.wrapper {
  width: unquote("min(100vw, 1500px)");
  margin: 0 auto;
}
.columns {
  margin: 75px 100px;
  border-radius: 30px;
  overflow: hidden;
  padding: 0 !important;
}
.column {
  padding: 0 !important;
}

@media screen and (max-width: 1023px) {
  .leftPanel {
    z-index: 1000;
  }
  .columns {
    margin: 0;
    border-radius: 0;
    overflow: hidden;
    padding: 0 !important;
    border-style: none;
  }

  .slider {
    top: -5%;
    height: 105%;
    transition: top 1s ease-in-out;
    border-radius: 0;
  }

  .slide-enter,
  .slide-leave-active {
    left: 0;
    top: -110%;
  }
}
</style>
