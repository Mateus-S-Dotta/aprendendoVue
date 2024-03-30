<template>
    <div class="divExplanation">
        <h1>Classes</h1>
        <p>
            No Vue tem como alterar a classe dinamicamente
        </p>
        <p>
            Em alguma tag, invez de colocar class="...", deve colocar
            <strong>:class="{'nomeDaClasse': condição}"</strong>
        </p>
        <p>
            E a depender da condição, aquela classe será aplicada ou não
        </p>
        <hr />
        <h3 :class="{ 'vermelhinha': num === 1, 'marrom': num === 2, 'azulona': num === 3 }">
            Botões abaixo mudam a classe deste texto
        </h3>
        <div class="line">
            <button @click="changeNum(1)" class="button">
                Vermelhinha
            </button>
            <button @click="changeNum(2)" class="button">
                Marrom normal
            </button>
            <button @click="changeNum(3)" class="button">
                Azulona
            </button>
            <button @click="changeNum(0)" class="button">
                Nenhuma
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassesVue",
        data() {
            return {
                num: 0
            }
        },
        methods: {
            changeNum(now) {
                this.num = now
            }
        }
    }
</script>

<style scoled>
    .vermelhinha {
        color: red;
        font-size: small;
    }

    .azulona {
        color: blue;
        font-size: xx-large;
    }

    .marrom {
        color: brown;
    }
</style>
