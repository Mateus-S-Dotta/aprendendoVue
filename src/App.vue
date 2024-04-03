<template>
	<PageComponent />
</template>

<script>
	import PageComponent from './components/PageComponent.vue';

	export default {
		components: {
			PageComponent
		},
		name: "App",
	};
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}

	.divExplanation {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.button {
        cursor: pointer;
        padding: 8px;
        box-shadow: 0 1px 4px 0 #737373
    }

	.line {
        display: flex;
        align-items: center;
        gap: 8px;
		overflow-x: auto;
    }

	input {
		padding: 8px;
	}
</style>
