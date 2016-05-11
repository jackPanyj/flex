import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import route from './router.js'

Vue.use(VueRouter)
/* eslint-disable no-new */
var router = new VueRouter()
route(router)
router.start(App, 'app')
