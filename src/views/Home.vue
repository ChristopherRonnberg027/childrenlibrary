<template>
  <div class="wrapper">
    <h1>8 Classic Children books</h1>
    <section class="bookshelf">
      <SmallBook
        v-for="book in listOfBooks"
        v-bind:key="book.id"
        v-bind:id="book.id"
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:color="book.color"
        v-on:showInfoAbout="viewThisBook(book.id)"
      />
    </section>

  </div>
</template>

<script>
import SmallBook from "../components/SmallBook";
export default {
  computed: {
    listOfBooks() {
      return this.$store.getters.bookObjectList;
    }
  },
  methods: {
    viewThisBook(bookId) {
      this.$router.push({ name: "Bookinformation", params: { id: bookId } });
    }
  },
  name: "Home",
  components: {
    SmallBook: SmallBook
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
