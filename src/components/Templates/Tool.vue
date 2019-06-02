<template>
  <div class="wrapper">
    <b-container>
      <h1>あいうえおかきくけこ</h1>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
      ></b-embed>
      <AgreeCheckbox v-model="isAgree">「<a href="hogeho">各種使用に関して</a>」に同意します。</AgreeCheckbox>
      <div>
       <b-button class="btn" variant="success" :disabled="!isAgree">Button</b-button>
       <b-button class="btn" variant="success" :disabled="!isAgree">Button</b-button>
       <b-button class="btn" variant="success" :disabled="!isAgree">Button</b-button>
       <b-button class="btn" variant="success" :disabled="!isAgree">Button</b-button>
       <b-button class="btn" variant="success" :disabled="!isAgree">Button</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import AgreeCheckbox from '../Atoms/AgreeCheckbox'
import prTools from '../../data'

export default {
  name: 'tool',
  components: {
    AgreeCheckbox
  },
  mixins: [ prTools ],
  props: [
    'isAgree'
  ]
}
</script>

<style scoped>
.wrapper{
  padding-top: 64px;
}

.btn{
  margin-right: 1rem;
}

h1{
  margin-top: 1.5rem;
}
</style>
