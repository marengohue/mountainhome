<script lang="ts">
    import Start from "./start.svg?raw"
    import Link from "./link.svg?raw"
    import End from "./end.svg?raw"

    import type { IValue } from "../../../types/Value";
    import Value from "../Value.svelte";

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
    <div class="block-foreground {type}">
        <div class="foreground-padding"/>
        {#each costBlock as element}
            <Value value={element} style="small" />
        {/each}
        <div class="foreground-padding"/>
    </div>
</div>


<style lang="css">
    .box {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 63px;
        margin-right: -10px;
        height: 25px;
    }
    
    .block-background {
        position: absolute;
        height: 25px;
    }

    .block-foreground {
        position: absolute;
        width: calc(100% - 8px);
        height: 100%;
        display: flex;
        top: 2px;
    }

    .block-foreground.link {
        width: 100%;
    }

    .block-foreground.end {
        left: 4px;
        width: calc(100% - 8px);
    }

    .block-foreground>.foreground-padding {
        flex-grow: 1;
    }
    
</style>