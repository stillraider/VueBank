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
        const classesMap = {
            active: 'primary',
            cancelled: 'danger',
            done: 'primary',
            pending: 'warning',
        }

        const textMap = {
            active: 'Активен',
            cancelled: 'Отменен',
            done: 'Завершен',
            pending: 'Выполняется',
        }

        const className = classesMap[this.type];
        const text = textMap[this.type];

        return {
            className,
            text,
            classesMap,
            textMap,
        }
    },
    watch: {
        type(val) {
            this.className = this.classesMap[val];
            this.text = this.textMap[val];
        }
    }
}
</script>

<style>

</style>