<script>
	import '$postcss/landing.css'
	import { Icon } from 'svelte-icons-pack'
	import { SiGithub, SiGmail, SiWhatsapp } from 'svelte-icons-pack/si'
	import { IoLocationOutline } from 'svelte-icons-pack/io'
	import { base } from '$app/paths'
</script>

<main class="container w-full mt-8 flex flex-col-reverse lg:mt-12 lg:h-[calc(100vh-6rem)] lg:flex-row lg:justify-around xl:justify-center">
	<div class="lg:w-2/5 lg:self-center">
		<span class="flex items-center mb-1"><Icon src={IoLocationOutline} className="icon" /> Rio de Janeiro, RJ</span>
		<h1 class="text-4xl xl:text-6xl mb-1">Olá,<br/> eu sou o Renan</h1>
		<p class="text-justify">
			Sou desenvolvedor backend com proeficiência em Nodejs, estudo desenvolvimento web há mais de 2 anos e sou
			entusiasta da programação. Nasci em São Paulo, tenho 30 anos e aprendi algumas tecnologias
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

	<div class="md:w-full md:h-[calc(500px)] md:overflow-clip lg:flex lg:h-auto lg:w-2/5 lg:justify-center lg:items-center xl:w-1/2">
        <img src="{base}/images/pic.jpg" alt="Foto do autor" class="md:w-full md:h-full md:object-cover lg:h-auto lg:w-auto">
    </div>
</main>
