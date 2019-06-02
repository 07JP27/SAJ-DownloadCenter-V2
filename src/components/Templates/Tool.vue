<template>
  <div class="wrapper">
    <b-container>
      <h1>あいうえおかきくけこ</h1>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      ></b-embed>
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

h1{
  margin-top: 1.5rem;
}
</style>
