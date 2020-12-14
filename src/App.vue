<template>
    <div>
        <transition name="fade">
            <div class="screen flex items-center justify-center absolute flex-col top-0 left-0 w-full h-full bg-green-200 z-20" v-if="showStart">
                <g-image alt="Example image" src="~/favicon.png" width="100" class="image-animation"/>
                <p class="mt-4 text-green text-lg">Loading...</p>
            </div>
        </transition>
        <router-view></router-view>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
  data () {
    return {
        showStart: true
    }
  },
  mounted () {
    setTimeout (() => {
        this.showStart = false
    }, 2000)
  }
}
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 0.4s ease-out;
}
.fade-leave-active {
    transition: opacity 0.4s ease-out;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.image-animation {
    animation: image-animation 2s infinite ease-in-out;
}
@keyframes image-animation {
    0% {
        filter: brightness(1) invert(0);
    }
    50% {
        filter: brightness(0) invert(1);
    }
    100% {
        filter: brightness(1) invert(0);
    }
}
</style>