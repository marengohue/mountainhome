<script lang="ts">
    import { hasValue } from "../../types/Value";
    import { hasCost } from "../../types/Cost";

    import Art from "../blocks/Art.svelte";
    import CostTrack from "../blocks/CostTrack.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import ValueBox from "../blocks/ValueBox.svelte";

    export let cardDefinition: ICard;
</script>

{#if hasValue(cardDefinition)}
    <ValueBox value={cardDefinition.value} />
{/if}

{#if hasCost(cardDefinition)}
    <CostTrack cost={cardDefinition.cost} />
{/if}

<Art uri={cardDefinition.artUri} style="extended"/>
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
    .flavour {
        height: 104px;
        font-size: 12px;
        font-family: 'Farsan';
        text-align: center;
        position: relative;
    }
    
    .flavour .text {
        margin: 0;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    

</style>