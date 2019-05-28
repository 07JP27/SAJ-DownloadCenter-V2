<template>
  <b-navbar>
    <router-link to="/">
      <b-navbar-brand>
        <img alt="Logo" src="../../assets/logo.svg" height="50px" />
      </b-navbar-brand>
    </router-link>
    <b-navbar-nav class="ml-auto">
      <a class="header-link" :data-index="index" :key="prTool.id" v-for="(prTool, index) in prTools" flat >{{prTool.title}}</a>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import prTools from '../../data'

export default {
  name: 'Header',
  mixins: [ prTools ]
}
</script>

<style scoped>
.navbar {
  padding: 0 1rem;
  color: white;
  background-color: #115740;
}
.header-link{
  margin-right: 1rem;
}
</style>
