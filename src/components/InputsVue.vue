<template>
    <div class="divExplanation">
        <h1>Inputs</h1>
        <p>
            Aqui no Vue.Js, no caso dos Inputs, tem um detalhe legal
        </p>
        <p>
            O valor do Input pode ser atrelado a uma variável alterável através do atributo <strong>"v-model"</strong>
        </p>
        <p>
            Ao invez de ter um valor num state e uma função que altera o valor, você simplesmente coloca o
            atributo <strong>v-model="nomeDaVariável"</strong> e está pronto
        </p>
        <hr />
        <h1>Interações</h1>
        <input v-model="text" />
        <h3>{{ text }}</h3>
        <p>
            <strong>Detalhe importante:</strong> a trabalheira fica grande caso a variável esteja em outro componente em relação ao input
        </p>
        <p>
            <strong>Conclusão:</strong> sempre que possível, declare a variável no mesmo lugar em que ela será alterada </p>
    </div>
</template>

<script>
    export default {
        name: "InputsVue",
        data() {
            return {
                text: 'Teste o Input'
            }
        },
    };
</script>