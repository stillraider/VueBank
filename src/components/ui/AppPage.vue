<template>
    <div class="breadcrumbs" v-if="back">
        <router-link to="/">Вернуться к заявкам</router-link>
    </div>

    <div class="card">
        <h1 class="card-title">
            {{ title }}
            <slot name="header"/>
        </h1>

        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        back: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return { 
            heading: document.title = `${this.title} | Клон Банка`
        }
    }
}
</script>

<style>

</style>
