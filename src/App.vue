<script setup>
import { RouterView } from 'vue-router';
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <div>
    <NavbarVue/>
    <RouterView/>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.commit('checkLocal');
  },
  mounted(){
     this.$store.commit("delete");
  }
}
</script>