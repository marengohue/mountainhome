<script lang="ts">
    import type { ICard } from "../types/ICard.ts";
    import Card from "../components/Card.svelte"

    const rocks: ICard = {
        "title": "Mossy Rocks",
        "type": "Treasure - Rocks",
        "artUri": "/art/rocks-1.png",
        "layout": "bigArt",
        "rarity": "normal",
        "flavourText": "I met a friendly mermaid Dasha who traded me some mossy wet rocks - Ewww.\n- Corn The Barbarian",
        "value": {
            "resource": "rock",
            "value": 1
        }
    };

    const dwarfFortress: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "mainText": "Place the dwarf fortress blueprint next to the exploration pile - anyone can construct it and it belongs to no one. If you explore to find a dwarf, you may place them in the fortress. If the fortress is exhausted, the dwarf flees back into the exploration pile.",
        "flavourText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.W",
        "value": {
            "resource": "vp",
            "value": 4
        }
    };

    
    const dwarfFortressNoMain: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "flavourText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": {
            "resource": "vp",
            "value": 4
        }
    };

    const dwarfFortressNoFlavour: ICard = {
        "title": "Dwarf Fortress",
        "type": "Building - Unique",
        "artUri": "/art/dwarf-fortress.png",
        "layout": "normal",
        "rarity": "normal",
        "mainText": "Some dwarves are just too powerful to be allowed to roam the lands of Rotheim. Thankfully, exile in a lavish fort is not such a terrible fate.",
        "value": {
            "resource": "vp",
            "value": 4
        }
    };
</script>

<Card cardDefinition={rocks} />
<Card cardDefinition={dwarfFortress} />
<Card cardDefinition={dwarfFortressNoMain} />
<Card cardDefinition={dwarfFortressNoFlavour} />