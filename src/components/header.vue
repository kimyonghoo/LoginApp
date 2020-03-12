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
    <v-btn @click="snackbar.visible=true" class="ma-1" color="#ffaf12">
      <v-icon left>exit_to_app</v-icon>Logout
    </v-btn>
    <v-snackbar class="mt-12 mr-3"
      v-model="snackbar.visible"
      :color="snackbar.color" 
      :top="snackbar.top"
      :right="snackbar.right"
    ><v-icon left>exit_to_app</v-icon>
      Do you want to logout?                                      
      <v-btn @click="logout" dark text>YES</v-btn>
      <v-btn @click="snackbar.visible=false" class="ma-1" dark text>NO</v-btn>
    </v-snackbar>
  </v-app-bar>
</template>
<script>
import router from "../router";
export default {
  data() {
    return {
      title: "Farmer's note",
      id: "",
      snackbar:{
        visible:true,
        top:true,
        right:true,
        color:"#ffaf12"
      }
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