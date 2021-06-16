<template>
  <form class="card" @submit.prevent="onSubmit">
      <h1>Войти в систему</h1>

      <div :class="['form-control', { invalid: eError }]">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" @blur="eBlur" placeholder="email: s@mail.ru Пароль: 123456">
          <small v-if="eError">{{ eError }}</small>
      </div>

      <div :class="['form-control', { invalid: pError }]">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model="password" @blur="pBlur">
          <small v-if="pError">{{ pError }}</small>
      </div>
      
      <button class="btn primary" :disabled="isSubmitting">Войти</button>
  </form>
</template>

<script>
import { useLoginForm } from '../use/login-form'
import { error } from '../utils/error'

export default {
    data() {
        return {
            ...useLoginForm(),
            warning: this.auth()
        }
    },
    methods: {
        auth() {
            if (this.$route.query.message) {
                this.$store.dispatch('setMessage', {
                    value: error(this.$route.query.message),
                    type: 'warning'
                });
            }
        }
    }
}
</script>

<style>

</style>