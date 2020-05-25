<template>
  <div>
    <article class="book" 
    v-bind:style="{background: book.color}" 
    v-on:click="viewThisBook(book.id)">
      <div class="fold"></div>
      <div class="text">
        <h2 class="book-title">{{book.title}}</h2>
        <p class="book-author">{{book.author}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "SmallBook",
  props: {
    book : Object
  },
  methods: {
    viewThisBook(bookId) {
      console.log(bookId)
      this.$router.push({ name: "Bookinformation", params: { id: bookId } });
    }
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
  background-image: -moz-linear-gradient(to right top, black, white);
  background-image: -webkit-linear-gradient(to right top, black, white);
  background-image: linear-gradient(to right top, black, white);
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
