<template>
	<div id="app" :class="{ 'hide-menu': !isMenuVisible }">
		<Header title="Base de conhecimento" :hideToggle="hideToggle"/>
		<Menu/>
		<Content/>
		<Footer/>
	</div>
</template>

<script>
import Header from './components/template/Header';
import Menu from './components/template/Menu';
import Content from './components/template/Content';
import Footer from './components/template/Footer';
import { mapState } from 'vuex';

export default {
	name: "App",
	components: { Header, Menu, Content, Footer },
	data() {
		return {
			hideToggle: false
		}
	},
	computed: {
		...mapState(['isMenuVisible'])
	}
}
</script>

<style scoped>
	/* colors variables */
	#app {
		--color-gray: #efefef;
		--color-gray-light: #dddddd;
		--color-black-light: #333333;
		--color-white: #ffffff;

		--color-black-rgba: rgba(0, 0, 0, 0.2);

		--linear-blue: linear-gradient(to right, #1e469a, #49a7c1);
		--linear-black: linear-gradient(to right, #232526, #414345);
	}
</style>

<style>
/* base */
	* {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}

	html,
	body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#app {
		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas: "header header" "menu content" "menu footer";
	}

	#app.hide-menu {
		grid-template-areas: "header header" "content content" "footer footer";
	}
</style>