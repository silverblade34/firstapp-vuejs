<template>
  <!-- <h1 class="titulo-1">Primer titulo H1</h1>
  <p>este es un texto normal</p>
-->
  <div class="app">
    <Sidebar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/SidebarComponent.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

:root {
  --primary: #00747C;
  --secondary: #00BBC9;
  --grissuave: #CACACA;
  --grisfuerte: #202022;
  --sidebar-width: 300px;
  --white: #ffffff;
}

body {
  font-weight: bolder;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

h1 {
  color: var(--primary)
}

.app {
  display: flex;
}

main {
  flex: 1 1 0;
  padding: 2rem;
}
</style>
