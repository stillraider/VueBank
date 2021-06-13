<template>
  <div class="filter">
      <div class="form-control">
          <input type="text" placeholder="Введите имя" v-model="name">
      </div>
      <div class="form-control">
          <select v-model="status">
              <option disabled selected>Выберите статус</option>
              <option value="done">Завершен</option>
              <option value="cancelled">Отменен</option>
              <option value="active">Активен</option>
              <option value="pending">Выполняется</option>
          </select>
      </div>
      <button class="btn warning" v-if="isActive" @click="clear">Отчистить</button>
  </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: ['modalValue'],
    data() {
        return {
            name: '',
            status: null
        }
    },
    computed: {
        isActive() {
            return this.name || this.status;
        }
    },
    methods: {
        clear() {
            this.name = '';
            this.status = null;
        }
    },
    watch: {
        name(val) {
            this.$emit('update:modelValue', { name: val });
        },
        status(val) {
            this.$emit('update:modelValue', { status: val });
        }
    }
}
</script>

<style>

</style>