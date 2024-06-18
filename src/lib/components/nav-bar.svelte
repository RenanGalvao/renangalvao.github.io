<script>
	import '$postcss/nav-bar.css'
	import { base } from '$app/paths'
	import { Icon } from 'svelte-icons-pack'
	import { TrOutlineTerminal, TrOutlineMenu2 } from 'svelte-icons-pack/tr'
	import { FiX } from 'svelte-icons-pack/fi'

	let isMobileMenuOpen = false
	let innerWidth = 0

	function openMobileMenu() {
		isMobileMenuOpen = true
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false
	}

	// make sure mobile menu is closed when button is hidden
	$: innerWidth >= 768, isMobileMenuOpen = false
</script>

<svelte:window bind:innerWidth={innerWidth}/>

<nav class="container flex justify-between items-center  w-full">
	<a href="{base}/" class="flex items-center text-xl h-8"><Icon src={TrOutlineTerminal} size="1.6rem" />
		<span class="leading-tight">Renan Galvão</span>
	</a>

	<button on:click={openMobileMenu} class="lg:hidden">
		<Icon src={TrOutlineMenu2} size="2rem" />
	</button>

	<ul class="hidden lg:flex text-lg">
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

<div 
	id="mobile-menu" 
	class="z-10 fixed h-full w-full top-0 p-8 flex flex-col items-center bg-white"
	class:open={isMobileMenuOpen}
	>

	<button on:click={closeMobileMenu} class="w-full">
		<Icon src={FiX} size="2rem"/>
	</button>

	<ul class="flex flex-col text-xl mt-12">
		<li class="mb-4">
			<a href="{base}#sobre" on:click={closeMobileMenu}>Sobre</a>
		</li>
        <li class="mb-4">
			<a href="{base}#habilidades" on:click={closeMobileMenu}>Habilidades</a>
		</li>
        <li class="mb-4">
			<a href="{base}#portfolio" on:click={closeMobileMenu}>Portfólio</a>
		</li>
	</ul>
</div>
