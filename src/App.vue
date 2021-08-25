<template>
  <div id="app wrapper">
    <div class="columns box">
      <div class="has-text-centered column is-3">
        <left-panel></left-panel>
      </div>
      <div class="formPanel column is-7">
        <form-panel></form-panel>
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
.columns {
  margin: 100px;
  border-radius: 30px;
  overflow: hidden;
  padding: 0 !important;
}
.column {
  padding: 0 !important;
}
</style>
