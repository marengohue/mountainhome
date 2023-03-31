<script lang="ts">
    export let cardDefinition: ICard;
</script>

<div class="card">
    <div class="inner">
        <div class="art" />
        <div class="name box">{cardDefinition.name}</div>

        {#if cardDefinition.mainText}
            <p>{cardDefinition.mainText}</p>
        {/if}

        <div class="flavour box">
            <p class="text">
                {cardDefinition.flavourText || ""}
            </p>
        </div>

        <div class="type">{cardDefinition.type}</div>
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

    .art {
        position: relative;
        background: url('/art/rocks-1.png');
        background-repeat: round;
        height: 290px;
    }

    .name {
        line-height: 30px;
        position: relative;
        height: 30px;
        font-size: 15px;
        font-weight: 700;
    }

    .flavour {
        height: 104px;
        font-size: 12px;
        font-family: 'Farsan';
        text-align: center;
        position: relative;
    }

    .flavour .text {
        margin: 0;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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