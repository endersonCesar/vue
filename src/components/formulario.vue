<template>
  <div>
    <b-container class="bv-example-row">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-row>
          <b-col>
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Entre com o seu email"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="input-group-2" label="Nome" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Entre com o seu nome"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-3"
              label="Comida:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row cols="2">
          <b-col>
            <div>
              
              
              <md-button class="md-raised md-primary">Cadastrar</md-button>
              <md-button class="md-raised md-accent">Cancelar</md-button>
           
            </div>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
    <hr />
    <b-container>
      <b-row>
        <b-col>
          <tabela />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import tabela from "./tabela.vue";

export default {
  name: 'RegularButtons',
  components: {
    tabela,
    // menus,
    // formulario,
  },

  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Selecione a sua comida", value: null },
        "Arroz",
        "Feijão",
        "Batata",
        "Macarrão",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
small {
    display: block;
  }
</style>
