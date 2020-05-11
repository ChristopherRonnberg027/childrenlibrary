<template>
  <div class="wrapper">
    <h1>Classic Children books</h1>
    <section class="bookshelf">
      <BookThumb
        @click="viewThisBook(book.id)"
        v-for="book in listOfBooks"
        v-bind:key="book.id"
        v-bind:id="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:color="book.color"
        v-on:showInfoAbout="viewThisBook(book.id)"
      />
    </section>

    <!-- <div class="bookLink" v-bind:key="item.id" v-for="item in listOfBooks">
      <h3>{{item.title}}</h3>
      <router-link v-on:showInfoAbout="thisBook" to="{ name: 'About', params: {id: '1' } }">{{item.title}}</router-link>
      <router-view />
    </div>-->
  </div>
</template>

<script>
import BookThumb from "../components/BookThumb";
export default {
  // data() {
  //   return {
  //      listOfBooks: this.$root.booksDB,
  //      info : ''
  //     //books: this.$root.booksDB
  //   };
  // },
  computed: {
    listOfBooks() {
      return this.$store.getters.bookObjectList;
    }
  },
  methods: {
    thisBook(bookId) {
      //console.log(payload);
      this.$router.push({ name: "About", params: { id: bookId } });
    },
    viewThisBook(bookId) {
      this.$router.push({ name: "About", params: { id: bookId } });
    }
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

h1 {
  font-size: 6em;
  font-weight: 800;
}
.bookshelf {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
