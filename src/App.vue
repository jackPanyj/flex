<template lang="jade">
  header-component
  router-view.app-body
  footer-component
</template>

<script>
  export default {
    components: {
      HeaderComponent: require('./components/Header.vue'),
      FooterComponent: require('./components/Footer.vue')
    }
  }
</script>
<style lang="scss">
  @import "./stylesheets/bundle";
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    @at-root{
      .app-body {
        flex-grow: 1;
      }
    }
  }
</style>
