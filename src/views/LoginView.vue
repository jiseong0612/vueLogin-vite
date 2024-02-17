<template>
  <div>
    <h1>Login Page</h1>
    <div>
      <form @submit.prevent="loginMember">
        <div>ID : <input type="text" v-model="id"></div>
        <div>PW : <input type="text" v-model="pw"></div>
        <div><input type="checkbox" v-model="rememberMe"> remember Me</div>
        <button>Login</button>
      </form>
        
      <div>
        <ul>
          <li><router-link to="/register">register</router-link></li>
          <li>카카오 로그인</li>
          <li>구글 로그인</li>
          <li>페북 로그인</li>
        </ul>
      </div>
      <div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import { useMemberStore } from '../stores/memberStore.js'
export default {
  data() {
    return {
      id : '',
      pw : '',
      rememberMe: false,
    }
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
    
    },
  updated(){
    console.log('updated')

  },
  methods: {
    loginMember() {
      axios.post("/api/login", {id : this.id, pw : this.pw})
      .then(({data}) => {
        useMemberStore().$patch({member : data})
        alert(`${useMemberStore().member.id}님 환영합니다.`)
        this.$router.push("/");
      })
      .catch(error => {
        console.error(error);
      })
    },
  },
}
</script>

<style></style>
