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
        <form onsubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>이메일</label>
                <input type="email" className="border p-3 text-center" onchange="e=>Email(e.target.value)"/>
            </div>
            <button type="submit" className='border bg-blue-800 
                            hover:bg-blue-500 w-1/3 p-1 my-2 text-white'>이메일 확인</button>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호</label>
                <input type="password" className="border p-3 text-center" onchange="e=>Email(e.target.value)"/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='py-2 font-medium'>비밀번호 확인</label>
                <input type="password" className="border p-3 text-center" onchange="e=>Email(e.target.value)"/>
            </div>
            <div v-for="(e, i) in list1" :key="i" className='flex flex-col py-2'>
                <label className='py-2 font-medium'>{{e}}</label>
                <input type="text" className="border p-3 text-center" v-model="list2[i]"/>
            </div>

            <button type="submit" className='border bg-blue-800 
                            hover:bg-blue-500 w-full p-4 my-2 text-white'>가입</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:"SignUp",
        data(){
            return{
                list1:['이름', '연락처','주소', '소개'],
                list2:['Name', 'Tel', 'Adress', 'Info']

            }
        },
        methods:{
        },
    }
</script>

<style scoped>

</style>