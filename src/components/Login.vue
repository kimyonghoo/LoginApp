<template>
  <v-app id="login">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="#34558b" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    v-model="email" 
                    label="email" 
                    prepend-icon="person" 
                    :rules="rules.email" 
                    autocomplete="email" 
                    v-on:keyup.enter="login"
                  />
                  <v-text-field 
                    v-model="password" 
                    label="Password" 
                    prepend-icon="lock"
                    type="password" 
                    :rules="rules.password" 
                    autocomplete="current-password" 
                    v-on:keyup.enter="login"
                   />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  name="submit"
                  @click="login"
                  :disabled="isDisabled"
                >LOGIN</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <template>
          <div class="text-center ma-2">
            <v-snackbar
              v-model="snackBar"
              :color="snackColor"
            >{{ snackMessage }}              
            </v-snackbar>
          </div>
        </template>
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
      emailConfirm: false,
      passwordConfirm: false,
      rules: {
        email: [
          v =>!!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          v => this.emailConfirm = !!v && /.+@.+\..+/.test(v)
        ],
        password: [
          v => !!v || 'Password is required',
          v => this.passwordConfirm = !!v
        ]
      },
      snackBar:false,
      snackMessage:'',
      snackColor: '',
    };
  },
  methods: {
    login: function() {
      if(this.isDisabled) return;
      this.snackBar = true;
      this.snackColor = 'info';
      this.snackMessage = 'Progressing...';
      this.$http.post("/auth/signin",{email:this.email, password:this.password}).then(response => {
        if(response.data.status === true){
          this.snackColor = 'success';
          this.snackMessage = 'Success';
          localStorage.setItem("token",response.data.token);
          router.push({ name: "home", params:{id:response.data.user}}, () => {});
        }else{
          this.snackBar = true;
          this.snackColor = 'error';
          this.snackMessage = response.data.message;
        }
     });
    },
  },
  computed: {
    isDisabled() {
      return (this.emailConfirm && this.passwordConfirm)?false:true;
    }
  }
};
</script>