<template>
  <div>
    <hero></hero>
    <v-container>
      <h1>このサイトについて</h1>
      <div class="about-box">
        <p>このサイトは、ボーイスカウト日本連盟の加盟員が広報活動や組織拡充活動のためのさまざまな素材を取得できるサイトです。</p>
        <router-link to='/about' class="text-md-right">各種使用・著作権等に関して（必ずお読みください）</router-link>
      </div>
      <CardGroup :data-index="index" :key="prTool.id" v-for="(prTool, index) in prTools" :title="prTool.title" :cards="prTool.contents"></CardGroup>
    </v-container>
  </div>
</template>

<script>
import Hero from '../Organisms/Hero'
import CardGroup from '../Organisms/CardGroup'
import prTools from '../../data'

export default {
  name: 'home',
  components: {
    Hero,
    CardGroup
  },
  mixins: [ prTools ]
}
</script>

<style scoped>
.about-box{
  padding:0 24px;
  font-size:15px;
  margin-bottom: 2rem;
}
</style>
