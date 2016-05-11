<template lang="jade">
  footer
    a(v-link="'/home'")
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
    @at-root {
      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-right: 1px solid $secondary-text-color;
        color: $primary-color-text;
        text-decoration: none;
        border-bottom: r(4) solid transparent;
        flex-grow: 48.75;
        &:last-child {
          border-right: none;
          flex-grow: 71.75;
        }
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
    border-bottom: r(4) solid $accent-color;
  }
</style>
