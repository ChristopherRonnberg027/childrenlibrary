<template>
    <div class="bookLink" v-bind:key="item.id" v-for="item in books">
      <h3>{{item.title}}</h3>
      <router-link to="{ name: 'book', params: {placeName: detail.name } }">{{item.title}}</router-link>
    </div>
</template>

<script>
export default{
    data() {
    return {
      books: data.books,
    };
  },
}
</script>