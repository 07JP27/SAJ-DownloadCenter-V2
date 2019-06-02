<template>
  <div class="wrapper">
    <b-container>
      tool
    </b-container>
  </div>
</template>

<script>
import prTools from '../../data'

export default {
  name: 'tool',
  mixins: [ prTools ]
}
</script>

<style scoped>
.wrapper{
  padding-top: 64px;
}
</style>
