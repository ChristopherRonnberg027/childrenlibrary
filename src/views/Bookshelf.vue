<template>
  <section class="bookshelf-container">
    <h1>Classic children books</h1>
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
</template>

<script>
import BookThumb from "../components/BookThumb";
export default {
  data() {
    return {
      bookList : this.$root.booksDB
    };
  },
  name: "BookShelf",
  components: {
    BookThumb: BookThumb
  }
};
</script>