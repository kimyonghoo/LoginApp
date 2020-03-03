<template>
  <v-content>
    <v-container>
      <v-col>
        <v-row>
          <v-data-table :headers="headers" :items="colInfo"></v-data-table>
        </v-row>
      </v-col>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      colInfo: [],
      headers: [
        { text: "Email", value: "email" },
        { text: "Password", value: "password" }
      ]
    };
  },
  created() {
    this.$http
      .get("/user/search")
      .then(response => {
        this.colInfo = response.data;
      })
      .catch(error => {
        alert(error.response.data);
      });
  }
};
</script>