<script>
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	import Swiper from 'swiper'
	import { Pagination, Autoplay } from 'swiper/modules'
	import 'swiper/css'
	import 'swiper/css/pagination'

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
			<div class="swiper-slide">
				<!-- Projeto -->
				<div class="card flex">
					<div class="image w-3/12">
						<a
							class="flex justify-center items-center h-full"
							href="https://projetoumportodostodosporum.org"
							target="_blank"
						>
							<img class="h-full w-auto" src="{base}/images/projeto-logo.webp" alt="Logo Projeto" />
						</a>
					</div>
					<div class="body w-9/12 pl-4">
						<h2 class="text-2xl">
							<a href="https://projetoumportodostodosporum.org" target="_blank">Projeto "Um Por Todos! Todos Por Um"</a>
						</h2>
						<h3 class="text-xl opacity-70 mb-2">Institucional</h3>
						<p class="indent-2 text-justify">
							Site feito para divulgação e prestação de contas do projeto “Um por todos! Todos por um”. Dividido em 4
							módulos, a aplicação é escrita em NodeJS e conteinerizada utilizando Docker, disponibilizada através de
							uma máquina virtual gerenciada por mim. Importante notar que anteriormente o projeto estava todo em PHP
							sem nenhum tipo de controle de versificação e gerenciamento de pacotes.
						</p>

						<div class="footer mt-4 flex">
							<a
								class="border-[.2rem] border-solid border-current py-2 px-6 mr-4"
								href="https://github.com/ProjetoUmPorTodosTodosPorUm"
								target="_blank">Ver Código</a
							>
							<a
								class="border-[.2rem] border-solid border-black bg-black text-white py-2 px-6"
								href="https://projetoumportodostodosporum.org"
								target="_blank">Ver Online</a
							>
						</div>
					</div>
				</div>
				<!-- Projeto -->
			</div>
			<div class="swiper-slide">
				<!-- Wilma -->
				<div class="card flex">
					<div class="image w-3/12">
						<a class="flex justify-center items-center" href="https://wilmamachado.com.br" target="_blank">
							<img class="w-9/12" src="{base}/images/wilma-landing.webp" alt="Logo Projeto" />
						</a>
					</div>
					<div class="body w-9/12 pl-4">
						<h2 class="text-2xl">
							<a href="https://wilmamachado.com.br" target="_blank">Wilmamachado.com.br</a>
						</h2>
						<h3 class="text-xl opacity-70 mb-2">Página Pessoal</h3>
						<p class="indent-2 text-justify">
							Site para divulgação e venda das obras da cantora Wilma Machado. As principais tecnologias utilizadas
							foram Nginx, Docker, NodeJS, Sveltekit e Postgresql. Possui CMS, bash scripts para automatização de
							algumas tarefas e CI configurado no Github, hospedado em um VPS.
						</p>

						<div class="footer mt-4 flex">
							<a
								class="border-[.2rem] border-solid border-black bg-black text-white py-2 px-6"
								href="https://wilmamachado.com.br"
								target="_blank">Ver Online</a
							>
						</div>
					</div>
				</div>
				<!-- Wilma -->
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</section>

<style global lang="postcss">
	:root {
    	--swiper-theme-color: #000;
	}
</style>
