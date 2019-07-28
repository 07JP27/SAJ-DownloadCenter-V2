<template>
  <div>
    <hero></hero>
    <b-container>
      <IntroSection></IntroSection>
      <SearchBar :query="query"></SearchBar>
      <CardGroup :data-index="index" :key="prTool.id" v-for="(prTool, index) in filteredPrTools" :title="prTool.title" :cards="prTool.contents"></CardGroup>
    </b-container>
  </div>
</template>

<script>
import Hero from '../Organisms/Hero'
import IntroSection from '../Molecules/IntroSection'
import SearchBar from '../Organisms/SearchBar'
import CardGroup from '../Organisms/CardGroup'
import prTools from '../../assets/data.json'

export default {
  name: 'home',
  components: {
    Hero,
    IntroSection,
    SearchBar,
    CardGroup
  },
  data: function () {
    return {
      prTools: prTools,
      query: ''
    }
  },
  computed: {
    filteredPrTools: function () {
      if (this.query === '') {
        return this.prTools
      } else {
        // TODO:filterprosess
        return this.prTools
      }
    }
  }
}
</script>

<style scoped>
.divider{
  margin:2rem 0;
}
</style>
