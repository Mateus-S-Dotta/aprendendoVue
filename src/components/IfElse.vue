<template>
    <div class="divExplanation">
        <h1>If Else</h1>
        <p>
            No Vue tem uma coisa MUITO interessante
        </p>
        <p>
            Podesse utilizar a mesma estrutura do If Else para decidir se uma tag ou componente vai ser renderizada ou
            não
        </p>
        <p>
            Exemplo: veja esse código
        </p>
        <strong>
            {{ `<div1 v-if="condição" />` }}
        </strong>
        <strong>
            {{ `<div2 v-else-if="condição" />` }}
        </strong>
        <strong>
            {{ `<div3 v-else="condição" />` }}
        </strong>
        <p>
            As três div's serão renderizadas a partir das condições na mesma estrutura que o If Else padrão
        </p>
        <p>
            Se a condição da div1 for verdadeira, ela será renderizada e as outras div's não, o mesmo vale para div2 e
            div3
        </p>
        <hr />
        <div class="line">
            <button @click="chanceBolean('text1')" class="button">
                {{ !text1 ? 'Ativar' : 'Desativar' }} Texto 1
            </button>
            <p v-if="text1">
                Um texto
            </p>
        </div>
        <div class="line">
            <button @click="chanceBolean('text2')" class="button">
                {{ !text2 ? 'Ativar' : 'Desativar' }} Texto 2
            </button>
            <p v-if="text2">
                Mais um texto
            </p>
        </div>
        <div class="line">
            <button @click="chanceBolean('text3')" class="button">
                {{ !text3 ? 'Ativar' : 'Desativar' }} Texto 3
            </button>
            <p v-if="text3">
                Mais um outro texto
            </p>
        </div>
        <p>
            <strong>Comentário:</strong> sim, eu podeira colocar tudo num v-for, mas creio que é meilhor deixar assim
            para que o código fique mais visível
        </p>
    </div>
</template>

<script>
    export default {
        name: "IfElse",
        data() {
            return {
                text1: false,
                text2: false,
                text3: false
            }
        },
        methods: {
            chanceBolean(e) {
                this[e] = !this[e]
            }
        }
    }
</script>