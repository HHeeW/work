<template>
    <div>
        내정보
        {{User}}
    </div>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../main'

export default {
    name:"MyInfo",
    data(){
        return{
            User: ''
        }
    },
    mounted(){
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.User = user.email;
                console.log(user)
            } else {
                // alert('로그인을 하세요')
                this.$router.replace('/')
            }
        })
    }
}
</script>

<style scoped>
    

</style>