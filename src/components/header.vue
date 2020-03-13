<template>
  <v-app-bar app color="#34558b" dark>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>{{account}}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-title>Expiredin: {{minutes }}:{{seconds}}</v-toolbar-title>
    <v-btn @click="home" class="ma-1" color="#4ec5a5">
      <v-icon left>home</v-icon>Home
    </v-btn>
    <v-btn @click="back" class="ma-1" color="#4ec5a5" v-if="this.$route.name!=='home'">
      <v-icon left>mdi-arrow-left</v-icon>back
    </v-btn>
    <v-btn @click="go" class="ma-1" color="#4ec5a5">
      Go<v-icon right>mdi-arrow-right</v-icon>
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog" width="400" persistent>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="ma-1" color="#ffaf12">
            <v-icon left>exit_to_app</v-icon>Logout
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            Do you want to logout ?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#34558b" text @click="logout">YES</v-btn>
            <v-btn color="#34558b" text @click="dialog = false">NO</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app-bar>
</template>
<script>
import {EventBus} from "../event-bus"
import router from "../router";
export default {
  data() {
    return {
      title: "Farmer's note",
      account: "",
      dialog: false,
      totalTime: 0,
    };
  },
  created() {
    this.account = sessionStorage.getItem('account');
    this.totalTime = this.$route.params.timeout/1000;
    this.startTimer();
    EventBus.$on("timeout", v=>{
      this.totalTime = v;
    })
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
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("account");
      router.push('/login');
    },
    startTimer: function() {
        this.timer = setInterval(() => this.countdown(), 1000);
    },
    padTime: function(time) {
        return (time < 10 ? '0' : '') + time;
    },
    countdown: function() {
        if(this.totalTime >= 1) {
            this.totalTime--;
        } else {
            this.totalTime = 0;
            clearInterval(this.timer);
            this.logout();
        }
    }
  },
  computed: {
    minutes: function() {
        const minutes = Math.floor(this.totalTime / 60);
        return this.padTime(minutes);
    },
    seconds: function() {
        const seconds = this.totalTime - (this.minutes * 60);
        return this.padTime(seconds);
    }
  }
};
</script>