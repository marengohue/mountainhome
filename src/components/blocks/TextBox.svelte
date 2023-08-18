<script lang="ts">
    export let mainText: string | undefined;
    export let flavourText: string | undefined;
    export let cardType: string;

    let bothTextsPresent: boolean = !!mainText && !!flavourText;
</script>

<div class="box">
    {#if mainText}
        <div class="main {bothTextsPresent ? "border" : "no-border"}">{mainText}</div>
    {/if}
    
    {#if bothTextsPresent}
        <div class="type">{cardType}</div>
    {/if}
    
    {#if flavourText}
        <div class="flavour {bothTextsPresent ? "border" : "no-border"}">
            <div class="text">"{flavourText}"</div>
        </div>
    {/if}
    
    {#if !bothTextsPresent}
        <!-- When only one type of text is present (flavour or main text) card type is at the bottom -->
        <div class="type">{cardType}</div>
    {/if}
</div>

<style lang="css">
    .flavour {
        height: 104px;
        font-size: 12px;
        font-family: 'Farsan';
        text-align: center;
        position: relative;
        line-height: 14px;
        flex: 1;
        background: rgba(0, 0, 0, 0.03);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    
    .flavour .text {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 70%;
        transform: translate(-50%, -50%);
        white-space: pre-wrap;
    }
    
    .main {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-color: white;
        flex: 1.3;
        color: #000;
        font-family: Donegal One;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        padding: 10px;
        padding-bottom: 15px;
    }

    .main.border {
        border-bottom: 1px solid black;
    }

    .flavour.border {
        border-top: 1px solid black;
    }
    
    .main.no-border {
        border-radius: 15px;
        border-bottom: 1px solid black;
    }

    .flavour.no-border {
        border-radius: 15px;
    }
    
    .box {
        background: rgba(30.0, 30.0, 30.0, 0.15);
        border: 1px solid black;
        border-radius: 15px;
        margin-top: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .type {
        position: relative;
        margin: -9px auto;
        height: 15px;
        text-transform: uppercase;
        width: 180px;
        text-align: center;
        background-repeat: round;
        border: 1px solid black;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
        z-index: 1;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.0) 0%,
            rgba(0, 0, 0, 0.06) 44.06%,
            rgba(0, 0, 0, 0.30) 99.99%,
            rgba(0, 0, 0, 0.00) 100%
        ), rgba(223, 228, 234, 1);
    }
</style>