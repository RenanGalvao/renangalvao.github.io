<script>
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	import Swiper from 'swiper'
	import { Pagination, Autoplay } from 'swiper/modules'
	import 'swiper/css'
	import 'swiper/css/pagination'

	import Item from './item.svelte'

	const portfolio = [
		{
			title: 'Projeto "Um Por Todos! Todos Por Um"',
			subTitle: 'Institucional',
			description: `Site feito para divulgação e prestação de contas do projeto “Um por todos! Todos por um”. Dividido em 4
				módulos, a aplicação é escrita em NodeJS e conteinerizada utilizando Docker, disponibilizada através de
				uma máquina virtual gerenciada por mim. Importante notar que anteriormente o projeto estava todo em PHP
				sem nenhum tipo de controle de versificação e gerenciamento de pacotes.`,
			image: `${base}/images/projeto-logo.webp`,
			codeHref: 'https://github.com/ProjetoUmPorTodosTodosPorUm',
			viewHref: 'https://projetoumportodostodosporum.org'
		},
		{
			title: 'Wilmamachado.com.br',
			subTitle: 'Página Pessoal',
			description: `	Site para divulgação e venda das obras da cantora Wilma Machado. As principais tecnologias utilizadas
				foram Nginx, Docker, NodeJS, Sveltekit e Postgresql. Possui CMS, bash scripts para automatização de
				algumas tarefas e CI configurado no Github, hospedado em um VPS.`,
			image: `${base}/images/wilma-landing.webp`,
			codeHref: '',
			viewHref: 'https://wilmamachado.com.br'
		}
	]

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Pagination, Autoplay],
			loop: true,
			autoplay: {
				delay: 5000,
				pauseOnMouseEnter: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			}
		})
	})
</script>

<section id="portfolio" class="clear-both container mx-auto md:w-4/5">
	<h1 class="text-4xl mb-4 text-center">Portfólio</h1>

	<!-- Slider main container -->
	<div class="swiper">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			{#each portfolio as item}
				<div class="swiper-slide">
					<Item {...item} />
				</div>
			{/each}
		</div>
		<div class="swiper-pagination"></div>
	</div>
</section>

<style global lang="postcss">
	:root {
		--swiper-theme-color: #000;
	}
	.swiper-pagination {
		position: relative;
	}
</style>
