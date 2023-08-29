<template>
  <header>
    <nav>
        <router-link to="/">Posts</router-link>
    </nav>
  </header>
  <router-view/>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  position: fixed;
  max-height: 70px;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #0f81fa;

  >nav {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
  }

  a {
    display: block;
    font-size: 23px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
}
</style>
<script setup>
</script>