<template>
  <div>
    <a><span></span><span></span><span></span></a>
  </div>
</template>

<script>
export default {
  name: 'scrollNavigator'
}
</script>

<style scoped>
a {
  padding-top: 80px;
}
a span {
  position: absolute;
  top: 20rem;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  opacity: 0;
  box-sizing: border-box;
}
a span:nth-of-type(1) {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
a span:nth-of-type(2) {
  top: 21rem;
  -webkit-animation-delay: .15s;
  animation-delay: .15s;
}
a span:nth-of-type(3) {
  top: 22rem;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
}
@-webkit-keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
