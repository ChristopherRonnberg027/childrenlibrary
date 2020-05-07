<template>
  <div class="wrapper">
    <h1>Classic Children books</h1>
    <section class="bookshelf">
      <div class="books-container">
        <BookThumb
          v-for="book in bookList"
          v-bind:key="book.id"
          v-bind:id="book.id"
          v-bind:title="book.title"
          v-bind:author="book.author"
          v-bind:color="book.color"
        />
      </div>
    </section>
  </div>
</template>

<script>
import BookThumb from "../components/BookThumb";
export default {
  data() {
    return {
      bookList: this.$root.booksDB
    };
  },
  name: "BookShelf",
  components: {
    BookThumb: BookThumb
  }
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1{
  font-size: 6em;
  font-weight: 800;
}
.books-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
