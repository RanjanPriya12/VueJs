<template>
    <div>
<!-- <button @click="getPots">Load Post</button> -->
<h3 v-if="errorMsg">{{errorMsg}}</h3>
<div v-for="item in post" :key="item.id">
<p>{{item.title}}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
<p>Using text interpolation: {{ rawHtml }}</p>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:"PostList",
        created(){
            this.getPots()
        },
        data(){
      return{
        post:[],
        errorMsg:""
      }
    },
    methods:{
        getPots(){
            axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res)=>{
                console.log(res.data);
                this.post=res.data;
            })
            .catch(err=>{
                console.log(err);
                this.errorMsg='Error in retrieving data'
            })
        }
    }
    }
</script>

<style scoped>

</style>