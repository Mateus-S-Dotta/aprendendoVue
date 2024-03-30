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
            show: Number,
            index: Number,
            exist: Boolean
        },
        data() {
            return {
                num: this.show
            }
        },
        emits: ['changeShow'],
        methods: {
            content() {
                this.$emit('changeShow', this.index);
            }
        }
    }
</script>