<h2 class="header">КОНТАКТЫ</h2>
<div class="container">
    <div class="content">
        <div class="contacts">
            <div>
                Телефон:<a class="link" href="tel:+79164441159"
                    >+7-916-444-11-59</a
                >
            </div>
            <div>
                E-mail:<a class="link" href="mailto:info@nku.su">info@nku.su</a>
            </div>
            <div>
                Адрес: г. Москва, ул. Маршала Захарова, д. 23
            </div>
        </div>

        <h3>Реквизиты</h3>
        <div>
            ООО «НКУ»<br />
            Юр. адрес: 115582, г. Москва, б-р Ореховый, д. 14, корп. 1, 374<br
            />
            ОГРН: 1187746358238<br />
            ИНН: 7724435224<br />
            КПП: 772401001<br />
            Банк: Филиал "ЦЕНТРАЛЬНЫЙ" Банка ВТБ ПАО Г. МОСКВА<br />
            БИК: 044525411<br />
            Р/с: 40702810501970001168<br />
            К/с: 30101810145250000411<br />
        </div>
    </div>
    <div class="map">
        <iframe
            class="frame"
            title="Карта"
            width="100%"
            height="100%"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac087a7b8e5132591841130cfd525f51f4e88ce3b2872094f069a0761272c84ca"
        />
    </div>
</div>

<style>
    .header {
        margin: 0 auto;
        margin-top: 50px;
        text-align: center;
    }

    .container {
        margin-top: 20px;
    }

    .content {
        flex-direction: column;
        line-height: 1.5;
        max-width: 300px;
    }

    .contacts {
        font-size: 1.5rem;
        margin-bottom: 30px;
        flex-direction: column;
    }

    .link {
        color: #000;
        text-decoration: none;
        margin-left: 6px;
    }

    .map {
        margin-left: 20px;
        flex-grow: 1;

    }

    .frame {
        border: none;
    }

    @media (max-width: 576px) {
        .container {
            flex-direction: column;
        }

        .map {
            margin-left: 0;
            margin-top: 30px;
            height: 300px;
        }
    }
</style>
