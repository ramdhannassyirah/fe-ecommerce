import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostsStore = defineStore('posts', () => {
    const posts = ref([])
    const isLoading = ref(true)

    const getPosts = async () => {
        isLoading.value = true
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
        isLoading.value = false
    }

    return { posts,getPosts,isLoading }
});

export const usePostsDetailStore = defineStore('postsDetail', () => {
    const post = ref({})
    const isLoading = ref(true)

    const getPostDetail = async (id) => {
        isLoading.value = true
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        post.value = await response.json()
        isLoading.value = false
    }

    return { post,getPostDetail,isLoading }
}) 