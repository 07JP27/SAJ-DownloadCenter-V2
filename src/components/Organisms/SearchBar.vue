<template>
  <b-row class="wrapper">
    <b-col sm="10">
      <b-form-input size="lg" placeholder="Search" v-model="query"></b-form-input>
    </b-col>
    <b-col sm="2">
      <fa-icon size="lg" class="icon" icon="th-large" />
      <fa-icon size="lg" class="icon" icon="list" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    query: String
  }
}
</script>

<style scoped>
.wrapper{
  margin-bottom: 2rem;
}
.icon{
  font-size: 3rem;
  color: gray;
  margin-right: 1rem;
}
</style>
