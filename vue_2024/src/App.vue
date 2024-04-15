<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from "./components/Header.vue";
import Menu from './components/Menu.vue';

</script>

<template>
  <header>
    <Header  headerText="Star Wars API" />
    <Menu />
  </header>
  <RouterView />
</template>

