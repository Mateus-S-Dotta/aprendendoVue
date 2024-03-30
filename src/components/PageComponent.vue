<template>
	<h1 class="spacing">Minhas anotações de estudos do VUE.JS</h1>
	<h2 class="spacing">
		Nem todos os detalhes serão explicados pois já utilizo React
	</h2>
	<div class="content">
		<div class="table">
			<div class="header">
				<template v-for="(text, index) in titleTexts" :key="index">
					<TitleButton @changeShow="changeShow" :text="text" :index="index"
						:exist="(index + 1) !== titleTexts.length" />
				</template>
			</div>
			<DadosVue v-if="show === 0" />
			<InputsVue v-else-if="show === 1" />
			<IfElse v-else-if="show === 2" />
			<MapeamentoVue v-else-if="show === 3" />
			<ClassesVue v-else-if="show === 4" />
			<EventosVue v-else-if="show === 5" />
		</div>
	</div>
</template>
<script>
	import ClassesVue from './ClassesVue.vue';
	import DadosVue from './DadosVue.vue';
	import EventosVue from './EventosVue.vue';
	import IfElse from './IfElse.vue';
	import InputsVue from './InputsVue.vue';
	import MapeamentoVue from './MapeamentoVue.vue';
	import TitleButton from './TitleButton.vue';

	export default {
		name: "PageComponent",
		components: {
			TitleButton,
			DadosVue,
			InputsVue,
			IfElse,
			MapeamentoVue,
			ClassesVue,
			EventosVue
		},
		data() {
			return {
				titleTexts: ['Dados', 'Inputs', 'If Else', 'Mapeamentos', 'Classes', 'Eventos'],
				show: 0,
			};
		},
		methods: {
			changeShow(num) {
				this.show = num;
			}
		}
	};
</script>

<style scoped>
	.spacing {
		text-align: center;
		padding-bottom: 8px;
	}

	.content {
		display: flex;
		justify-content: center;
		border: 1px #000 solid;
		border-radius: 32px;
		padding: 32px;
		margin: 16px;
		box-shadow: 0 4px 16px 0 #414141
	}

	.table {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
		width: 100%;
	}

	.header {
		display: flex;
		justify-content: space-between;
		gap: 8px;
		overflow-x: auto;
	}
</style>
