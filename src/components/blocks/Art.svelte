<script lang="ts">
    export let uri: string;
    export let style: "big" | "normal";
</script>

<div class="art" style='--uri: url("{uri}"); --size: {style == "big" ? 290 : 190}px' />

<style lang="css">
    .art {
        background: var(--uri);
        position: relative;
        background-repeat: round;
        height: var(--size);
    }
</style>
