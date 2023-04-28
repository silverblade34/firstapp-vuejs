<template>
  <h1 class="titulo-1">Primer titulo H1</h1>
  <p>este es un texto normal</p>
  <!-- <PostContainer/> -->
  <ExampleSelective/>
</template>

<script lang="ts" setup>
// import PostContainer from "./components/PostContainer.vue";
import ExampleSelective from "./components/ExampleSelective.vue"
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
body{
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
}
.titulo-1{
  color: brown;
}
</style>
