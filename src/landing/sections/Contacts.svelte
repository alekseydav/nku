<script>
  import ButtonBorder from "../blocks/ButtonBorder.svelte";
</script>

<div id="contacts">
  <div class="contacts">
    <div class="section-title-block">
      <div class="section-title">
        <div class="line" />
        <h2>Контакты</h2>
      </div>
      <div class="section-text">
        <p>
          <span class="highlight">Телефон:</span>
          <a href="tel:+7-916-444-11-59">+7-916-444-11-59</a>
        </p>
        <p>
          <span class="highlight">Email:</span>
          <a href="mailto:info@nku.su">info@nku.su</a>
        </p>
        <p>
          <span class="highlight">Адрес:</span>
          <span>г. Москва, ул. Маршала Захарова, д.23</span>
        </p>
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A956d7807a7eb812000defd41df74b784de50195e752ddc19b687128a9fca57ab&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      />
    </div>

    <div class="section-title-block">
      <div class="section-title">
        <ButtonBorder title="Реквизиты" target="false" />
      </div>
      <div class="section-text">
        <div class="contact-details">
          <p>ООО «НКУ»</p>
          <p>Юр. адрес: 115582, г. Москва, б-р Ореховый, д. 14, корп. 1, 374</p>
          <p>ОГРН: 1187746358238</p>
          <p>ИНН: 7724435224</p>
          <p>КПП: 772401001</p>
          <p>Банк: Филиал "ЦЕНТРАЛЬНЫЙ" Банка ВТБ ПАО Г. МОСКВА</p>
          <p>БИК: 044525411</p>
          <p>Р/с: 40702810501970001168</p>
          <p>К/с: 30101810145250000411</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #contacts {
    padding: 3rem 0 3rem 0;
  }
  .contacts {
    width: 1110px;
    margin: 0 auto;
  }
  .section-title-block {
    align-items: flex-start;
  }
  .map {
    padding-bottom: 2rem;
  }
  .section-text a {
    color: #2b2b2b;
  }
  .contact-details {
    padding: 0;
  }
  p {
    margin: 0.2rem 0;
  }
  .highlight {
    font-family: "Inter";
    font-weight: bold;
    margin-right: 10px;
  }

  @media (min-width: 1000.01px) and (max-width: 1550px) {
    #contacts {
      width: 100%;
    }
    .contacts {
      width: 100%;
      padding: 100px 47px 0 47px;
    }
  }
  @media (min-width: 1000.01px) and (max-width: 1250px) {
    .section-text {
      width: 450px;
    }
  }
  @media (min-width: 800.01px) and (max-width: 1000px) {
    #contacts {
      width: 100%;
    }
    .contacts {
      width: 100%;
      padding: 100px 45px 0 45px;
    }
  }
  @media screen and (max-width: 800px) {
    #contacts {
      width: 100%;
      padding: 40px 15px;
      margin: 0 auto;
    }
    .contacts {
      width: 100%;
      padding: 10px 0 0 0;
    }
    .section-text {
      margin-bottom: 20px;
    }
    .section-title-block {
      align-items: center;
    }
    .contact-details {
      text-align: left;
    }
  }
</style>
