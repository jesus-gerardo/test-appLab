import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    classroom: [],
    courses: [],
    teachers: [],
    days: [
      {id:1, name:'Lunes'}, {id:2, name:'Martes'}, {id:3, name:'Miercoles'}, {id:4, name:'Jueves'},
      {id:1, name:'Viernes'},  {id:1, name:'Sabado'}, {id:1, name:'Domingo'}
    ],
  },
  mutations: {
    getUser(state, payload){
      state.user =  payload
    },
    getClassroom(state, payload){
      state.classroom =  payload
    },
    getCourses(state, payload){
      state.courses =  payload
    },
    getTeachers(state, payload){
      state.teachers =  payload
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
    async getClassroom(context){
      try{
        let {data} = await window.axios.get(`resources/classrooms`);
        context.commit('getClassroom', data.data);
      }catch(exception){
        console.error(exception);
        context.commit('getClassroom', []);
      }
    },
    async getCourses(context){
      try{
        let {data} = await window.axios.get(`resources/courses`);
        context.commit('getCourses', data.data);
      }catch(exception){
        console.error(exception);
        context.commit('getCourses', []);
      }
    },
    async getTeachers(context){
      try{
        let {data} = await window.axios.get(`resources/teachers`);
        context.commit('getTeachers', data.data);
      }catch(exception){
        console.error(exception);
        context.commit('getTeachers', []);
      }
    }
  },
  modules: {
  }
})
