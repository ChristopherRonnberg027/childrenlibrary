<template>
  <div class="bookpresentation">
    <h1>This is a book presentation</h1>
    <BookThumb
    v-for="book of listOfBooks"
    v-bind:key="book"/>
  </div>
</template>
<script>
import BookThumb from "../components/BookThumb";
export default {
  data() {
    return {
      listOfBooks: this.$root.booksDB,
    }
  },
    components: {
    BookThumb: BookThumb
  }
}
</script>