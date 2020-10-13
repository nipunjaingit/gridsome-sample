<template>
    <Layout>
        <div class="flex justify-between items-center">
            <g-link :to="'/'" class="block text-sm text-green-800">
                &larr; Back
            </g-link>
            <h1 class="font-bold text-green-800 text-xl">
                {{$page.blog.title}}
            </h1>
            <p class="text-sm font-light text-green-600 italic">
                {{$page.blog.date}} | {{$page.blog.timeToRead}} min
            </p>
        </div>
        <hr class="my-3"/>
        <div class="markdown-body">
            <p v-html="$page.blog.content"></p>
        </div>
    </Layout>
</template>

<page-query>
query Blog ($path: String) {
    blog: blog (path: $path) {
        id
        title
        content
        date (format: "D MMMM YYYY")
        timeToRead
    }
}
</page-query>

