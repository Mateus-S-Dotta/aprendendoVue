<template>
    <div class="divExplanation">
        <h1>Pokemon</h1>
        <p>Agora você verá algo que nonguém nunca fez: <strong>Uma Pokedex</strong></p>
        <p><strong>Observação:</strong> que trabalheira pra deixar esse quadrado perfeitinho no centro, mds</p>
        <div class="center">
            <div>
                <img ref="image" @load="getImageSize" :src="imgPokedex" />
            </div>
            <div class="tela" :style="imgStyle">

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
                limit: 10,
                offset: 0,
                pokemon: '',
                imgPokedex: pokedex,
                imageSize: { width: 0, height: 0 },
                imgStyle: {}
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
                    width: rect.height * 1.5,
                    height: rect.height
                };
            }
        },
        watch: {
            imageSize: {
                handler() {
                    this.imgStyle = {
                        maxHeight: (this.imageSize.height / 2.35) + 'px',
                        maxWidth: (this.imageSize.height / 2.35) + 'px',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        top: '24.5%',
                        marginLeft: this.imageSize.width / 23.5 + 'px',
                    }
                },
                deep: true
            }
        }
    };
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