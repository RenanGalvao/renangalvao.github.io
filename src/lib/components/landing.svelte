<script>
	import '$postcss/landing.css'
	import { Icon } from 'svelte-icons-pack'
	import { SiGithub, SiGmail, SiWhatsapp } from 'svelte-icons-pack/si'
	import { IoLocationOutline } from 'svelte-icons-pack/io'
	import { base } from '$app/paths'
</script>

<main class="container w-full h-[calc(100vh-6rem)] mt-12 flex justify-center">
	<div class="w-2/5 self-center">
		<span class="flex items-center mb-1"><Icon src={IoLocationOutline} className="icon" /> Rio de Janeiro, RJ</span>
		<h1 class="text-6xl mb-1">Olá,<br/> eu sou o Renan</h1>
		<p class="text-justify">
			Sou desenvolvedor backend com proeficiência em Nodejs, estudo desenvolvimento web há mais de 2 anos e sou
			entusiasta da programação. Nasci em São Paulo, tenho 29 anos e aprendi algumas tecnologias
			do conforto da minha casa. Apesar de também saber um pouco de frontend o meu foco é no back.
		</p>
		<ul class="mt-4 flex flex-col">
			<li>
				<a href="https://github.com/renanGalvao" target="_blank" rel="noreferrer" class="flex items-center">
					<Icon src={SiGithub} className="icon"/>Github
				</a>
			</li>
			<li>
				<a href="https://wa.me/5521965286094?text={encodeURI('Olá, Renan!')}" target="_blank" rel="noreferrer" class="flex items-center">
					<Icon src={SiWhatsapp} className="icon" />(21) 96528-6094
				</a>
			</li>
			<li>
				<a href="mailto:renan.m.galvao@gmail.com" target="_blank" rel="noreferrer" class="flex items-center">
					<Icon src={SiGmail} className="icon" />renan.m.galvao@gmail.com
				</a>
			</li>
		</ul>
	</div>

	<div class="w-1/2 flex justify-center items-center">
        <img src="{base}/images/pic.jpg" alt="Foto do autor" class="h-[calc(100%-10%)]">
    </div>
</main>
