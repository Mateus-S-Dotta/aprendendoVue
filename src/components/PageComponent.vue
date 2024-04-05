<template>
	<h1 class="spacing">Minhas anotações de estudos do VUE.JS</h1>
	<h2 class="spacing"> Nem todos os detalhes serão explicados pois já utilizo React</h2>
	<a href="https://github.com/Mateus-S-Dotta/aprendendoVue" target="_blank">
		<h2 class="spacing"> Link para GitHub deste projeto </h2>
	</a>
	<div class="content">
		<div class="table">
			<div class="header">
				<template v-for="(route, index) in routerArray" :key="index">
					<TitleButton v-if="route.name" @changeRoute="changeRoute" :thatRoute="thatRoute" :text="route.name"
						:route="route.path" :exist="index !== (routerArray.length - 2)" />
				</template>
			</div>
			<router-view />
		</div>
	</div>
</template>

<script>
	import { useRouter } from 'vue-router';
	import TitleButton from './TitleButton.vue';

	export default {
		name: "PageComponent",
		data() {
			return {
				router: useRouter(),
				routerArray: useRouter().getRoutes()
			}
		},
		computed: {
			thatRoute() {
				return this.$route.path.split('/')[1] ? '/' + this.$route.path.split('/')[1] : '/pokemon';
			}
		},
		components: {
			TitleButton,
		},
		methods: {
			changeRoute(route) {
				this.router.push(route)
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
