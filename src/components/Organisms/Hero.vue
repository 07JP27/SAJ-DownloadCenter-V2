<template>
<div class="granim-wrapper">
    <canvas id="granim-canvas">
    </canvas>
    <vue-particles
    id="particles-js"
    color="#ffffff"
    :particleOpacity="0.5"
    :particlesNumber="40"
    shapeType="circle"
    :particleSize="8"
    linesColor="#dedede"
    :linesWidth="2"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="200"
    :moveSpeed="0.5"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    >
    </vue-particles>
    <div id="main" class="has-text-centered">
      <h1 class="title is-1"><img src="../../assets/title.svg" /></h1>
      <OutlineButton :href="link"></OutlineButton>
      <ScrollNavigator></ScrollNavigator>
    </div>
</div>
</template>

<script>
import Granim from 'granim'
import OutlineButton from '../Atoms/OutlineButton'
import ScrollNavigator from '../Atoms/ScrollNavigator'

export default {
  name: 'Hero',
  components: {
    OutlineButton,
    ScrollNavigator
  },
  props: ['link'],
  data () {
    return {
      GraminObject: Object
    }
  },
  mounted () {
    this.GraminObject = new Granim({
      element: '#granim-canvas',
      name: 'granim',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            ['#093B2A', '#115740'],
            ['#052A1E', '#115740'],
            ['#115740', '#093B2A']
          ]
        }
      }
    })
  }
}
</script>

<style scoped>
.title{
  margin-bottom: 2rem;
}
#particles-js {
  position: inherit;
  display: flex;
  width: 100%;
  height: 100%;
}
.granim-wrapper {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100vh;
}
.granim-wrapper canvas {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80vw;
}
</style>
