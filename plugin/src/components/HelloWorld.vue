<template>
  <h2>without class component => {{theme}}</h2>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  created(this: Vue) {
    console.log(this.$vuetify);
  },
  computed: {
    theme: function(this: Vue): any {
      return this.$vuetify.theme;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
