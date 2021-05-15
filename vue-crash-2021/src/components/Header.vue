<template>
    <header>
        <h1>{{ title }}</h1>
        <Button v-show="isHomePage" @btn-click="$emit('toggle-add-task')" 
        :text="showToggle ? 'Close' : 'Add Task'"
        :color="showToggle ? 'red' : 'green'" />
    </header>
</template>


<script>
import Button from './Button'
export default{
    name:'Header',
    props: {
        title: String,
        showToggle: Boolean
    },
    components: {
        Button
    },
    computed:{
        isHomePage(){
            if(this.$route.path === '/'){
                return true
            }else{
                return false
            }
        }
    }
}
</script>


<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

    }
</style>