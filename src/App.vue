<template>
  <div id="app">
    <div class="wrapper">
      <div class="columns is-desktop box">
        <div class="has-text-centered column is-5-desktop">
          <left-panel></left-panel>
        </div>
        <div class="formPanel column is-7-desktop">
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
  components: { LeftPanel, FormPanel },
};
</script>

<style lang="scss" scoped>
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
  .columns {
    margin: 0;
    border-radius: 0;
    overflow: hidden;
    padding: 0 !important;
    border-style: none;
  }
}
</style>
