<template>
    <g-link class="rounded-lg bg-white shadow-lg post-item block" :to="`post/${post.id}`">
      <div class="post-item-image rounded-t-lg" :style="{'background-image': `url(${post.context.data.image})`}"></div>
      <div class="p-4 text-green-600 text-sm post-item-text">
        {{post.context.data.text}}
      </div>
      <div class="p-4 post-item-date text-xs border-t-2 border-grey-300">
        <b>Posted on:</b> <i class="text-green-600"> {{post.context.data.publishDate}}</i>
      </div>
    </g-link>
</template>

<script>
export default {
  props: ['post']
}
</script>