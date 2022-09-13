<template>
    <div>
        Parent Component:
        <button @click="showChild=!showChild">Toggle Child</button>
        <ChildComponent v-if="showChild"/>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
    export default {
        components:{
            ChildComponent,
        },
        name:"ParentComponent",
        data(){
            return{
                showChild:true,
            }
        },
        beforeCreate(){
            console.log('Parent beforeCreate()');
        },
        created(){
            console.log('Parent created()');
        },
        beforeMount(){
            console.log('Parent beforeMount()')
        },
        mounted(){
            console.log('Parent mounted()')
        },
        beforeUpdate(){
            console.log('Parent beoforeUpdate()')
        },
        update(){
            console.log('Parent is Updated()')
        },
        beforeUnmount(){
            console.log('Parent beforeUnmount()')
        },
        unmounted(){
            console.log('Parent is unmounted()');
        }
    }
</script>

<style scoped>

</style>