<template>
        <slide-y-down-transition>
            <router-view></router-view>
        </slide-y-down-transition>
</template>
<script>
    import { SlideYUpTransition, SlideYDownTransition } from 'vue2-transitions';
    export default{
        data:()=>({
            showComment: false
        }),
        components: {
            SlideYUpTransition,
            SlideYDownTransition,
        },
        methods:{
            updateShowComment(val){
                this.showComment = val;
            }
        },
        mounted(){
            this.$store.commit('updateAnonLoading',false);
        }
    }
</script>