<template>
  <v-app id="app">
    <Header />
    <router-view name="content"></router-view>
    <Footer />
  </v-app>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  name: "system",
  components: {
    Header,
    Footer
  }
};
</script>