<script>
	import { base } from '$app/paths'
	import { Icon } from 'svelte-icons-pack'
	import { TrOutlineTerminal } from "svelte-icons-pack/tr";
</script>

<nav class="container flex justify-between items-center w-full h-12">
	<a href="{base}/" class="flex items-center text-lg"><Icon src={TrOutlineTerminal} size="1.125rem" /> Renan Galvão</a>

	<ul class="flex text-lg">
		<li class="mr-4">
			<a href="{base}#sobre">Sobre</a>
		</li>
        <li class="mr-4">
			<a href="{base}#habilidades">Habilidades</a>
		</li>
        <li class="mr-4">
			<a href="{base}#portfolio">Portfólio</a>
		</li>
	</ul>
</nav>
