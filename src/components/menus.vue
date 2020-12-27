<template>
  <div>
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Vivo">
        <formulario />
      </md-tab>
      <md-tab id="tab-pages" md-label="Tim">
          <formulario />
       </md-tab>
      <md-tab id="tab-posts" md-label="Oi">
          <formulario />
       </md-tab>
      <md-tab id="tab-favorites" md-label="Claro"> 
          <formulario />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import formulario from "./formulario.vue";

export default {
  name: "TabAlignments",
  components: {
    formulario,

    // menus,
    // formulario,
  },
};
</script>

<style >
.md-tabs {
  margin-bottom: 24px;
}
</style>