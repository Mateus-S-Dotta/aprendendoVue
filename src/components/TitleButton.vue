<template>
    <button @click="content" class="button">
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
            exist: Boolean
        },
        emits: ['changeRoute'],
        methods: {
            content() {
                this.$emit('changeRoute', this.route);
            }
        },
    }
</script>