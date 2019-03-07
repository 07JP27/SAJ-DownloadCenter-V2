<template>
  <v-toolbar fixed dark color='#115740'>
    <router-link to="/">
    <img alt="Logo" src="../../assets/logo.svg" height="50px" />
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :data-index="index" :key="prTool.id" v-for="(prTool, index) in prTools" flat >{{prTool.title}}</v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import prTools from '../../data'

export default {
  name: 'Header',
  mixins: [ prTools ]
}
</script>

<style scoped>

</style>
