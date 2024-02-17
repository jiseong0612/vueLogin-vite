<template>
  <div>
    <h1>user view</h1>
    <div>
      <div>ID : <input type="text" v-model="id"></div>
      <div>PW : <input type="text" v-model="pw"></div>
      <button @click="useMemberStore.registerMember">registe</button>
      <div>
        {{useMemberStore}}
      </div>
    </div>
  </div>
</template>

<script>
import { useMemberStore } from '../stores/memberStore.js'
export default {
computed: {
  useMemberStore(){
    return useMemberStore()
    }
  },
  data() {
    return {
      id : '',
      pw : '',
      //member: useMemberStore()
    }
  },
  methods: {
    registerMember() {
      useMemberStore().registerMember(this.id, this.pw);
    },
  },
}
</script>

<style></style>
