<template>
    <Layout>
        <div class="flex h-full relative">
            <g-link class="bg-white text-black p-2 absolute w-10 h-10 text-center back-icon shadow-lg" to="/">
                <i class="fas fa-arrow-left"></i>
            </g-link>
            <div class="bg-white w-3/4 flex justify-center py-20">
                <g-image :src="$context.data.image" class="w-auto m-auto max-h-full max-w-full rounded-lg"/>
            </div>
            <div class="text-left w-1/4 bg-white relative overflow-auto border-l-2 border-gray-200">
                <div class="sticky top-0 w-full px-4 py-4 bg-gray-400">
                    <div class="flex items-center">
                        <img :src="$context.data.owner.picture" alt="" style="width: 60px; border-radius: 50%;"/>
                        <div class="pl-2">
                            <p class="text-lg text-green-500 font-bold">{{$context.data.owner.firstName}} {{$context.data.owner.lastName}}</p>
                            <p class="text-xs text-green-900">{{$context.data.owner.email}}</p>
                        </div>
                    </div>
                </div>
                <div class="text-sm text-black px-4 pb-6 pt-4 border-b-2 border-gray-200">
                    <p>{{$context.data.text}}</p>
                </div>
                <div class="p-4">
                    <p class="text-gray-700">
                        <i class="fas fa-thumbs-up"></i> {{$context.data.likes}}
                    </p>
                    <p class="mt-2">
                        <span class="bg-green-500 text-white text-sm mr-1 p-1 rounded-sm" v-for="(tag, i) in $context.data.tags" :key="i">
                            {{tag}}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
</template>