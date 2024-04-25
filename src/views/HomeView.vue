<template>
 <div id="home">
  <p>ホーム</p>
  <!-- <router-link :to="`/item-detail/${id}`">ItemDetailページへ</router-link> -->
  <button @click="toItemDetailPage">ItemDetailページへ</button>
</div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     id: '1c10db36-a600-ad36-dc46-da001fc3cc13'
  //   }
  // }
  methods: {
    toItemDetailPage() {
      this.$router.push({ name: 'ItemDetail', query: { isSelect: true } });
    }
  }
}
</script>
