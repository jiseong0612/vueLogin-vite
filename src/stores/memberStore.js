import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMemberStore = defineStore('memberStore', {
  state: ()=>{
    return { 
      member : {id : 'hth5545', pw: 'wldms1wltjd@'},
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    registerMember() {
      axios.get("/api")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
    },
  },
})