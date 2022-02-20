"use strict";

import Vue from 'vue';
import axios from "axios";
import router from "./../router/index";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_URL || "http://127.0.0.1:5000"
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    if(localStorage.getItem('token')){
      config.headers['Authorization'] = localStorage.getItem('token'); 
    }
    
    return config;
  },
  function(error) {
    if(error.response.status == 401){
      router.push({name:'login'});
    }
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    if(error.response.status == 401){
      router.push({name:'login'});
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

window.axios = _axios;
Vue.prototype.$axios = _axios;
