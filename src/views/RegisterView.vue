<template>
  <div>
    <h1>registerMember Page</h1>
    <div>

      <form @submit.prevent="registerMember">
        <div>ID : <input type="text" v-model="id"></div><br>
        <div>PW1 : <input type="password" v-model="pw1"></div>
        <div>PW2 : <input type="password" v-model="pw2"></div>
        <button type="submit">register</button>
      </form>

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
      pw1 : '',
      pw2 : '',
    }
  },
  methods: {
    registerMember() {
      axios.post("/api/register", {id : this.id, pw : this.pw})
      .then(({data}) => {
        useMemberStore().$patch({member : data})
        alert(`${useMemberStore().member.id}님 환영합니다.`)
        this.$router.push("/login");
      })
      .catch(error => {
        console.error(error);
      })
    },
  },
}
</script>

<style></style>
