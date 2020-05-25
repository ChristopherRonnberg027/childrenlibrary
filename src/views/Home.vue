<template>
  <div class="wrapper">
    <h1>{{listOfBooks.length}} Classic Children books</h1>
    <section class="bookshelf">
      <SmallBook
        v-for="book in listOfBooks"
        v-bind:key="book.id"
        :book="book"
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
    // viewThisBook(bookId) {
    //   console.log(bookId)
    //   this.$router.push({ name: "Bookinformation", params: { id: bookId } });
    // }a
    testPrint(){
      console.log('hej')
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
