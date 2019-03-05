<template>
  <v-toolbar fixed dark color='#115740'>
    <router-link to="/">
    <img alt="Logo" src="../../assets/logo.svg" height="50px" />
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
