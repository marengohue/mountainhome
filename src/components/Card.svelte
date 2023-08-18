<script lang="ts">
    import Resource from "./layouts/Resource.svelte"
    import Building from "./layouts/Building.svelte"

    export let cardDefinition: ICard;
</script>

<div class="card">
    <div class="inner">
        {#if cardDefinition.layout === "resource"}
            <Resource cardDefinition={cardDefinition}/>
        {:else if cardDefinition.layout == "building"}
            <Building cardDefinition={cardDefinition}/>
        {/if}
    </div>
</div>

<style>
    .card {
        width: 335px;
        height: 468px;
        background: black;
        color: white;
        padding: 10px;
        color: black;
        font-family: 'Donegal One'
    }

    .inner {
        padding: 10px;
        position: relative;
        height: calc(100% - 20px);
        background: url('/art/normal-bg.png');
        background-repeat: round;
        border-radius: 15px;
    }


</style>