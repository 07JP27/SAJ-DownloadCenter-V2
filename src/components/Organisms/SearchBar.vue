<template>
  <b-row>
    <b-col sm="10">
      <b-form-input size="lg" placeholder="Search"></b-form-input>
    </b-col>
    <b-col sm="2">
      <fa-icon size="lg" class="icon" icon="th-large" />
      <fa-icon size="lg" class="icon" icon="list" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.icon{
  font-size: 3rem;
  color: gray;
  margin-right: 1rem;
}
</style>
