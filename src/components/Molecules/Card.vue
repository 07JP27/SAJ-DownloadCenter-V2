<template>
  <router-link class="link" :to="link">
    <b-card
    :title="title"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
    >
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    img: String,
    link: String
  }
}
</script>

<style scoped>
.link{
  text-decoration: none;
  color: inherit;
}

.card {
  margin-right: 1rem;
  max-width: 16rem;
}

.card:hover {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
}

.card-body{
  padding: 0.5rem;
  text-align: center;
}

.card-title{
  margin: 0;
  font-size: 1rem;
}
</style>
