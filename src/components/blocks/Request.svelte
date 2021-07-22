<script>
    import InputPhone from "../elements/InputPhone.svelte";
    import Button from "../elements/Button.svelte";
    let phone = "";
    let isError = false;

    function send() {
        if (phone === "") {
            isError = true;
            return;
        }

        fetch(`/api/send`, {
            method: "POST",
            body: JSON.stringify({
                phone: phone,
                title: document.title,
                url: window.location.href,
            }),
        });
        phone = "";
    }


</script>

<div class="container">
    <h2 class="header">Оставить заявку</h2>

    <div class="content">
        <InputPhone bind:phone={phone} bind:isError={isError} on:submit={send}  />
    </div>

    <div class="footer">
        <Button on:click={send} />
    </div>
</div>

<style>
    .container {
        flex-flow: column;
        align-self: center;
        margin-top: 50px;
        width: 100%;
        max-width: 500px;
    }

    .header {
        background-color: #3e4757;
        padding: 20px 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
        color: white;
        font-size: 1.5rem;
    }

    .content {
        flex-direction: column;
        padding: 30px 10px;
        border-left: 1px solid #eef2e7;
        border-right: 1px solid #eef2e7;
    }

    .footer {
        padding: 10px 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 1px solid #eef2e7;
    }
</style>
