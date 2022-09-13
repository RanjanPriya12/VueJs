<template>
    <div>
        <h1>Child Component</h1>
    </div>
</template>

<script>
    export default {
        name:"ChildComponent",
        beforeCreate(){
            console.log('Child beforeCreate()');
        },
        created(){
            console.log('Child created()');
        },
        beforeMount(){
            console.log('Child beforeMount()')
        },
        mounted(){
            console.log('Child mounted()')
        },
        beforeUpdate(){
            console.log('Child beoforeUpdate()')
        },
        update(){
            console.log('Child is Updated()')
        },
        beforeUnmount(){
            console.log('Child beforeUnmount()')
        },
        unmounted(){
            console.log('Child is unmounted()');
        }
    }
</script>

<style scoped>

</style>