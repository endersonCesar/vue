<template>
  <div id="app">
    <navBar />
    <b-container class="bv-example-row">
      <b-row>
        <b-col > <formulario style="margin-top: 60px;" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navBar from "./components/navBar.vue";
import formulario from "./components/formulario.vue";
export default {
  name: "App",
  components: {
    navBar,
    formulario,
  },
};
</script>

