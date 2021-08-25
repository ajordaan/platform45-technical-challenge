<template>
  <div id="app">
    <div class="columns">
      <div class="has-text-centered column is-5">
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

<style lang="scss"></style>
