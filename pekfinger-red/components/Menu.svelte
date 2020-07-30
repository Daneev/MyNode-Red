<!-- Menu -->
<script>
    export let client, server, data
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list'
    client.title = 'My great App'
    client.menu.title = 'My menu'
    client.menu.subtitle = "It's the best. Believe me!"
    client.menu.entries = [
        {
            id: 'First',
            text: 'Click me. I do nothing.',
            icon: 'account_circle'
        },
        {
            id: 'Second',
            text: 'I log something onto the console.',
            icon: 'bookmark',
            action: () => console.log("Hello my friend!")
        }
    ]
    client.menu.active = 'First'
</script>