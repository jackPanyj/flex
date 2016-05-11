<template lang="jade">
  header
    a.btn back
    h1 {{name}}
    a.btn(href="#")
      i.fa.fa-cog
</template>
<script>
  export default Object.assign({}, {}, {
    data () {
      return {
        name: 'panshao'
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import "../stylesheets/base.scss";
  header {
    height: r(160);
    background-color: $primary-color;
    padding: r(44) r(30);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @at-root {
      a.btn {
        &:first-child {
          background-color: rgba(0, 0, 0, 0.2);
          padding: r(10);
          border-radius: r(10);
        }
        &:last-child {
          padding: r(10);
          background-color: rgba(0, 0, 0, .2);
          border-radius: r(10);
        }
        font-size: r(40);
        color: $primary-color-text;
      }
      h1 {
        font-size: r(72);
        color: $primary-color-text;
      }
    }
  }
</style>
