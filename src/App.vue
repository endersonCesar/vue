<template>
  <div id="app">
   <!-- <navBar />-->
    <b-container class="bv-example-row">
      <b-row>

        
        <b-col >
          <card/> 
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
//import navBar from "./components/navBar.vue";
import card from "./components/card.vue";
//import formulario from "./components/formulario.vue";
export default {
  name: "App",
  components: {
   // navBar,
    card,
   // formulario,
  },
};
</script>

