<template>
  <v-content>
    <v-container>
      <v-btn id="fruit" v-on:click="goToFruit()">Fruit information</v-btn>
      <v-btn id="vege" v-on:click="goToVege()">Vegetable information</v-btn>
      <v-btn id="vege" v-on:click="goToUser()">User information</v-btn>
    </v-container>
  </v-content>
</template>
<script>
import router from "../router";
export default {
  methods: {
    goToFruit: function() {
      router.push({
        name: "fruit"
      });
    },
    goToVege: function() {
      router.push({
        name: "vege"
      });
    },
    goToUser: function() {
      router.push({
        name: "user"
      });
    }
  }
};
</script>