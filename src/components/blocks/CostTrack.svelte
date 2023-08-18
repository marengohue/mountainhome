<script lang="ts">
    import type { Cost } from "../../types/Cost";
    import CostBlock from "./CostBlock.svelte";

    export let cost: Cost;
</script>

<div class="box">
    {#each cost as block, blockIndex}
        {#if blockIndex == cost.length - 1}
            <CostBlock costBlock={block} type="end" />
        {:else if blockIndex == 0}
            <CostBlock costBlock={block} type="start" />
        {:else}
            <CostBlock costBlock={block} type="link" />
        {/if}
    {/each}
</div>

<style lang="css">
    .box {
        display: flex;
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 2;
    }
</style>