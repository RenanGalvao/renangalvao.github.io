<script>
	import { Icon } from 'svelte-icons-pack'
	import { SiGnubash, SiLinux } from 'svelte-icons-pack/si'

	export let title
	export let description
	export let language
	export let plataform
	export let features
	export let codeHref

	/** @param {string} language */
	function getLanguageIcon(language) {
		switch (language) {
			case 'bash':
				return SiGnubash
			default:
				throw `Language ${language} not defined`
		}
	}

	/** @param {string} plataform */
	function getPlataformIcon(plataform) {
		switch (plataform) {
			case 'Linux':
				return SiLinux
			default:
				throw `Plataform ${plataform} not defined`
		}
	}
</script>

<section>
	<header>
		<h1 class="text-4xl">{title}</h1>
		<div class="flex mb-2 mt-1">
			<span class="flex mr-4">Linguagem: <Icon src={getLanguageIcon(language)} title={language} className="text-2xl -mt-1" /></span>
			<span class="flex">Plataforma: <Icon src={getPlataformIcon(plataform)} title={plataform} className="text-2xl -mt-1" /></span>
		</div>
	</header>
	<div class="body">
		<p class="indent-4 text-justify">{description}</p>
		<ul class="mt-4 mb-8 list-inside list-disc">
			{#each features as feature}
				<li>{feature}</li>
			{/each}
		</ul>
		<a class="border-[.2rem] border-solid border-black bg-black text-white py-2 px-6" href={codeHref} target="_blank">Repositório</a>
	</div>
</section>
