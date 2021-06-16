<template>
  <form @submit.prevent="onSubmit">

      <div :class="['form-control', { invalid: nError }]">
          <label for="name">ФИО</label>
          <input type="text" id="name" v-model="name" @blur="nBlur">
          <small v-if="nError">{{ nError }}</small>
      </div>

      <div :class="['form-control', { invalid: pError }]">
          <label for="phone">Телефон</label>
          <input type="text" id="phone" v-model="phone" @blur="pBlur">
          <small v-if="pError">{{ pError }}</small>
      </div>

      <div :class="['form-control', { invalid: aError }]">
          <label for="amount">Сумма</label>
          <input type="number" id="amount" v-model.number="amount" @blur="aBlur">
          <small v-if="aError">{{ aError }}</small>
      </div>

      <div class="form-control">
          <label for="status">Статус</label>
          <select id="status" v-model="status">
              <option value="done">Завершен</option>
              <option value="cancelled">Отменен</option>
              <option value="active">Активен</option>
              <option value="pending">Выполняется</option>
          </select>
      </div>

      <button class="btn primary" :disabled="isSubmitting">Создать</button>
  </form>
</template>

<script>
import { useRequestForm } from '../../use/request-form'

export default {
    emits: ['created'],
    data() {
        return useRequestForm(this.submit)
    },
    methods: {
        async submit(val) {
            await this.$store.dispatch('request/create', val);
            this.$emit('created');
        }
    }
}
</script>

<style>

</style>