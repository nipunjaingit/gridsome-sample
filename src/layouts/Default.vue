<template>
  <div class="layout">
    <nav-bar :data="$static.metadata"></nav-bar>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
import NavBar from './partials/Header'
export default {
  components: {
    NavBar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.content {
  height: calc(100vh - 70px);
}
</style>
