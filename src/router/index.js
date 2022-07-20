import { createRouter, createWebHistory } from 'vue-router'
import CardVue from '../components/Card.vue';
import RegisterVue from '../components/Register.vue'
import TableAddVue from '../components/TableAdd.vue'
import store from '../store/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'Card',
      component : CardVue
    },

    {
      path : '/register',
      namev : "Register",
      component : RegisterVue
    },

    {
      path : '/tableadd',
      namev : "Table a",
      component : TableAddVue,
      beforeEnter: (to, from, next) => {
        if(store.getters.checkToken){
          next();
        }else{
          alert('Yalniz admin')
          next('/register')
        }
      }
    }
  
  ]
})

export default router
