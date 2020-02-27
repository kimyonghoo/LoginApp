<template>
  <v-content>
    <v-container>
      <v-col>
        <v-row>
          <v-input>{{title}}</v-input>
        </v-row>
        <v-row>
          <v-text-field v-model="apple" label="Apple" outlined readonly></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="banana" label="Banana" outlined readonly></v-text-field>
        </v-row>
        <v-row>
          <v-text-field v-model="cherry" label="Cherry" outlined readonly></v-text-field>
        </v-row>
      </v-col>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      title: "Fruit",
      apple: "Apple is good at health in the morning",
      banana: "banana calorie is high ",
      cherry: "Cherry's color is red"
    };
  }
};
</script>