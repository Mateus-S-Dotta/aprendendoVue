<template>
    <div class="borda">
        <h2>Elemento Filho</h2>
        <p>Valor utilizado no elemento filho: {{ valor }}</p>
        <div class="line">
            <button @click="diminuirValor" class="button">
                Diminuir valor: {{ valor }}
            </button>
            <button @click="aumentarValor" class="button">
                Aumentar valor: {{ valor }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ElementoFilho",
        props: {
            text: String,
            valor: Number
        },
        emits: ['mudarValor'],
        methods: {
            aumentarValor() {
                this.$emit('mudarValor', true)
            },
            diminuirValor() {
                this.$emit('mudarValor', false)
            }
        }
    }
</script>
