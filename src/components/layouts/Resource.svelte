<script lang="ts">
    import Art from "../blocks/Art.svelte";
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";

    export let cardDefinition: ICard;
    console.log(cardDefinition);
</script>

<Art uri={cardDefinition.artUri}/>
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