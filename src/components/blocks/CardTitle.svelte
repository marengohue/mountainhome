<script lang="ts">
    import type { Rarity } from "../../types/Rarity.ts";

    export let title: string;
    export let rarity: Rarity;
</script>

{#if rarity === "normal"}
    <div class="name box">{title}</div>
{:else}
    <div class="name box rare">{title}</div>
{/if}

<style lang="css">
    .name {
        line-height: 30px;
        position: relative;
        height: 30px;
        font-size: 15px;
        font-weight: 700;
    }
    
    .box {
        background: rgba(30.0, 30.0, 30.0, 0.15);
        border: 1px solid black;
        border-radius: 15px;
        padding: 0 15px;
        margin-top: 10px;
    }
    
    .rare.box {
        border: 1px solid gold;
    }
</style>
