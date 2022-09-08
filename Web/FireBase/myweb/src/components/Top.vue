<template>
    <div class="w-screen h-24 bg-blue-800 text-white">
        <div class="max-w-screen-xl m-auto flex justify-between items-center">
            <div class="w-2/5">
                <ul class="flex justify-evenly items-center  text-2xl">
                    <li v-for="(a, i) in menu" :key="i">
                        <button @click="TopLink(i)" class="TopBtn">{{a}}</button>
                    </li>
                </ul>
            </div>
            <div class="w-2/5 w- h-24 flex justify-evenly items-center text-xl">
                <router-link to="/SignIn">
                    <button class="TopBtn">로그인</button>
                </router-link>
                <router-link to="/SignUp">
                    <button class="TopBtn">회원가입</button>
                </router-link>
                <button @click="MyInfo" class="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                    <img class="h-10 mt-2" src="../assets/logo.png" alt="Vue logo">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    data(){
        return{
            menu: ['Home', 'Skill', 'About']
        }
    },
    methods:{
        TopLink(i){
            switch (i){
                case 0:
                this.$router.push({
                    name: this.menu[i],
                    params:{name:'HelloWorld Vue.JS'}
                }) 
                break;
                case 1:
                this.$router.push({
                    name: this.menu[i],
                }) 
                break;
                case 2:
                this.$router.push({
                    name: this.menu[i],
                }) 
                break;
            }
            
        },
        MyInfo(){
            this.$router.push({
                name:'MyInfo',
                params:{name:'사용자 이름'}
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>