<header class="header">
  <div class="container">
    <a class="company" href="/">NKU</a>
    <div class="right">
      <a class="email" href="mailto:info@nku.su">info@nku.su</a>
      <a class="phone" href="tel:+79164441159">+7-916-444-11-59</a>
    </div>
  </div>
</header>

<style>
  .header {
    padding: 2px 0;
    background-color: #026aa7;
    justify-content: center;
  }

  .container {
    justify-content: space-between;
    align-items: center;
    width: 1120px;
    padding: 0 10px;
  }

  .company {
    color: #fff;
    font-size: 3rem;
    text-decoration: none;
  }

  .company:hover {
    color: #fff;
    text-decoration: none;
  }

  .right {
    align-items: center;
  }

  .email {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }

  .phone {
    color: #fff;
    font-size: 1.75rem;
    margin-left: 40px;
    text-decoration: none;
  }

  @media (max-width: 576px) {
    .container {
      flex-direction: column;
    }

    .right {
      flex-direction: column;
    }

    .email {
      margin-top: 10px;
    }

    .phone {
      margin-left: 0;
      margin-top: 10px;
    }
  }
</style>
