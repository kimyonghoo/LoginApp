<template>
  <v-content>
    <v-container>
      <v-col>
        <v-row>
          <v-input>{{title}}</v-input>
        </v-row>
        <v-row>
          <v-text-field v-model="potato" label="Potato" outlined readonly></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="broccoli" label="Broccoli" outlined readonly></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="carrot" label="Carrot" outlined readonly></v-text-field>
        </v-row>
      </v-col>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      title: "Vegetable",
      potato: "French fries is delicious",
      broccoli: "broccoli is green",
      carrot: "Horses like carrot"
    };
  }
};
</script>