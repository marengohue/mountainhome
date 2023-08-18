<script lang="ts">
    import Start from "./cost/start.svg?raw"
    import Link from "./cost/link.svg?raw"
    import End from "./cost/end.svg?raw"

    import type { IValue } from "../../types/Value";
    import Value from "./Value.svelte";

    export let costBlock: IValue[];
    export let type: "start" | "link" | "end";
</script>

<div class="box">
    <div class="block-background">
        {#if type === "start"}
            {@html Start}
        {:else if type === "link"}
            {@html Link}
        {:else}
            {@html End}
        {/if}
    </div>
    {#each costBlock as element}
        <Value value={element} style="small" />
    {/each}
</div>


<style lang="css">
    .box {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 53px;
        height: 23px;
    }
    
    .block-background {
        position: absolute;
    }
    
    .cost-block.start {
        background: linear-gradient(216deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.08) 44.06%, rgba(0, 0, 0, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%), #DFE4EA;
    }
    .cost-block.link {
        background: linear-gradient(216deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.08) 44.06%, rgba(0, 0, 0, 0.40) 99.99%, rgba(0, 0, 0, 0.00) 100%), #DFE4EA;
    }
    .cost-block.end {
        background: linear-gradient(45deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), #DFE4EA;
    }
</style>