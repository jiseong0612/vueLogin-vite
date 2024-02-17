import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberStore', {
  state: ()=>{
    return { 
      member : {},
    }
  },
  getters: {
    getId: (state)=> state.member.id,
  },
  actions: {
    
  },
})