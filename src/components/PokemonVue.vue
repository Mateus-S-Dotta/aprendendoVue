<template>
    <div class="divExplanation">
        <h1>Pokemon</h1>
        <p>Agora você verá algo que nonguém nunca fez: <strong>Uma Pokedex</strong></p>
        <p><strong>Observação:</strong> que trabalheira pra deixar esse quadrado perfeitinho no centro, mds</p>
        <div class="center">
            <img ref="image" @click="ativarVisualicao" @load="getImageSize" :src="imgPokedex" />
            <div class="tela" :style="boxStyle">
            </div>
            <div :style="{
                    ...pokedexBotao,
                    marginRight: (imageSize.width / 1.75) + 'px',
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            >
            </div>
            <div :style="{
                    ...pokedexBotao, 
                    marginRight: (imageSize.width / 28) + 'px', 
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            >
            </div>
            <div :style="{
                    ...setasH,
                    marginLeft: (this.imageSize.height / 2.05) + 'px',
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            >
            </div>
            <div :style="{
                    ...setasH,
                    marginLeft: (this.imageSize.height / 3.55) + 'px',
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            ></div>
            <div :style="{
                    ...setasV,
                    bottom: (this.imageSize.height / 9.8) + 'px',
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            >
            </div>
            <div :style="{
                    ...setasV,
                    bottom: (this.imageSize.height / 5) + 'px',
                    backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
                }"
            >
            </div>
        </div>
    </div>
</template>

<script>
    import pokedex from '../assets/pokedex.png'
    // import axios from 'axios';

    export default {
        name: "PokemonVue",
        data() {
            return {
                visualizador: 0,
                limit: 10,
                offset: 0,
                pokemon: '',
                imgPokedex: pokedex,
                imageSize: { width: 0, height: 0 },
                boxStyle: {},
                pokedexBotao: {},
                intervalo: 0,
                setasH: {},
                setasV: {}
            }
        },
        // created: async function () {
        //     try {
        //         const dados = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`);
        //         const pokemon1 = await axios.get(dados.data.results[0].url);
        //         this.pokemon = pokemon1.data.sprites.front_default
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
        methods: {
            getImageSize() {
                const img = this.$refs.image;
                const rect = img.getBoundingClientRect();
                this.imageSize = {
                    width: rect.height / 1.5,
                    height: rect.height
                };
            },
            ativarVisualicao() {
                clearInterval(this.intervalo);
                this.visualizador = 0.7;
                this.intervalo = setInterval(() => {
                    this.visualizador = this.visualizador - 0.05
                    if (this.visualizador <= 0) {
                        this.visualizador = 0;
                        clearInterval(this.intervalo);
                    }
                }, 100);
            }
        },
        mounted() {
            this.getImageSize();
            window.addEventListener('resize', this.getImageSize);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.getImageSize);
        },
        watch: {
            imageSize: {
                handler() {
                    this.boxStyle = {
                        height: (this.imageSize.height / 2.35) + 'px',
                        width: (this.imageSize.height / 2.35) + 'px',
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        top: '24.5%',
                        marginLeft: this.imageSize.width / 10.5 + 'px',
                    };
                    this.pokedexBotao = {
                        height: (this.imageSize.height / 11) + 'px',
                        width: (this.imageSize.height / 11) + 'px',
                        bottom: '12.1%',
                        position: 'absolute',
                        borderRadius: '16px',
                        cursor: 'pointer'
                    };
                    this.setasH = {
                        position: 'absolute',
                        height: (this.imageSize.height / 18) + 'px',
                        width: (this.imageSize.width / 16) + 'px',
                        bottom: (this.imageSize.height / 6.95) + 'px',
                        cursor: 'pointer'
                    };
                    this.setasV = {
                        position: 'absolute',
                        height: (this.imageSize.width / 16) + 'px',
                        width: (this.imageSize.height / 18) + 'px',
                        marginLeft: (this.imageSize.height / 2.6) + 'px',
                        cursor: 'pointer'
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 32px;
        position: relative;
    }

    img {
        height: 100%;
        width: calc(100vw - 34px - 64px);
        height: auto;
        display: block;
        max-height: 90vh;
        object-fit: contain;
    }
</style>