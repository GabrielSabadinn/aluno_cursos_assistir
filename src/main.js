import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import axios from 'axios';
import Vuex from 'vuex';
import Cookies from 'js-cookie';
axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token_cursos');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
  
const app = createApp(App);
app.use(Vuex)
app.use(router);
app.use(store)
app.mount('#app');