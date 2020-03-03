<template>
  <v-app-bar app color="#150e44" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>{{id}}</v-toolbar-title>
    <v-btn @click="home" class="ma-1" color="orange darken-2">
      <v-icon left>home</v-icon>Home
    </v-btn>
    <v-btn @click="back" class="ma-1" color="#00ade6">
      <v-icon left>mdi-arrow-left</v-icon>back
    </v-btn>
    <v-btn @click="go" class="ma-1" color="#00ade6">
      Go
      <v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { EventBus } from "../event-bus";
import router from "../router";
export default {
  data() {
    return {
      title: "Farmer's note",
      id: ""
    };
  },
  created() {
    this.id=this.$route.params.id;
    EventBus.$on('title', title => {
      this.title = title;
    });
  },
  methods: {
    go: function() {
      router.go(1);
    },
    back: function() {
      router.back(1);
    },
    home: function() {
      router.push({ name: "home" }, () => {});
    }
  }
};
</script>