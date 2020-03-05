<template>
  <v-app-bar app color="#34558b" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>{{id}}</v-toolbar-title>
    <v-btn @click="home" class="ma-1" color="#4ec5a5">
      <v-icon left>home</v-icon>Home
    </v-btn>
    <v-btn @click="back" class="ma-1" color="#4ec5a5">
      <v-icon left>mdi-arrow-left</v-icon>back
    </v-btn>
    <v-btn @click="go" class="ma-1" color="#4ec5a5">
      Go<v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
    <v-btn @click="logout" class="ma-1" color="#ffaf12">
      <v-icon left>exit_to_app</v-icon>Logout
    </v-btn>
  </v-app-bar>
</template>
<script>
import router from "../router";
export default {
  data() {
    return {
      title: "Farmer's note",
      id: "",
    };
  },
  created() {
    this.id=this.$route.params.id;
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
    },
    logout: function() {
      localStorage.removeItem("token");
      router.push('/login');
    }
  }
};
</script>