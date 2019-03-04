<template>
  <div id="app">
    <Header></Header>
    <transition name='page-fade' mode='out-in'>
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Organisms/Header'
import Footer from './components/Organisms/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0px;
}
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter,
.page-fade-leave-to {
  opacity: 0;
}
</style>
