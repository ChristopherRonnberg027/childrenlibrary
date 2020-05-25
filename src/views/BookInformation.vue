<template>
  <div class="bookPresentation">
    <div v-if="thisBook"></div>
    <nav>
      <button>
        <router-link to="/">Back</router-link>
      </button>
      <router-view />
    </nav>
    <main>
      <section class="bookCover">
        <SmallBook class="large-book" :book="thisBook" />
        <!-- <BigBook
          v-bind:id="thisBook.id"
          v-bind:title="thisBook.title"
          v-bind:author="thisBook.author"
          v-bind:color="thisBook.color"
        />-->
      </section>
      <section class="bookInfo">
        <h1>{{thisBook.title}}</h1>
        <h3>By {{thisBook.author}}</h3>
        <p>{{thisBook.plot}}</p>
        <section class="miscInfo">
          <div class="box">
            <h4>Audience: {{thisBook.audience}}</h4>
            <h4>First published: {{thisBook.year}}</h4>
            <h4>Pages: {{thisBook.pages}}</h4>
            <h4>Publisher: {{thisBook.publisher}}</h4>
          </div>
        </section>
        <button class="readIt">Oh, I want to read it!</button>
      </section>
    </main>
  </div>
</template>
<script>
// import BigBook from "../components/BigBook";
import SmallBook from "../components/SmallBook";
export default {
  components: {
    // BigBook: BigBook
    SmallBook
  },
  props: ["id"],
  computed: {
    thisBook() {
      return this.$store.getters.aBook(this.id);
    }
  }
};
</script>
<style scoped>
.large-book {
  width: 1em;
  height: 1em;
}

a {
  font-size: 1em;
  text-decoration: none;
  font-weight: bold;
  color: white;
  border-bottom: 0.2em solid white;
}

.bookPresentation {
  background: black;
  width: 100%;
}

nav {
  height: 4em;
}
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas: "cover bookinfo";
}

.bookCover {
  height: 800px;
  grid-area: cover;
}

article.book {
  transform: scale(2.1);
}

.bookInfo {
  grid-area: bookinfo;
}

.bookInfo h1,
.bookInfo h3,
.bookInfo p,
.box h4 {
  color: white;
  padding: 0em;
  margin: 0;
}

.bookInfo h1 {
  font-size: 3em;
}

.bookInfo h3 {
  font-weight: normal;
}

.box {
  background: rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.bookInfo p {
  line-height: 1.6;
}
</style>
