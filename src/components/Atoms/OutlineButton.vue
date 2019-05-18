<template>
  <a class="btn-large" :href="link">PRツールを見る</a>
</template>

<script>
export default {
  name: 'outlineButton',
  props: ['link']
}
</script>

<style scoped>
.btn-large{
    font-size: 1.5rem;
    border: solid 1.5px white;
    border-radius: 8px;
    z-index: 1;
    color: #fff;
    text-align: center;
    cursor: pointer;
    padding: 10px 20px;
    text-decoration: none;
}
</style>
