<script lang="ts">
    import type { IValue } from "../../types/Value.ts";
    export let value: IValue;
    export let style: "large" | "small" = "small";

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

    function getBoxSize() : number {
        return style === "large"
            ? 42
            : 22;
    }

    function getIconSize() : number {
        return style === "large"
            ? 30
            : 16;
    }

</script>

<div class="box" style="--box-size: {getBoxSize()}px; --icon-size: {getIconSize()}px">
    <div class="icon" style="--icon: url('{getIcon(value)}')"/>
    <span class="value" style="--top: {style == "large" ? 0 : -4}px; --right: {style == "large" ? 4 : 0}px;">{value.value}</span>
</div>

<style lang="css">
    .box {
        position: relative;
        width: var(--box-size);
        height: var(--box-size);
        display: inline-block;
    }
    .icon {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: var(--icon-size);
        height: var(--icon-size);
        display: inline-block;
        background: var(--icon) no-repeat center;
        background-size: contain;
    }

    .value {
        font-family: 'Farsan';
        font-size: 14px;
        font-weight: 700;
        position: absolute;
        right: var(--right);
        top: var(--top);
    }
</style>