<template>
    <AppLoader v-if="loader" />

    <app-page title="Список заявок" v-else>

      <template #header>
        <button class="btn primary" @click="modal = true">Создать</button>
      </template>

      <RequestFilter v-model="filter"/>
      <RequestsTable :requests="request"/>

      <teleport to="body">
        <app-modal v-if="modal" title="Создать заявку" @close="close">
          <RequestModal @created="modal = false"/>
        </app-modal>
      </teleport>

    </app-page>
</template>

<script>
import AppModal from '../components/ui/AppModal'
import AppPage from '../components/ui/AppPage'
import RequestsTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import AppLoader from '../components/ui/AppLoader'
import RequestFilter from '../components/request/RequestFilter'

export default {
  data() {
    return {
      modal: false,
      loader: false,
      filter: {}
    }
  },
  mounted() {
    this.load();
  },
  computed: {
    request() {
      return this.$store.getters['request/requests'].filter(request => {
        if (this.filter.name) {
          return request.name.toLowerCase().includes(this.filter.name.toLowerCase());
        }
        return request;
      }).filter(request => {
        if (this.filter.status) {
          return this.filter.status === request.status;
        }
        return request;
      });
    }
  },
  methods: {
    async load() {
      this.loader = true;
      await this.$store.dispatch('request/load');
      this.loader = false;
    },
    close() {
      this.modal = false;
    }
  },
  components: {
    AppModal,
    AppPage,
    RequestsTable,
    RequestModal,
    AppLoader,
    RequestFilter
  }
}
</script>

<style>
</style>
