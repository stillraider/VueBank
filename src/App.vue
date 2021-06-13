<template>
  <component :is="layout + '-layout'" />
</template>

<script>
import AuthLayout from './layout/AuthLayout'
import MainLayout from './layout/MainLayout'

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  },
  components: {
     AuthLayout,
     MainLayout
   }
}
</script>

<style>

</style>
