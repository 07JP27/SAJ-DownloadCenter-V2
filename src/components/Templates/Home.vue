<template>
  <div>
    <hero></hero>
    <v-container>
      <CardGroup></CardGroup>
      <CardGroup></CardGroup>
      <CardGroup></CardGroup>
    </v-container>
  </div>
</template>

<script>
import Hero from '../Organisms/Hero'
import CardGroup from '../Organisms/CardGroup'

export default {
  name: 'home',
  components: {
    Hero,
    CardGroup
  }
}
</script>
