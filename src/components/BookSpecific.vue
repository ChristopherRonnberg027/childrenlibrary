<template>
  <article class="book" v-bind:style="{background: color}">
    <div class="fold"></div>
    <div class="text">
      <h2 class="book-title">{{title}}</h2>
      <p class="book-author">{{author}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "BookThumb",
  props: {
    id: Number,
    title: String,
    author: String,
    color: String
  }
};
</script>
<style scoped>

</style>