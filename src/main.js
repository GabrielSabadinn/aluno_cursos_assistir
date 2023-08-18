import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import axios from 'axios';
import Vuex from 'vuex'

axios.interceptors.request.use(config => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkdhYnJpZWwgU2FiYmFkaW4iLCJlbWFpbCI6ImZ1bGxzdGFja0BsZWZpc2MuY29tLmJyIiwiaWRfYWx1bm8iOiIxNWU3OWJkNi03MjMxLWVlMTEtYTNmMS02MDQ1YmRkYjQ4ZGUiLCJuYmYiOjE2OTE1ODE1ODAsImV4cCI6MTY5NDE3MzU4MCwiaWF0IjoxNjkxNTgxNTgwLCJpc3MiOiJodHRwczovL2FwaS5jdXJzb3NsZWZpc2MuY29tLmJyL2FsdW5vIiwiYXVkIjoiaHR0cHM6Ly9hbHVuby5jdXJzb3NsZWZpc2MuY29tLmJyLyJ9.3ud3X6G3uzvkCkagfxWME1KFmXsJd3veLP1akX-6htc'
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });
  
const app = createApp(App);
app.use(Vuex)
app.use(router);
app.use(store)
app.mount('#app');