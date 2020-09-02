<template>
  <div id="app">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from './components/template/Header'
import Content from './components/template/Content'

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style>

@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}

body {
  margin: 0;
}

#app {
  font-family: "RobotoMono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
