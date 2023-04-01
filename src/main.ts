import { createApp } from 'vue';
import { StatusBar } from '@capacitor/status-bar';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

StatusBar.show();
StatusBar.setBackgroundColor({
  color: '#F9F9F9',
});
