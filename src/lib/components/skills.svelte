<script>
	import '$postcss/skills.css'
	import { Icon } from 'svelte-icons-pack'
	import {
        SiGnubash,
		SiGit,
        SiDocker,
		SiNginx,
		SiPostgresql,
		SiNodedotjs,
		SiNestjs,
		SiJavascript,
        SiTypescript,
		SiPrisma,
        SiJsonwebtokens,
        SiSvelte,
        SiSass,
        SiHtml5,
        SiCss3,
        SiTailwindcss,
        SiLinux,
        SiMysql,
        SiDigitalocean,
        SiCounterstrike,
        SiGithubactions,
        SiGraphql,
        SiMongodb,
        SiReact,
        SiVuedotjs,
        SiPython,
        SiPhp
	} from 'svelte-icons-pack/si'
</script>

<section id="habilidades" class="container w-2/5 mt-12 mb-24 float-right">
	<h1 class="text-4xl mb-1">Habilidades</h1>
	<ul class="flex flex-wrap w-11/12">
		<li><Icon src={SiGit} className="icon" /></li>
		<li><Icon src={SiDocker} className="icon" /></li>
		<li><Icon src={SiNginx} className="icon" /></li>
		<li><Icon src={SiPostgresql} className="icon" /></li>
		<li><Icon src={SiNodedotjs} className="icon" /></li>
		<li><Icon src={SiNestjs} className="icon" /></li>
		<li><Icon src={SiJavascript} className="icon" /></li>
        <li><Icon src={SiTypescript} className="icon" /></li>
        <li><Icon src={SiPrisma} className="icon" /></li>
        <li><Icon src={SiJsonwebtokens} className="icon" /></li>
        <li><Icon src={SiSvelte} className="icon" /></li>
        <li><Icon src={SiSass} className="icon" /></li>
        <li><Icon src={SiHtml5} className="icon" /></li>
        <li><Icon src={SiCss3} className="icon" /></li>
        <li><Icon src={SiCounterstrike} className="icon" /></li>
	</ul>

    <h2 class="text-2xl mb-1 mt-4">Noções</h2>
    <ul class="flex flex-wrap w-11/12">
        <li><Icon src={SiDigitalocean} className="icon" /></li>
        <li><Icon src={SiLinux} className="icon" /></li>
        <li><Icon src={SiGnubash} className="icon" title="Bash Scripting" /></li>
        <li><Icon src={SiGithubactions} className="icon" /></li>
        <li><Icon src={SiPython} className="icon" /></li>
        <li><Icon src={SiPhp} className="icon" /></li>
        <li><Icon src={SiMysql} className="icon-lg" /></li>
        <li><Icon src={SiMongodb} className="icon" /></li>
        <li><Icon src={SiGraphql} className="icon" /></li>
        <li><Icon src={SiReact} className="icon" /></li>
        <li><Icon src={SiVuedotjs} className="icon" /></li>
        <li><Icon src={SiTailwindcss} className="icon" /></li>
    </ul>
</section>
