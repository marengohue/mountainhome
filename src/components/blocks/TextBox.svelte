<script lang="ts">
    export let mainText: string;
    export let flavourText: string;
    export let cardType: string;
    let dividerNeeded: boolean = mainText && flavourText;
</script>

<div class="box">
    {#if mainText}
        <div class="main">{mainText}</div>
    {/if}
    
    {#if dividerNeeded}
        <hr/>
    {/if}
    
    {#if flavourText}
        <div class="flavour">
            <div class="text">"{flavourText}"</div>
            
        </div>
    {/if}
    
    <div class="type">{cardType}</div>
</div>

<style lang="css">
    .flavour {
        height: 104px;
        font-size: 12px;
        font-family: 'Farsan';
        text-align: center;
        position: relative;
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
        background-color: white;
    }
    
    .box {
        background: rgba(30.0, 30.0, 30.0, 0.15);
        border: 1px solid black;
        border-radius: 15px;
        padding: 0 15px;
        margin-top: 10px;
    }
    
    .type {
        position: relative;
        margin: -10px auto;
        height: 15px;
        text-transform: uppercase;
        width: 180px;
        text-align: center;
        background: url('/art/normal-bg.png');
        background-repeat: round;
        border: 1px solid black;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
    }
</style>