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
                  <v-text-field v-model="email" label="email" prepend-icon="person" :rules="emailRules" autocomplete="email" @focus="activeLogin"/>
                  <v-text-field v-model="password" label="Password" prepend-icon="lock" type="password" :rules="required" autocomplete="current-password" @focus="activeLogin"/>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                 <v-switch 
                  v-model="click" 
                  :loading="loading"
                  :label="label"
                  :disabled="disabled"
                  :error="error"
                  @change="login()"
              ></v-switch>
              </v-card-actions>
            </v-card>
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
      click:false,
      label:"click to login",
      disabled:false,
      loading:false,
      error:false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      required: [
        value => !!value || "Password is required."
      ],
    };
  },
  methods: {
    isProgressing: function(flag){
      this.disabled=flag;
      this.click=flag;
      this.loading=flag;
    },
    login: function() {
      this.isProgressing(true);
      this.label="Progressing...";
      this.$http.post("/auth/signin",{email:this.email, password:this.password}).then(response => {
        if(response.data.status === true){
          localStorage.setItem("token",response.data.token);
          router.push({ name: "home", params:{id:response.data.user} }, () => {});
        }else{
          this.isProgressing(false);
          this.error=true;
          this.label=response.data.message?response.data.message:"login failed";
        }
     });
    },
    activeLogin : function(){
      this.isProgressing(false);
      this.label="click to login";
      this.error=false;
    },
    isNull: function(obj){
      if(obj==="") this.disabled===true
    }
  }
};
</script>