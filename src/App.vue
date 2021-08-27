<template>
  <div id="app">
    <transition name="fade">
      <div v-show="pageLoaded" class="wrapper">
        <div class="columns is-desktop box">
          <div class="leftPanel has-text-centered column is-5-desktop">
            <left-panel @arrowClicked="slidePanel"></left-panel>
          </div>
          <div class="formPanel column is-7-desktop">
            <transition name="slide">
              <slider-panel v-show="panelOpen"> </slider-panel>
            </transition>
            <form-panel></form-panel>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FormPanel from "./components/formPanel.vue";
import LeftPanel from "./components/leftPanel.vue";
import SliderPanel from "./components/SliderPanel.vue";
export default {
  name: "App",
  data() {
    return {
      pageLoaded: false,
      panelOpen: false,
    };
  },
  methods: {
    slidePanel() {
      this.panelOpen = !this.panelOpen;
    },
  },
  mounted() {
    this.pageLoaded = true;
  },
  components: { LeftPanel, FormPanel, SliderPanel },
};
</script>

<style lang="scss" scoped>
.formPanel {
  position: relative;
}

.leftPanel {
  z-index: 10 !important;
  position: relative;
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
