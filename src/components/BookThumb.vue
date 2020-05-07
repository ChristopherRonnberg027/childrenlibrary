<template>
  <article class="book-thumb" v-bind:style="{background: color}">
    <div class="cover-back"></div>
    <div class="book-data-container">
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
article.book-thumb {
  display: flex;
  flex-wrap: nowrap;
  width: 15rem;
  height: 20rem;
  margin: 10px;
}
.cover-back {
  /* border-right: 2px solid rgba(0, 0, 0, 0.5);
  right: 2em; */
  border-width: 0 3px 0 0;
  border-color: rgba(0,0,0,0.5);
  border-style: solid;
  min-width: 20px;
}

.book-data-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 10px;
}

.book-title,
.book-authos {
  color: white;
}
</style>