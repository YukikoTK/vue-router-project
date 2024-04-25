<template>
  <div id="app">
    <button @click="topPage">トップページ</button>
    <button @click="subPage">サブページ</button>
    <button @click="userListPage">ユーザー一覧ページ</button>
    <!-- <button @click="routerPracticePage">router練習ページ</button> -->
    <!-- <router-link to="/router-practice">router練習ページ</router-link> -->
    <!-- <router-link v-bind:to="{name: 'RouterPractice'}">router練習ページ</router-link> -->
    <router-link v-bind:to="{path: '/router-practice'}">router練習ページ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    topPage(){
      this.$router.push({name: 'home'});
    },
    subPage(){
      this.$router.push({name: 'SubPage'});
    },
    userListPage(){
      this.$router.push({name: 'UserList'});
    },
    // routerPracticePage() {
    //   this.$router.push({name: 'RouterPractice'});
    // }
  }
}
</script>

<style>
</style>
