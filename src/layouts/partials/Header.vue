<template>
    <nav class="bg-green-400 py-4 px-4 flex justify-between sticky top-0">
        <g-link class="text-xl font-bold text-green-700" :to="'/'">
            {{data.siteName}}
        </g-link>
        <div class="flex items-center text-white justify-between">
            <g-link class="font-bold mx-1" v-for="(link, i) in links" :key="i" :to="link.link">
                {{link.text}}
            </g-link>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['data'],
    data () {
        return {
            links: [
                {link: '/', text: 'Home'},
                {link: '/about/', text: 'About'}
            ]
        }
    }
}
</script>