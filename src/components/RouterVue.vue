<template>
    <div class="divExplanation">
        <h1>Router</h1>
        <p>O Router do Vue é muito massa, que negócio divertido</p>
        <p>Tu pode ter a pagina intera construida, e em qualquer lugar coloca a tag <strong>{{ '<router-view />'
                }}</strong></p>
        <p>Quando trocar de rota, a pagina vai se manter, a única coisa que altera é o componente expecifico daquela
            rota</p>
        <p>Tem como fazer isso no React? Não tenho menor ideia, então por isso, <strong>Ponto pro Vue</strong></p>
        <hr />
        <h1>Interações</h1>
        <h3>Este input muda o valor da URL</h3>
        <input v-model="inputValue" @input="atualizarRota" />
        <p>Rota atual: <strong>{{ inputValue }}</strong></p>
    </div>
</template>

<script>
    export default {
        name: "RouterVue",
        data() {
            return {
                inputValue: ''
            }
        },
        watch: {
            '$route'() {
                if (!this.$route.params.input) {
                    this.inputValue = ''
                }
            }
        },
        mounted() {
            this.inputValue = this.$route.params.input
        },
        methods: {
            atualizarRota() {
                this.$router.push(`/router/${this.inputValue}`)
            }
        }

    }
</script>