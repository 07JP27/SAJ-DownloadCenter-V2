<template>
  <div class="wrapper">
    <div class="about-box">
      <p>このサイトは、ボーイスカウト日本連盟の加盟員が広報活動や組織拡充活動のためのさまざまな素材を取得できるサイトです。</p>
      <router-link to='/about' class="text-md-right">各種使用・著作権等に関して（必ずお読みください）</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSection'
}
</script>

<style scoped>
.wrapper{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.about-box{
  font-size:15px;
}
.about-box p{
  margin-bottom: 0;
}
</style>
