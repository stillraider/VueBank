<template>
    <div v-if="message" :class="['alert', message.type]">
        <p class="aletr-title" v-if="title">{{ title }}</p>
        <p>{{ message.value }}</p>
        <span class="alert-close" @click="close">&times;</span>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    data() {
        const store = useStore();

        const TITLE_MAP = {
            primary: 'Успешно!',
            danger: 'Ошибка!',
            warning: 'Внимание!'
        }

        return {
            TITLE_MAP,
            store
        }
    },
    methods: {
        close() {
            this.store.commit('clearMessage');
        }
    },
    computed: {
        message() {
            return this.store.getters.message;
        },
        title() {
            return this.message.value ? this.TITLE_MAP[this.message.type] : '';
        }
    }
}
</script>

<style>

</style>