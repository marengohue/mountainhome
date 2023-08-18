<script lang="ts">
    import type { ICard } from "../../types/ICard";
    import { hasValue } from "../../types/Value";
    import { hasCost } from "../../types/Cost";

    import CostTrack from "../blocks/CostTrack.svelte";
    import ValueBox from "../blocks/ValueBox.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import Art from "../blocks/Art.svelte";

    export let cardDefinition: ICard;
</script>

{#if hasValue(cardDefinition)}
    <ValueBox value={cardDefinition.value} />
{/if}

{#if hasCost(cardDefinition)}
    <CostTrack cost={cardDefinition.cost} />
{/if}

<Art uri={cardDefinition.artUri} />
<CardTitle
    title={cardDefinition.title}
    rarity={cardDefinition.rarity}
/>
<TextBox
    mainText={cardDefinition.mainText}
    flavourText={cardDefinition.flavourText}
    cardType={cardDefinition.type}
/>

<style lang="css">
    .art {
        position: relative;
        background: url('/art/rocks-1.png');
        background-repeat: round;
        height: 190px;
    }
</style>