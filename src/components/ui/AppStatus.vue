<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            classesMap: {
                active: 'primary',
                cancelled: 'danger',
                done: 'primary',
                pending: 'warning'
            },
            textMap: {
                active: 'Активен',
                cancelled: 'Отменен',
                done: 'Завершен',
                pending: 'Выполняется'
            }
        }
    },
    computed: {
        className() {
            return this.classesMap[this.type];
        },
        text() {
            return this.textMap[this.type];
        }
    }
}
</script>

<style>

</style>