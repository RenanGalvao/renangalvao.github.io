<script>
	export let image
	export let title
	export let subTitle
	export let description
	export let codeHref
	export let viewHref
</script>

<div class="card flex">
	<div class="image w-0 md:w-3/12">
		<a class="flex justify-center items-center" href={viewHref ? viewHref : codeHref} target="_blank">
			<img class="min-h-[300px] max-h-[300px] w-auto" src={image} alt={title} />
		</a>
	</div>
	<div class="body w-full md:w-9/12 pl-4">
		<h2 class="text-2xl">
			<a href={viewHref ? viewHref : codeHref} target="_blank">{title}</a>
		</h2>
		<h3 class="text-xl opacity-70 mb-2">{subTitle}</h3>
		<p class="indent-4 text-justify">
			{description}
		</p>

		<div class="footer mt-4 flex">
            {#if codeHref}
			    <a class="border-[.2rem] border-solid border-current py-2 px-6 mr-4" href={codeHref} target="_blank">Ver Código</a>
            {/if}
			<a class="border-[.2rem] border-solid border-black bg-black text-white py-2 px-6" href={viewHref} target="_blank">Ver Online</a>
		</div>
	</div>
</div>
