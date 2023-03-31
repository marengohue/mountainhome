<script lang="ts">
    const rocks: ICard = {
        "name": "Mossy Rocks",
        "type": "Treasure - Rocks",
        "layout": "resource",
        "rarity": "normal",
        "flavourText": "I met a friendly mermaid Dasha who traded me some mossy wet rocks - Ewww.\n- Corn The Barbarian",
        "value": {
            "resource": "rock",
            "value": 1
        }
    };
    import Card from "../components/Card.svelte"
</script>

<Card cardDefinition={rocks} />