<template>
    <div class="divExplanation">
        <h1>Mapeamentos</h1>
        <p>
            O mapeamento de um array no Vue é feito através do v-for
        </p>
        <p>
            Mostrando no código é mais fácil:
        </p>
        <strong>
            {{ '<div class="tabela" v-for="(elemento, index) in array" :key="index">' }}
        </strong>
        <strong>
            {{ '<Componente />' }}
        </strong>
        <strong>
            {{ '</div>' }}
        </strong>
        <p>
            Desta forma, funcionará muito parecido com o .map do React
        </p>
        <p>
            <strong>Detalhe:</strong> para cada um dos componentes, existira também uma div "tabela"
        </p>
        <p>
            Para que essa div não exista, deve usar <strong>{{ '<template></template>' }}</strong>
        </p>
        <hr />
        <h1>Interações</h1>
        <div class="line">
            <button @click="changeNum(true)" class="button">
                -
            </button>
            <h3>{{ num }}</h3>
            <button @click="changeNum(false)" class="button">
                +
            </button>
        </div>
        <template v-for="(element, i) in array" :key="i">
            <h4 v-if="(i + 1) <= num">
                {{ element }}
            </h4>
        </template>
        <p>
            Tem um array com cada um dos textos, só criei uma lógica para o elemento existir ou não com base no número. Veja "If Else"
        </p>
    </div>
</template>

<script>
    export default {
        name: "MapeamentoVue",
        data() {
            return {
                array: ['Primeiro Texto', 'Segundo Texto', 'Terceiro Texto', 'Acho que você já entendeu', 'Sorte que é só 5'],
                num: 0
            }
        },
        methods: {
            changeNum(e) {
                if (e && this.num > 0) {
                    this.num = this.num - 1
                } else if (!e && this.num < 5) {
                    this.num = this.num + 1
                }
            }
        }
    }
</script>