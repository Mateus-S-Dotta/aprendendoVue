<template>
	<div class="divExplanation">
		<h1>Dados</h1>
		<p>
			Os dados no Vue ficam no export do script, em uma função chamada data.
		</p>
		<p>
			No exemplo abaixo, é possível ver dois tipos diferentes de dados: um proveniente de um input e outro sendo
			um número comum </p>
		<hr />
		<h1>Interações</h1>
		<div class="line">
			<button class="button" @click="changeNumber('less')">
				-
			</button>
			<h2>
				Numero atual é: {{ num }}
			</h2>
			<button class="button" @click="changeNumber()">
				+
			</button>
		</div>
		<div class="line">
			<input v-model="text" />
			<h2>{{ text }}</h2>
		</div>
		<p>
			Tanto o texto quanto o numero são definidos no mesmo componentes que são alterados
		</p>
		<p>
			Caso fossem componentes diferentes, a lógica para lidar com a comunicação entre eles seria um pouco mais
			complexa. Isso pode ser visto nos "eventos" </p>
		<p>
			No caso do input, ele não é alterado por meio de eventos. Veja "Inputs"
		</p>
	</div>
</template>

<script>
	export default {
		name: "DadosVue",
		data() {
			return {
				// declarados os dados
				num: 0,
				text: 'Mude o Input'
			}
		},
		methods: {
			// alteração dos dados
			changeNumber(type) {
				if (type === 'less') {
					this.num--
				} else {
					this.num++
				}
			}
		}
	};
</script>
