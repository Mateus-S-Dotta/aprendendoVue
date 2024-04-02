<template>
    <div class="divExplanation">
        <h1>Emissão de Eventos</h1>
        <p>Fazer a comunicação de um componente pai para um componente filho é meio estranho no Vue</p>
        <p>Ponto pro React...</p>
        <p>No geral, se faz essa comunicação através de eventos e $emit</p>
        <p>Ou seja, você declara a função no elemento pai, e o dado será manipulado através da função</p>
        <p>O elemento filho não muda o valor diretamente, só chama uma função que mudará</p>
        <hr />
        <h1>Interações</h1>
        <div class="borda">
            <h2>Elemento Pai</h2>
            <p>Valor declarado no elemento pai: {{ valor }}</p>
            <div class="line">
                <button @click="mudarValor(false)" class="button">
                    Diminuir valor: {{ valor }}
                </button>
                <button @click="mudarValor(true)" class="button">
                    Aumentar valor: {{ valor }}
                </button>
            </div>
            <ElementoFilho :valor="valor" @mudarValor="mudarValor" />
        </div>
    </div>
</template>

<script>
    import ElementoFilho from './ElementoFilho.vue'

    export default {
        name: "EmissaoEventos",
        components: {
            ElementoFilho
        },
        data() {
            return {
                valor: 0,
            }
        },
        methods: {
            mudarValor(more) {
                if (more){
                    this.valor++
                } else {
                    this.valor--
                }
            },
        }
    }
</script>

<style scoped>
    .borda {
        border: 1px #2c3e50 solid;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 16px;
        width: 100%;
    }
</style>
