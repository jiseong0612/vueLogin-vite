<template>
  <div>
    <h1>Login Page</h1>
    <div>
      <div>ID : <input type="text" v-model="id"></div>
      <div>PW : <input type="text" v-model="pw"></div>
      <div><input type="checkbox" v-model="rememberMe"> remember Me</div>
      <button @click="loginMember">Login</button>
      <button @click="registerMember">register</button>
      <div>
        {{memberStore}}
      </div>
      {{memberStore.member.id}}
    </div>
    
  </div>
</template>

<script>
import { useMemberStore } from '../stores/memberStore.js'
export default {
  data() {
    return {
      id : '',
      pw : '',
      rememberMe: false,
      memberStore : useMemberStore()
    }
  },
  methods: {
    loginMember() {
      this.memberStore.loginMember(this.id, this.pw);
    },
    registerMember() {
      this.memberStore.registerMember(this.id, this.pw);
    },
  },
}
</script>

<style></style>
