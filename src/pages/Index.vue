<template>
  <Layout>
    <div class="text-center full-width">
      <g-image alt="Example image" src="~/favicon.png" width="100" class="m-auto" />
      <p class="text-green-800 font-bold mt-4 text-lg">Welcome to Gridsome Blogs !</p>
    </div>
    <div class="mt-5">
      <BlogListItem v-for="blog in $page.allBlog.edges" :key="blog.node.id" :blog="blog.node"/>
    </div>
  </Layout>
</template>

<page-query>
query {
  allBlog {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>
import BlogListItem from '@/components/BlogListItem.vue'
export default {
  components: {
    BlogListItem
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
