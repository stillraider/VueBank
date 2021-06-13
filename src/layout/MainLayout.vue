<template>
    <the-navbar></the-navbar>
    <div class="container indent-top">
      <app-message></app-message>
      <router-view/>
    </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import AppMessage from '../components/ui/AppMessage.vue'

export default {
  components: { 
    TheNavbar,
    AppMessage 
  }
}
</script>

<style>
 .indent-top {
   padding-top: 70px;
 }
</style>