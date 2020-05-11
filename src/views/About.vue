<template>
  <div class="about">
    <h1>{{ this.$route.params.id }}</h1>
    <div class="test">{{hello}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      bookTitle : this.$route.params.id,
      hello: 'hello'
    }
  }
};
</script>
