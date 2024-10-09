<template>
  <div id="app">
    <header class="text-center my-4">
      <h1>Welcome to Trakk Audio Form</h1>
    </header>
    <main>
      <form-vue></form-vue>
    </main>
  </div>
</template>

<script>
import FormVue from "./views/form-vue.vue";

export default {
  name: "App",
  components: {
    FormVue,
  },
};
</script>

<style>
/* Global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

header {
  background-color: #343a40;
  color: #ffffff;
  padding: 20px;
}

main {
  padding: 20px;
}
</style>
