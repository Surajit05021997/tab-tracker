<template>
  <div>
    <app-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ol, ul {
  list-style: none;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
