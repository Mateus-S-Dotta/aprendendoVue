<template>
    <div class="divExplanation">
        <h1>Pokemon</h1>
        <p>Agora você verá algo que ninguém nunca fez: <strong>Uma Pokedex</strong></p>
        <p><strong>Observação:</strong> que trabalheira pra deixar esse quadrado perfeitinho no centro, mds</p>
        <hr />
        <h1>Interações</h1>
        <h3 @click="console.log(this.selected)">Clique em qualquer lugar na pokedex para interagir</h3>
        <div class="center">
            <img ref="image" @click="ativarVisualicao" @load="getImageSize" :src="imgPokedex" />
            <div v-if="version" :style="boxStyle">
                <div v-if="pokemons[selected - 1]" class="screenPart texts">
                    <h1 :style="{ fontSize: imageSize.height / 15.5 + 'px' }">{{ pokemons[selected - 1].name ?
            pokemons[selected - 1].name : '' }}</h1>
                </div>
                <div class="screenPart mainText texts">
                    <h1 :style="{ fontSize: imageSize.height / 15.5 + 'px' }">{{ pokemons[selected].name ?
            pokemons[selected].name : '' }}</h1>
                </div>
                <div v-if="pokemons[selected + 1]" class="screenPart lastText texts">
                    <h1 :style="{ fontSize: imageSize.height / 15.5 + 'px' }">{{ pokemons[selected + 1].name ?
            pokemons[selected + 1].name : '' }}</h1>
                </div>
            </div>
            <div v-else :style="noBackgroundBoxStyle">
                <img class="imgSprite" ref="pokemon sprite" :src="pokemon.sprites.front_default" />
                <h2 :style="{ fontSize: imageSize.height / 20 + 'px', textTransform: 'capitalize' }">{{ pokemon.name }}
                </h2>
            </div>
            <div :style="{
            ...pokedexBotao,
            marginRight: (imageSize.width / 1.75) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handleVersion">
                <h1 :style="{ opacity: visualizador }" class="text">1</h1>
            </div>
            <div :style="{
            ...pokedexBotao,
            marginRight: (imageSize.width / 28) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handleVersion">
                <h1 :style="{ opacity: visualizador }" class="text">1</h1>
            </div>
            <div :style="{
            ...setasV,
            bottom: (this.imageSize.height / 5) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handlePokemon(false)">
                <h2 :style="{ opacity: visualizador }" class="text">2</h2>
            </div>
            <div :style="{
            ...setasH,
            marginLeft: (this.imageSize.height / 3.55) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handlePokemon(false)">
                <h2 :style="{ opacity: visualizador }" class="text">2</h2>
            </div>
            <div :style="{
            ...setasH,
            marginLeft: (this.imageSize.height / 2.05) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handlePokemon(true)">
                <h2 :style="{ opacity: visualizador }" class="text">3</h2>
            </div>
            <div :style="{
            ...setasV,
            bottom: (this.imageSize.height / 9.8) + 'px',
            backgroundColor: `rgb(100, 100, 255, ${visualizador})`,
        }" @click="handlePokemon(true)">
                <h2 :style="{ opacity: visualizador }" class="text">3</h2>
            </div>
            <div class="instruções" :style="{ opacity: visualizador * 1.5 }">
                <div class="line">
                    <h3>1:</h3>
                    <p>Alterar Modo</p>
                </div>
                <div class="line">
                    <h3>2:</h3>
                    <p>Cima</p>
                </div>
                <div class="line">
                    <h3>3:</h3>
                    <p>Baixo</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pokedex from '../assets/pokedex.png';
    import axios from 'axios';

    export default {
        name: "PokemonVue",
        data() {
            return {
                visualizador: 0,
                selected: 0,
                offset: 0,
                pokemons: [{}],
                pokemon: { name: '', sprites: { front_default: '' } },
                imgPokedex: pokedex,
                imageSize: { width: 0, height: 0 },
                boxStyle: {},
                pokedexBotao: {},
                noBackgroundBoxStyle: {},
                intervalo: 0,
                setasH: {},
                setasV: {},
                version: true
            }
        },
        created() {
            this.callPokemons(true);
        },
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
                }, 200);
            },
            handlePokemon(more) {
                if (more) {
                    if (!this.version) {
                        this.selected = this.selected + 1;
                        return this.callPokemon();
                    }
                    if (!this.pokemons[this.selected + 1]) {
                        return
                    }
                    this.selected = this.selected + 1;
                    if ((this.selected === 7 && this.pokemons.length === 10) || this.selected === 17) {
                        this.offset = this.offset + 10;
                        this.callPokemons(this.selected);
                    }
                } else if (this.selected > 0) {
                    if (!this.version && this.selected !== 1) {
                        this.selected = this.selected - 1;
                        return this.callPokemon();
                    }
                    this.selected = this.selected - 1;
                    if (this.selected === 2 && this.pokemons[this.selected].name !== 'venusaur') {
                        this.offset = this.offset - 10;
                        this.callPokemons(this.selected);
                    }
                }
            },
            callPokemons: async function (initial, nowOffset) {
                if (!this.version) {
                    return
                }

                try {
                    const net = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${nowOffset ? 10 : 20}&offset=${nowOffset ? nowOffset : this.offset}`);
                    if (initial === true) {
                        this.pokemons = [...net.data.results];
                    } else if (initial === 17) {
                        this.pokemons.splice(0, 10);
                        this.pokemons = [...this.pokemons, ...net.data.results];
                        this.selected = 7;
                    } else if (initial === 7) {
                        this.pokemons = [...this.pokemons, ...net.data.results];
                    } else if (initial === 2) {
                        this.pokemons.splice(-10, 10);
                        this.pokemons = [...net.data.results, ...this.pokemons];
                        this.selected = 12;
                    }
                } catch (error) {
                    console.log(error)
                }
            },
            callPokemon: async function (link) {
                try {
                    const net = await axios.get(link ? link : `https://pokeapi.co/api/v2/pokemon/${this.selected}/`);
                    const num = link ? link.split('/')[6] : `https://pokeapi.co/api/v2/pokemon/${this.selected}/`.split('/')[6];
                    this.pokemon = net.data;
                    if (link) {
                        this.selected = Number(num);
                    }
                } catch (error) {
                    console.log(error)
                }
            },
            handleVersion() {
                this.version = !this.version;
                if (this.version === false) {
                    this.callPokemon(this.pokemons[this.selected].url);
                } else {
                    const num = this.selected % 20;
                    let nowOffset = this.selected % 100 - this.selected % 10;
                    nowOffset = nowOffset - this.offset;
                    if (num < 3) {
                        nowOffset = nowOffset + 10;
                        console.log(nowOffset)
                        this.selected = num - 1 + 10;
                    } else if (num > 16) {
                        nowOffset = nowOffset - 10;
                        console.log(nowOffset)
                        this.selected = num - 1 - 10;
                    } else {
                        this.selected = num - 1;
                    }
                    console.log(nowOffset)
                    this.callPokemons(true, nowOffset)
                    this.offset = nowOffset;
                    this.pokemon = { name: '', sprites: { front_default: '' } };
                }
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
                        top: '24.5%',
                        marginLeft: this.imageSize.width / 10.5 + 'px',
                        backgroundColor: '#fff',
                        boxShadow: 'inset 1px 1px 10px rgba(0, 0, 0, 0.5)',
                    };
                    this.pokedexBotao = {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: (this.imageSize.height / 11) + 'px',
                        width: (this.imageSize.height / 11) + 'px',
                        bottom: '12.1%',
                        position: 'absolute',
                        borderRadius: '16px',
                        cursor: 'pointer'
                    };
                    this.setasH = {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        height: (this.imageSize.height / 18) + 'px',
                        width: (this.imageSize.width / 16) + 'px',
                        bottom: (this.imageSize.height / 6.95) + 'px',
                        cursor: 'pointer'
                    };
                    this.setasV = {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        height: (this.imageSize.width / 16) + 'px',
                        width: (this.imageSize.height / 18) + 'px',
                        marginLeft: (this.imageSize.height / 2.6) + 'px',
                        cursor: 'pointer',
                    };
                    this.noBackgroundBoxStyle = {
                        height: (this.imageSize.height / 2.35) + 'px',
                        width: (this.imageSize.height / 2.35) + 'px',
                        position: 'absolute',
                        top: '24.5%',
                        marginLeft: this.imageSize.width / 10.5 + 'px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    };
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
        margin-bottom: 64px;
    }

    img {
        height: 100%;
        width: calc(100vw - 34px - 64px);
        height: auto;
        display: block;
        max-height: 90vh;
        object-fit: contain;
    }

    .text {
        color: black;
        text-align: center;
    }

    .instruções {
        display: flex;
        flex-basis: 120px;
        justify-content: center;
        flex-wrap: wrap;
        gap: 16px;
        position: absolute;
        top: 105%;
    }

    .screenPart {
        height: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .texts {
        position: absolute;
        left: 50%;
        right: 50%;
    }

    .mainText {
        color: red;
        top: 33.333%;
        text-decoration: underline;
    }

    .lastText {
        top: 66.666%
    }

    .imgSprite {
        width: 80%;
        height: 80%;
    }
</style>