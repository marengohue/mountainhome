<script lang="ts">
    const rocks: ICard = {
        "title": "Mossy Rocks",
        "type": "Treasure - Rocks",
        "artUri": "/art/rocks-1.png",
        "layout": "resource",
        "rarity": "normal",
        "flavourText": "I met a friendly mermaid Dasha who traded me some mossy wet rocks - Ewww.\n- Corn The Barbarian",
        "value": {
            "resource": "rock",
            "value": 1
        }
    };

    const brewery: ICard = {
        "title": "Stouthammer Brewery",
        "type": "Building - Basic",
        "artUri": "/art/rocks-1.png",
        "layout": "building",
        "rarity": "normal",
        "mainText": "yes",
        "flavourText": "Even more yes",
        "value": {
            "resource": "vp",
            "value": 4
        }
    };
    import Card from "../components/Card.svelte"
</script>

<Card cardDefinition={rocks} />

<Card cardDefinition={brewery} />