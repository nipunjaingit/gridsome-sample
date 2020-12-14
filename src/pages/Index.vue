<template>
  <Layout>
    <div class="grid gap-12 pt-20 px-32 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <PostListItem v-for="post in $page.allPost.edges" :key="post.node.id" :post="post.node"/>
    </div>
    <Pager :info="$page.allPost.pageInfo" :linkClass="'text-green-900 p-4 text-lg'" class="mt-10 mb-10 px-10 text-center"/>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  allPost (perPage: 8, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        context {
          data {
            owner {
              firstName
              lastName
            }
            publishDate
            image
            text
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import PostListItem from '@/components/PostListItem.vue'
export default {
  components: {
    PostListItem,
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
nav a.active {
  background: #68d391;
  color: white;
}
</style>
