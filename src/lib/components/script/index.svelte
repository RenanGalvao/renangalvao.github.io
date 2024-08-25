<script>
    import Item from './item.svelte'

    const scripts = [
        {
            title: 'Backup Docker Volumes',
            description: `Script feito em bash para facilitar o backup diário de volumes do docker, bem como a restauração 
                do backup caso seja necessário. Dividido em cliente e servidor.`,
            language: 'bash',
            plataform: 'Linux',
            features: [
                'Backup diário de diversos volumes a partir de uma simples configuração',
                'Configurável para múltiplas máquinas, serviços e volumes',
                'Restauração do backup por data e serviço (limitado, leia o README)',
                'Limpeza automática dos backups antigos'
            ],
            codeHref: 'https://github.com/RenanGalvao/linux-scripts/tree/master/backup'
        }
    ]
</script>

<main class="container w-full mt-8 lg:mt-12 lg:min-h-[calc(100vh-12rem)]">
    {#each scripts as script}
        <Item {...script} />
    {/each}
</main>

