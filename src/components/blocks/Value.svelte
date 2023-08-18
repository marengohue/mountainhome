<script lang="ts">
    import type { IValue } from "../../types/Value.ts";
    export let value: IValue;
    export let style: "big" | "small" = "small";

    const iconLookup = {
        "vp": "/icons/vp.png",
        "shinies": "/icons/shinies.png",
        "rock": "/icons/rock.png",
        "mixed": "/icons/mixed.png",
        "booze": "/icons/booze.png"
    };

    function getIcon(value: IValue): string {
        const result = iconLookup[value.resource];
        return result || "/icons/unknown.png";
    }
</script>

<div class="box" style="--size: {style === 'big' ? 30 : 17}px">
    <div class="icon" style="--icon: url('{getIcon(value)}')"/>
    <span class="value">{value.value}</span>
</div>

<style lang="css">
    .box {
        position: relative;
    }
    .icon {
        position: relative;
        left: 5px;
        top: 8px;
        width: var(--size);
        height: var(--size);
        display: inline-block;
        background: var(--icon) no-repeat center;
        background-size: contain;
    }

    .value {
        font-family: 'Farsan';
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        top: 3px;
        right: 4px;
    }
</style>