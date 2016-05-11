<template lang="jade">
  section
    div.content
</template>

<style lang="scss">
  @import "../stylesheets/base.scss";
  section {
    height: calc(100vh - #{r(320)});
    background: {
      image: url('../assets/home-bg.jpg');
      repeat: no-repeat;
      size: cover;
      position: center center;
    }
    .content {
      display: block;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
  }
</style>
