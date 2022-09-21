<template>
    <div className='max-w-[700px] max-auto my-16 mx-auto p-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>
                회원가입
            </h1>
            <p className='py-2'>
                이미 회원에 가입하셨나요? 바로 <router-link to='/SignIn' className='underline font-bold text-lg'>로그인</router-link> 하세요.
            </p>
        </div>
        <form>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>이메일</label>
                <input type="email" v-model="email" className="border p-3 text-center"/>
            </div>
            <p v-if="emailCheck" class="text-red-600">{{emailText}}</p>
            <button v-else @click="SendEmail" className='border bg-blue-800 
                            hover:bg-blue-500 w-1/3 p-1 my-2 text-white'>이메일 확인</button>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" v-model="password[0]" className="border p-3 text-center"/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호 확인</label>
                <input type="password" v-model="password[1]" className="border p-3 text-center"/>
            </div>
            <p v-show="passwordCheck" class="text-red-600">{{passwordText}}</p>
            <!-- <div v-for="(e, i) in list1" :key="i" className='flex flex-col py-2'>
                <label className='py-2 font-medium'>{{e}}</label>
                <input type="text" className="border p-3 text-center" v-model="list2[i]"/>
            </div> -->

            <button @click="SignUp" type="submit" className='border bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>가입</button>
        </form>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../main'

export default {
    name:"SignUp",
    data(){
        return{
            list1:['이름', '연락처','주소', '소개'],
            list2:['Name', 'Tel', 'Adress', 'Info'],
            password:['',''],
            passwordText: '비밀번호 형식은 영어, 숫자, 문자 포함 8자 이상 16자 이하입니다.',
            passwordCheck: true,
            email: '',
            emailText: '이메일 형식이 옳바르게 입력해주세요.',
            emailCheck: true
        }
    },
    watch:{
        email() {
            this.emailcheck()
        },
        password() {
            this.passwrodcheck()
        }
    },
    methods:{
        SignUp(){
            if(this.passwordCheck && this.emailCheck){
                alert("내용을 다시 채워주세요")
            }else{
                createUserWithEmailAndPassword(auth, this.email, this.password[1])
                alert(this.email+'님 회원가입 완료!')
                this.$router.replace('SignIn')
            }
        },
        SendEmail(){
            auth.languageCode = 'ko';
            sendEmailVerification(this.email)
            alert('이메일이 전송되었습니다.')
        },
        emailcheck(){
            const check = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
            if (!check.test(this.email) || !this.email) {
                this.emailCheck = true
            } else{
                this.emailCheck = false
                this.emailText = '이메일 형식이 옳바르지 않습니다.'
            }
        },
        passwordcheck(){
            const check = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/
            if (!check.test(this.password) || !this.password) {
                if(this.password[0] === this.password[1]){
                    this.passwordCheck = true
                }else{
                    this.passwordText = '비밀번호가 일치하지 않습니다.'
                }
            } else{
                this.passwordCheck = false
                this.passwordText = '비밀번호 형식은 영어, 숫자, 문자 포함 8자 이상 16자 이하입니다.'
            }
        }
    },
    mounted(){
        if (auth.currentUser) {
            this.$router.replace('/')
        }
    }
}
</script>

<style scoped>

</style>