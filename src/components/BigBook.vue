<template>
  <div>
    <article class="book" v-bind:style="{background: color}" v-on:click="viewBook">
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
  name: "BigBook",
  props: {
    id: Number,
    title: String,
    author: String,
    color: String
  },
  methods: {
    viewBook() {
      this.$emit("showInfoAbout", this.id);
    }
  }
};
</script>
<style scoped>
article.book {
  display: flex;
  width: 27em;
  height: 33em;
  margin: 0.6em;
  background-image: -moz-linear-gradient(to right top, black, white);
  background-image: -webkit-linear-gradient(to right top, black, white);
  background-image: linear-gradient(to right top, black, white);
}
h2{
  font-size: 3em;
}

p{
  font-size: 2em;
}


.fold {
  margin-left: 0.6em;
  display: grid;
  border-right: .6em solid rgba(0, 0, 0, 0.3);
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
