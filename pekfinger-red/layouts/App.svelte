<!-- Default layout -->
<!-- Component -->
<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<script>
    export let client, server
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer'
    import Button, {Label} from '@smui/button'
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list'
    import TopAppBar, {Row, Section, Title as AppTitle, FixedAdjust} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
    let drawer
    let drawerIsOpen = false
    client.menu = {
        active: undefined,
        title: undefined,
        subtitle: undefined,
        entries: undefined
    }
    function select (menuEntry) {
        client.menu.active = menuEntry.id
        if (menuEntry.action) {
            menuEntry.action(menuEntry)
        }
        if (menuEntry.url) {
            client.open(url, menuEntry.data)
        }
        drawerIsOpen = false
    }
</script>

<style>
    :global(body) {
        margin: 0;
    }
    .page-content {
        margin: 0px 16px 16px 16px;
    }
</style>

<!-- Menu drawer -->
<Drawer variant="modal" bind:this={drawer} bind:open={drawerIsOpen}>
    {#if client.menu.title || client.menu.subtitle}
        <Header>
            <slot name = "menuHeader">
                {#if client.menu.title}
                    <Title>{client.menu.title}</Title>
                {/if}
                {#if client.menu.subtitle}
                    <Subtitle>{client.menu.subtitle}</Subtitle>
                {/if}
            </slot>
        </Header>
    {/if}
    <Content>
      <List>
        <slot name=menu>
            {#if client.menu.entries}
                {#each client.menu.entries as menuEntry}
                    <Item href="javascript:void(0)" on:click={() => select(menuEntry)} activated={client.menu.active === menuEntry.id}>
                        {#if menuEntry.icon}
                            <Graphic class="material-icons" aria-hidden="true">{menuEntry.icon}</Graphic>
                        {/if}
                        <Text>{menuEntry.text}</Text>
                    </Item>
                {/each}
            {/if}
        </slot>
      </List>
    </Content>
</Drawer>
<Scrim />

<!-- App-Bar (top) -->
<TopAppBar variant="fixed" color='primary'>
    <Row>
      <Section>
        <IconButton on:click="{() => drawerIsOpen = !drawerIsOpen}" class="material-icons">menu</IconButton>
        <AppTitle>{client.title}</AppTitle>
      </Section>
    </Row>
</TopAppBar>
    
<!-- App content -->
<AppContent>

    <!-- Page Content -->
    <div use:FixedAdjust class="page-content">
        <main>
            <slot>
                <!-- Default slot -->
            </slot>
        </main>
    </div>
        
</AppContent>