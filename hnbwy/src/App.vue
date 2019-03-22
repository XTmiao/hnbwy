<template>
  <div id="app">
    <div :class="{move: shade, move1: shade}">
      <Header @click="showPerson"></Header>
      <router-view/>
      <v-footer></v-footer>
      <div id="shade" v-show="shade" @click="hideShade()"></div>
    </div>
    
    <personCenter ref="personCenter"></personCenter>
  </div>
</template>

<script>
  import Header from "./components/header"
  import vFooter from './components/footer'
  import personCenter from './components/personCenter'
export default {
  name: 'App',
  components: {
    Header,
    vFooter,
    personCenter
  },
  data(){
    return {
      shade: false
    }
  },
  methods: {
      showPerson: function () {
        this.shade = true
        this.$refs.personCenter.show()
      },
      hideShade: function () {
        this.$refs.personCenter.hide()
        this.shade = false
      }
    },
  }
</script>

<style lang="stylus">
*{
  margin: 0
  padding: 0
}
#app {
  width: 100%;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#shade{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
