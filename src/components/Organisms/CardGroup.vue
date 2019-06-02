<template>
    <div class="card-group">
      <h2>{{title}}</h2>
      <b-card-group>
        <div :data-index="index" :key="card.id" v-for="(card, index) in cards">
          <card :title="card.title" :img="card.img" :link="card.link"></card>
        </div>
      </b-card-group>
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
h2{
  width: 100%;
}
.card-group{
  margin-bottom: 1.5rem;
}
</style>
