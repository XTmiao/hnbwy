<template>
  <div class="container">
    <button class="btn btn-primary" @click="show()">click事件</button>
    <button class="btn btn-danger" @contextmenu.prevent="contextmenu()">contextmenu事件</button>
    <a href="##" @click="show()"><button class="btn btn-default" @click.stop="show()">取消冒泡事件</button></a>
    <button class="btn btn-primary" @keyup="show()">keyup事件</button>
    <button class="btn btn-danger" @keyup.enter="show()">键盘enter</button>
    <div :style="{width: wid, height: hei}" :class="{'cla': true}">111</div>
    <div :class="[bg, font]">222</div>

  </div>

</template>

<script>
export default {
  data: function () {
    return {
      wid: '100px',
      hei: '100px',
      bg: 'pink',
      font: 'blue'
    }
  },
  methods: {
    show: function (argument) {
      console.log(1)
    },
    contextmenu: function (argument) {
      console.log('右击事件')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cla{background: red; color: yellow;}
  .pink{background: pink}
  .blue{color: blue}
</style>
