<script>
  export let client, server, jsonata
  $: data = client ? client.data : undefined
  import App from '\/Users\/Домашний\/.node-red\/projects\/MyNode-Red\/pekfinger-red\/layouts\/App.svelte'
  import Menu from '\/Users\/Домашний\/.node-red\/projects\/MyNode-Red\/pekfinger-red\/components\/Menu.svelte'

  let slot1_selector = 'msg.payload'
  $: slot1_props = jsonata(slot1_selector).evaluate({msg: {payload: client ? client.data : undefined}})

</script>
<svelte:head>
  <title>{client.title}</title>
  <link rel="stylesheet" href="/Page_bbb0b9990740a8/bundle.css">
  <link rel="icon" href="/icons/favicon.ico">
  <link rel="manifest" href="/manifest.json">
  <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png">
  <meta name="theme-color" content="#ff3e00">
</svelte:head>
<App bind:client={client} bind:server={server} bind:data={data}>
  {#if slot1_props && slot1_props.hasOwnProperty("#each") && Array.isArray(slot1_props["#each"])}
     {#each slot1_props["#each"] as propObj (propObj.id)}
       <Menu bind:client={client} bind:server={server} bind:data={data} selector={slot1_selector} {...propObj}/>
     {/each}
  {:else}
     <Menu bind:client={client} bind:server={server} bind:data={data} selector={slot1_selector} {...slot1_props}/>
  {/if}


</App>
