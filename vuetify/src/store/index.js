import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    areas: [],
    estatus: [
      {id:0, name: 'Inactivo'},
      {id:1, name: 'Activos'},
    ]
  },
  mutations: {
    getUser(state, payload){
      state.user =  payload
    },
    getAreas(state, payload){
      state.areas =  payload
    }
  },
  actions: {
    async getUser(context){
      try{
        let {data} = await window.axios.get(`auth/user`);
        context.commit('getUser', data);
      }catch(exception){
        console.error(exception);
        context.commit('getUser', null);
      }
    },
    async getAreas(context){
      try{
        let {data} = await window.axios.get(`areas`);
        context.commit('getAreas', data);
      }catch(exception){
        console.error(exception);
        context.commit('getAreas', []);
      }
    },
  },
  modules: {
  }
})
