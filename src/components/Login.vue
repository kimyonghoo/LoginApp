<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#34558b" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @keyup.native.enter="login">
                  <v-text-field 
                    v-model="email" 
                    label="Login" 
                    name="login" 
                    prepend-icon="person" 
                    type="text" 
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="login" color="#34558b" dark>Login</v-btn>
              </v-card-actions>
            </v-card>
                <v-alert v-if="alert" type="error">
                  {{message}}
                </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>``
import router from "../router";
export default {
  data() {
    return {
      email:'',
      password: '',
      message:'',
      alert:false,
    };
  },
  methods: {
    login: function() {
      this.$http.post("/auth/signin",{email:this.email, password:this.password}).then(response => {
        if(response.data.status !== 'failed'){
          localStorage.setItem("token",response.data.token);
          router.push({ name: "home", params:{id:response.data.user} }, () => {});
        }else{
          this.alert = true;
          this.message = response.data.message;
        }
    });
      
    }
  }
};
</script>