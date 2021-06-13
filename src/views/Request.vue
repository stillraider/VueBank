<template>
  <AppLoader v-if="loading"/>
  <app-page v-else-if="request" title="Заявка" :back="true">

    <p><strong>Имя владельца</strong>: {{ request.name }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}  </p>
    <p><strong>Статус</strong>: <AppStatus :type="request.status"/></p>

    <div class="form-control">
        <label for="status">Статус</label>
        <select id="status" v-model="status">
            <option value="done">Завершен</option>
            <option value="cancelled">Отменен</option>
            <option value="active">Активен</option>
            <option value="pending">Выполняется</option>
        </select>
      </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
    
  </app-page>

  <h3 v-else class="text-center text-white">Заявки с таким id {{ id }} нет.</h3>
</template>

<script>
import { currency } from '../utils/currency'
import AppLoader from '../components/ui/AppLoader';
import AppPage from '../components/ui/AppPage'
import AppStatus from '../components/ui/AppStatus';

export default {
    data() {
        return {
            loading: true,
            request: {},
            id: this.$route.params.id,
            currency,
            status
        }
    },
    mounted() {
        this.load();
    },
    methods: {
        async load() {
            this.request = await this.$store.dispatch('request/loadById', this.id);
            this.status = this.request?.status;
            this.loading = false;
        },
        async remove() {
            await this.$store.dispatch('request/remove', this.id) ;
            this.$router.push('/');
        },
        async update() {
            const data = {...this.request, status: this.status, id: this.id}
            await this.$store.dispatch('request/update', data);
            this.request.status = this.status;
        }
    },
    computed: {
        hasChanges() {
            return this.request.status !== this.status;
        }
    },
    components: { 
        currency,
        AppPage,
        AppLoader,
        AppStatus
    }
}
</script>

<style>

</style>