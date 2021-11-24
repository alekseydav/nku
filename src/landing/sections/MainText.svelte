<script>
  import Button from "../blocks/Button.svelte";

  export let main_text;
</script>

<div id="top" class="maintext">
  <div class="title">
    <h1>{main_text.title}</h1>
  </div>

  <div class="text">
    <p>{main_text.text}</p>
  </div>

  <div class="btn-block">
    <Button title="Отправить заявку" />
  </div>
</div>

<style>
  .btn-block {
    display: none;
    width: 177px;
    height: 50px;
  }
  .maintext {
    width: 1110px;
    margin: 70px auto 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    width: 653px;
  }
  .text {
    width: 383px;
  }
  h1 {
    font-size: 40px;
    line-height: 60px;
    margin: 0;
  }
  p {
    font-size: 20px;
    margin: 0;
  }

  @media (min-width: 1250.01px) and (max-width: 1550px) {
    .maintext {
      width: 1110px;
      padding: 0 47px;
      margin: 80px auto 30px auto;
    }
    .title {
      width: 482px;
    }
    .text {
      width: 323px;
    }
    h1 {
      font-size: 30px;
      line-height: 45px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (min-width: 1000.01px) and (max-width: 1250px) {
    .maintext {
      width: 100%;
      padding: 0 45px;
    }
    .title {
      width: 462px;
    }
    .text {
      width: 383px;
    }
    h1 {
      font-size: 26px;
      line-height: 45px;
    }
    p {
      font-size: 15px;
      line-height: 24px;
    }
  }

  @media (min-width: 800.01px) and (max-width: 1000px) {
    .maintext {
      width: 100%;
      padding: 0 45px;
      margin: 70px auto 25px auto;
    }
    .title {
      width: 354px;
    }
    .text {
      width: 279px;
    }
    h1 {
      font-size: 22px;
      line-height: 33px;
    }
    p {
      font-size: 14px;
      line-height: 21px;
    }
  }

  @media screen and (max-width: 800px) {
    .maintext {
      width: 100%;
      padding: 0 15px;
    }
    .maintext {
      flex-direction: column;
    }
    .title {
      max-width: 290px;
    }
    .text {
      max-width: 290px;
    }
    h1 {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      margin-bottom: 20px;
    }
    .btn-block {
      display: block;
      margin-bottom: 20px;
    }
  }
</style>
