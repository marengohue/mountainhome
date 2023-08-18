<script lang="ts">
    import CardTitle from "../blocks/CardTitle.svelte";
    import TextBox from "../blocks/TextBox.svelte";
    import Art from "../blocks/Art.svelte";

    export let cardDefinition: ICard;
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
    .art {
        position: relative;
        background: url('/art/rocks-1.png');
        background-repeat: round;
        height: 290px;
    }
</style>