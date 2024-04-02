<template>
    <div class="divExplanation">
        <h1>Eventos</h1>
        <p> Para adicionar eventos no Vue, basta você adcionar <strong>@evento="função"</strong> na tag que deseja </p>
        <p> A função fica dentro de um objeto no export do script chamada "methods". Assim: </p>
        <p> <strong> {{ 'methods: {' }} </strong> </p>
        <p> <strong> {{ '&nbsp;&nbsp;metodo() {' }} </strong>
        </p>
        <p> <strong> {{ "&nbsp;&nbsp;&nbsp;&nbsp;codigo do metodo" }} </strong> </p>
        <p> <strong> {{ '&nbsp;&nbsp;}' }} </strong> </p>
        <p> <strong> {{ '}' }} </strong> </p>
        <hr />
        <h1>Interações</h1>
        <h2> Evento de "Você não me pega" </h2>
        <p> Os fracos chamam de MouseEnter ou Click </p>
        <div>
            <div @click="mudarPosicao" @mouseenter="mudarPosicao"
                :style="{ ...impegavel, marginLeft: `${positionLeft * 26.25}%` }">
                <strong class="branco">
                    {{ first ? 'Fugi de você' : 'Não me pega!' }}
                </strong>
            </div>
        </div>
        <div @click="verPosicao($event)" class="grande">
            <p class="branco"> {{ x === 0 ? 'Click e Veja!' : `X: ${x}px, Y: ${y}px` }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventosVue",
        data() {
            return {
                positionLeft: 0,
                impegavel: {
                    width: '21.25%',
                    padding: '8px',
                    backgroundColor: 'blue',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    border: '3px #000 solid',
                    borderRadius: '8px'
                },
                x: 0,
                y: 0,
                first: false
            }
        },
        methods: {
            mudarPosicao() {
                this.first = true
                if (this.positionLeft === 3) {
                    this.positionLeft = 0
                } else {
                    this.positionLeft++
                }
            },
            verPosicao(e) {
                this.x = e.x;
                this.y = e.y;
            }
        }
    }
</script>
<style scoped>
    .branco {
        color: white;
    }

    .grande {
        height: 200px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 32px;
    }
</style>