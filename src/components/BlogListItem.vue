<template>
    <g-link :to="blog.path" class="block bg-white shadow-lg rounded p-4 mb-4 hover:p-5 hover:shadow-xl cursor-pointer transition-all duration-300">
        <h2 class="text-xl text-green-600 font-bold mb-4">
            {{blog.title}}
        </h2>
        <p class="text-lg">
            {{blog.description}}
        </p>
        <div class="my-4">
            <g-link class="border-2 text-sm border-green-800 text-green-800 rounded p-2" :to="blog.path">
                Read More
            </g-link>
        </div>
    </g-link>
</template>

<script>
export default {
    props: ['blog']
}
</script>