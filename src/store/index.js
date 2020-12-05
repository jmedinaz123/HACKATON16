import { createStore } from 'vuex'
import router from './../router'

export default createStore({
  state: {
    users: [],
    user: {},
  },
  mutations: {
    getUsersMutation(state,payload){
      state.users = payload
    },
    deleteUserMutation(state,payload){
      state.users = state.users.filter( item => item.id !== payload )
    },
    getUserMutation(state,payload){
      state.user = payload;
    }
  },
  actions: {
    async getUsersAction({commit}){
      try{
        const data = await fetch("http://localhost:3000/users");
        const users = await data.json();

        commit('getUsersMutation', users)
      }
      catch(error){
        console.log(error);
      }
    },
    createUserAction({commit},user){
      fetch('http://localhost:3000/users/',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(()=>{
        router.push('/')
      })
      .catch( error => {
        console.log(error)
      })
    },
    deleteUserAction({commit}, id){
      let newUrl = `http://localhost:3000/users/${id}`
      fetch(newUrl,{
        method: 'DELETE'
      })
      .then(()=>{
        commit('deleteUserMutation', id)
      })
      .catch(error => {
        console.log(error)
      })
    },
    async getUserAction({commit}, id){
      try{
        let newUrl = `http://localhost:3000/users/${id}`
        const data = await fetch(newUrl);
        const user = await data.json();

        commit('getUserMutation', user)
      }
      catch(error){
        console.log(error)
      }
    },
    updateUserAction({commit}, user){
      let newUrl = `http://localhost:3000/users/${user.id}`
      fetch(newUrl,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(()=>{
        router.push('/')
      })
      .catch(error=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
