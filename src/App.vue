<template>
  <FinalProject />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinalProject from './components/Project.vue';

export default defineComponent({
  name: 'App',
  components: {
    FinalProject
  }
});
</script>

<style>
*{
  margin:0 auto;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  background-color: #f0f0f0;
}
</style>
