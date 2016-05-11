<template lang="jade">
  footer
    a(v-link="'/'")
      i.fa.fa-home
      span Home
    a(v-link="'/blog'")
      i.fa.fa-book
      span Blog
    a(v-link="'/work'")
      i.fa.fa-diamond
      span Work
    a(v-link="'/me'")
      i.fa.fa-user
      span  Me
</template>

<style lang="scss" scoped>
  @import "../stylesheets/base.scss";
  footer{
    display: flex;
    height: r(160);
    background-color: $primary-color;
    justify-content: space-around;
    @at-root {
      & > a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        border-right: r(2) solid $secondary-text-color;
        color: $primary-color-text;
        text-decoration: none;
        border-bottom: r(8) solid transparent;
      }
      i {
        font-size: r(48);
        padding-bottom: r(15);
        text-shadow: r(6) r(6) 0 rgba(0, 0, 0, .2);
      }
      span {
        color: $secondary-text-color;
      }
    }
  }
  .v-link-active {
    border-bottom: r(8) solid $accent-color;
  }
</style>
