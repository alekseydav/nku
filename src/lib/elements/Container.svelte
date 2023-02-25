<div class="wrapper">
    <div class="container">
        <slot />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
    }

    .wrapper:nth-child(odd) {
        background-color: #993f3f;
    }

    .wrapper:nth-child(even) {
        background-color: #3981c9;
    }

    .container {
        width: 1110px;
    }
</style>
