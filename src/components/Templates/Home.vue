<template>
  <div>
    <hero></hero>
    <b-container>
      <IntroSection></IntroSection>
      <SearchBar></SearchBar>
      <CardGroup :data-index="index" :key="prTool.id" v-for="(prTool, index) in prTools" :title="prTool.title" :cards="prTool.contents"></CardGroup>
    </b-container>
  </div>
</template>

<script>
import Hero from '../Organisms/Hero'
import IntroSection from '../Molecules/IntroSection'
import SearchBar from '../Organisms/SearchBar'
import CardGroup from '../Organisms/CardGroup'
import prTools from '../../data'

export default {
  name: 'home',
  components: {
    Hero,
    IntroSection,
    SearchBar,
    CardGroup
  },
  mixins: [ prTools ]
}
</script>

<style scoped>
.divider{
  margin:2rem 0;
}
</style>
