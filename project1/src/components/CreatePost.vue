<template>
    <div>
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">UserId</label>
                <input type="text" id="userId" v-model="formValue.userId" required>
            </div>

            <div>
                <label for="title">Title</label>
                <input type="text" id="title" v-model="formValue.title" required>
            </div>

            <div>
                <label for="body">Description</label>
                <input type="text" id="body" v-model="formValue.body" required>
            </div>
            <div>
                <button>Create Post</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"CreatePost",
        data(){
            return{
                formValue:{
                    userId:"",
                    title:"",
                    body:""
                }
            }
        },
        methods:{
            createPost(){
                axios.post(`https://jsonplaceholder.typicode.com/posts`,this.formValue)
                .then(res=>console.log(res))
                .catch(err=>console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>