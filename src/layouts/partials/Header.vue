<template>
    <div class="px-10 flex items-center justify-between sticky top-0 navbar z-10 text-green-900 border-b-2 border-gray-200" id="navbar">
        <g-link class="block" to="/">
            <g-image src="~/favicon.png" class="w-auto h-full"/>
        </g-link>
        <div class="flex items-center justify-between">
            <g-link class="font-bold mx-1" v-for="(link, i) in links" :key="i" :to="link.link">
                {{link.text}}
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    data () {
        return {
            links: [
                {link: '/', text: 'Home'},
                {link: '/about/', text: 'About'}
            ]
        }
    },
    methods: {
        handleScroll () {
            let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
            if (scrollTop > 70) {
                document.getElementById('navbar').classList.add('bg-green-500')
                document.getElementById('navbar').classList.add('bg-opacity-75')
                document.getElementById('navbar').classList.remove('text-green-900')
                document.getElementById('navbar').classList.add('text-white')
                document.getElementById('navbar').getElementsByTagName('img')[0].style.filter = 'brightness(0.5)'
            } else {
                document.getElementById('navbar').classList.remove('bg-green-500')
                document.getElementById('navbar').classList.remove('bg-opacity-75')
                document.getElementById('navbar').classList.remove('text-white')
                document.getElementById('navbar').classList.add('text-green-900')
                document.getElementById('navbar').getElementsByTagName('img')[0].style.filter = 'brightness(1)'
            }
        }
    }
}
</script>