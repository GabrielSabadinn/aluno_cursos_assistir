import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import axios from 'axios';
import Vuex from 'vuex'

axios.interceptors.request.use(config => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkdhYnJpZWwgU2FiYWRpbiBHT1NUT1NJTiIsImVtYWlsIjoiZnVsbHN0YWNrQGxlZmlzYy5jb20uYnIiLCJpZF9hbHVubyI6IjE1ZTc5YmQ2LTcyMzEtZWUxMS1hM2YxLTYwNDViZGRiNDhkZSIsIm5iZiI6MTY5MzkzMzM2NSwiZXhwIjoxNjk2NTI1MzY1LCJpYXQiOjE2OTM5MzMzNjUsImlzcyI6Imh0dHBzOi8vYXBpLmN1cnNvc2xlZmlzYy5jb20uYnIvYWx1bm8iLCJhdWQiOiJodHRwczovL2FsdW5vLmN1cnNvc2xlZmlzYy5jb20uYnIvIn0.oVX2EQyqTGfOI184exm3eZ4TQ1XozL9eIBZk9KM1Zs4'
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  });
  
const app = createApp(App);
app.use(Vuex)
app.use(router);
app.use(store)
app.mount('#app');