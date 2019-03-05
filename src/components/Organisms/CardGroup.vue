<template>
    <div class="card-group">
      <h1>{{title}}</h1>
      <v-container fluid grid-list-md class="card-group-body">
        <v-layout row wrap>
          <v-flex xs6 md3 :data-index="index" :key="card.id" v-for="(card, index) in cards">
            <card :title="card.title" :img="card.img" :link="card.link"></card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
</template>

<script>
import Card from '../Molecules/Card'

export default {
  name: 'CardGroup',
  components: {
    Card
  },
  props: {
    title: String,
    cards: Array
  }
}
</script>

<style scoped>
.card-group{
  margin-bottom: 2rem;
}

.card-group-body{
  padding-top: 0;
}
</style>
