<template>
  <div>
    <div class="gradient"></div>
    <article class="book" v-bind:style="{background: color}">
      <div class="fold"></div>
      <div class="text">
        <h2 class="book-title">{{title}}</h2>
        <p class="book-author">{{author}}</p>
      </div>
    </article>
  </div>
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

article.book {
  display: flex;
  width: 17em;
  height: 20em;
  margin: 0.6em;
  transform: scale(1);
  transition: 0.2s transform;
  cursor: pointer;
}

article.book:hover {
  transform: scale(1.1);
}

.fold {
  margin-left: 0.6em;
  display: grid;
  border-right: 0.3em solid rgba(0, 0, 0, 0.3);
}

.text {
  margin-left: 1em;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.book-title,
.book-author {
  margin: 0em;
  padding: 0em;
  color: white;
}
</style>
