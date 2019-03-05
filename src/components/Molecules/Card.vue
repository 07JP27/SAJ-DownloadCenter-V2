<template>
  <router-link :to="link">
    <v-card class="card">
        <v-img :src="img" height="200px"></v-img>
        <v-card-title>
            <div>{{title}}</div>
        </v-card-title>
    </v-card>
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
a {
  text-decoration: none;
}
.card:hover {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
}
</style>
