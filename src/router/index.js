import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserList from '../views/UserList.vue'
import SubPage from '../views/SubPage.vue'
import RouterPractice from '../views/RouterPractice.vue'
import ItemDetail from '../views/ItemDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sub-page',
    name: 'SubPage',
    component: SubPage
  },
  {
    path: '/user-list',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/router-practice',
    name: 'RouterPractice',
    component: RouterPractice,
  },
  {
    path: '/item-detail',
    name: 'ItemDetail',
    component: ItemDetail,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
