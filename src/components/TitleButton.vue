<template>
    <button @click="content" class="button" :class="{'selecionado': thatRoute === route || !thatRoute}">
        {{ text }}
    </button>
    <hr v-if="exist" />
</template>

<script>
    export default {
        name: "TitleButton",
        props: {
            text: String,
            route: String,
            exist: Boolean,
            thatRoute: String
        },
        emits: ['changeRoute'],
        methods: {
            content() {
                this.$emit('changeRoute', this.route);
            }
        },
    }
</script>

<style scoped>
    .selecionado {
        background-color: #507193;
        color: #fff;
        border-color: #85bef8;
    }
</style>