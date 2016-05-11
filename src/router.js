export default function route (router) {
  router.map({
    '/': {
      component: require('./components/Home.vue')
    },
    '/home': {
      component: require('./components/Home.vue')
    },
    '/blog': {
      component: require('./components/Blog.vue')
    },
    '/work': {
      component: require('./components/Work.vue')
    },
    '/me': {
      component: require('./components/Me.vue')
    }
  })
}
