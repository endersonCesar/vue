<template>
  <div id="app">
    <menus />

    <b-container class="bv-example-row">
      <b-row>
        <b-col> </b-col>
      </b-row>
    </b-container>
  <FooterPage />
  </div>
</template>

<script>
import menus from "./components/menus.vue";
import FooterPage from "./components/footer.vue";
//import formulario from "./components/formulario.vue";
export default {
  name: "App",
  components: {
    menus,
    FooterPage,
    // menus,
    // formulario,
  },
};
</script>

