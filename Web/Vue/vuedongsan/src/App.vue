<template>
<!-- 팝업창 -->
  <div v-for="(a, i) in data.length" :key="i">
    <div class="black-bg" v-if="모달창 === i">
      <div class="white-bg">
        <h4>{{data[i].title}}</h4>
        <p>{{data[i].content}}</p>
        <button class="close" @click="모달창=false">닫기</button>
      </div>
    </div>
  </div>

<!-- 탑 바 -->
  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{a}}</a>
  </div>
<!-- 내용 -->
  <div class="box">
    <div class="info" v-for="(a,i) in data.length" :key="i">
      <img :src="data[i].image" class="room-img">
      <h4 :style="스타일" @click="popup(i)">{{data[i].title}}</h4>
      <p>{{ data[i].price }}만원</p>
      <button class="buttons" @click="count(i)">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
    </div>
  </div>

<!-- 내용2 -->
  <!-- <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 :style="스타일">{{products[0]}}</h4>
    <p>{{ price[0] }} 만원</p>
    <button v-on:click="신고수[0]++">허위매물신고</button> <span>신고수 : {{신고수[0]}}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4 :style="스타일">{{products[1]}}</h4>
    <p>{{price[1]}} 만원</p>
    <button @click="신고수[1]++">허위매물신고</button> <span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img">
    <h4 :style="스타일">{{products[2]}}</h4>
    <p>{{price[2]}} 만원</p>
    <button @mouseover="신고수[2]++">허위매물신고</button> <span>신고수 : {{신고수[2]}}</span>
  </div> -->

</template>

<script>
import data from './data';
console.log(data)
export default {
  name: 'App',
  data(){
    return{
      모달창: false,
      data: data,
      price: [50, 60, 70],
      스타일: 'color: darkblue',
      메뉴들: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동 원룸', '마포구원룸'],
      신고수: [0, 0, 0, 0, 0, 0]
    }
  },
  methods:{
    count(i){
      console.log(i)
      this.신고수[i]++;
    },
    popup(i){
      console.log(i)
      this.모달창 = i;
    }
  },
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
button{cursor: pointer;}
.black-bg{
  width:100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 100px 20px 20px;
}
.white-bg{
  width: 80%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
}
.buttons{
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  color:#fff;
  font-size: 16px;
  background: darkslateblue;
}
.close{
  width: 60px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  color:#fff;
  font-size: 16px;
  background: darkslateblue;
  margin-left: 80%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background: darkslateblue;
  padding:15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
.box{
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
}
.info{
  width: 30%;
}
.room-img{
  width: 80%;
  margin-top: 40px
}
</style>
