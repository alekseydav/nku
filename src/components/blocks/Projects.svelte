<script>
    let projects = [
        {
            name: "ЖК Вавилово",
            img: "zhk-vavilovo.png",
            start: 2018,
            finish: 2021,
            site: "vavilovo.com",
            address: "г. Москва, ул. Архитектора Власова, д. 6",
            description:
                "Выполнены работы по программированию, пуско-наладке и диспетчеризации 29 щитов управления системами кондиционирования, приточно-вытяжной вентиляции, тепловых завес и контроля загазованности. Использовались контроллеры компании Segnetics - SMH2G и Pixel.",
        },
        {
            name: "АВТОDOM",
            img: "avtodom.png",
            start: 2019,
            finish: 2020,
            site: "avtodom.ru",
            address: "г. Москва, ул. Зорге, д. 17",
            description:
                "Произведены щиты управления двумя системами приточной вентиляции с водяным и электрическим подогревом. Добились высокой точности поддержания температуры ±0,2°C. Из кабинета директора с помощью сенсорной панели 3,5 дюйма можно менять температуру электрическому доводчику.",
        },
        {
            name: "Технополис Москва",
            img: "tehnopolis-moskva.png",
            start: 2019,
            finish: 2020,
            site: "technomoscow.ru",
            address: "г. Москва, Волгоградский просп., 42, корп. 13",
            description:
                "Автоматизация системы вентиляции чистого помещения с классом запыленности ISO5 предназначенного для производства микросхем. Поддержание постоянного избыточного давления в помещении для исключения попадания пыли при открытии двери. Щит сделан с использованием сенсорной панели Kinco 10 дюймов и контроллера Овен ПР200.",
        },
        {
            name: "Коттеджный поселок Пестово",
            img: "kottedzhnyy-poselok-pestovo.png",
            start: 2018,
            finish: 2019,
            site: "pestovoposelok.ru",
            address:
                "Московская область, Мытищинский район, деревня Румянцево, 44 (22 км по Дмитровскому шоссе)",
            description:
                "Диспетчеризация 8 систем вентиляции на базе контроллеров Segnetics Pixel и SMH2010. Также сделали автоматизацию АВР и автоматическое включение и отключение дизельного генератора в зависимости от текущей нагрузки. Показания потребляемой мощности считываются с счетчика Меркурий по RS-485.",
        },
        {
            name: "Майнинг-контейнеры",
            img: "mayning-konteynery.png",
            start: 2018,
            finish: 2020,
            site: "1ghs.ru",
            address:
                "Москва, Новосибирск, Ивантеевка, Чечня, Кашира, Абхазия, Барнаул и много других городов",
            description:
                "Автоматизировали более 20 майнинг-контейнеров (мобильных дата центров). Производительность вентиляторов подбирается таким образом, чтобы температура внутри контейнера была постоянной независимо от количества включенных асиков. Есть возможность удаленного включения и отключения стоек. Полная автономность, контроль и управление осуществляется удаленно через мобильный телефон или компьютер./n/nP.S. Щиты собирали не мы) В наши работы входит программирование, пуско-наладка и диспетчеризация.",
        },
        {
            name: "Нагрузочный модуль",
            img: "nagruzochnyy-modul.png",
            start: 2019,
            finish: 2019,
            site: "general-energo.ru",
            address: "г. Москва, ул. Генерала Дорохова, д. 12, стр. 1",
            description:
                "Автоматизация и диспетчеризация нагрузочного модуля, который используется для тестирования работы генераторов под нагрузкой в различных режимах работы. Автоматика выполнена на контроллере ОВЕН ПЛК110, диспетчеризация на SimpleSCADA.",
        },
        {
            name: "Департамент строительства г. Москвы",
            img: "departament-stroitelstva-g-moskvy.png",
            start: 2019,
            finish: 2020,
            site: "mos.ru/dgp",
            address: "г. Москва, пер. Никитский, д. 5, стр.6",
            description:
                "Автоматизация холодильной станции, состоящей из двух холодильных машин RHOSS и сухой градирни. Для охлаждения используется гликолевый контур, который через теплообменники охлаждает водяной контур до заданной температуры. Автоматика выполнена на контроллере Segnetics SMH2G.",
        },
    ];
</script>

<h2 class="header">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
{#each projects as { name, img, start, finish, site, address, description }}
    <h3 class="name">{name}</h3>
    <div class="container">
        <img alt={name} src="img/{img}" />

        <div class="content">
            <!-- <h3>{name}</h3> -->
            <div class="item">
                <span class="item__name">Работы:</span>
                <span>{start} - {finish} г.</span>
            </div>
            <div class="item">
                <span class="item__name">Сайт:</span>
                <a href={site}>{site}</a>
            </div>
            <div class="item">
                <span class="item__name">Адрес:</span>
                <span>{address}</span>
            </div>

            <p class="description">{description}</p>
        </div>
    </div>
{/each}

<style>
    .header {
        margin: 0 auto;
        margin-top: 50px;
        text-align: center;
    }

    .name {
        margin: 0 auto;
        margin-top: 30px;
        text-align: center;
    }

    .container {
        margin-top: 10px;
        align-items: flex-start;
    }

    .content {
        margin-left: 20px;
        flex-direction: column;
    }

    .item {
        margin-top: 6px;
    }

    .item__name {
        margin-right: 6px;
    }

    .description {
        margin-top: 15px;
    }

    @media (max-width: 960px) {
        .name {
            max-width: 480px;
        }

        .container {
            flex-direction: column;
            align-items: center;
        }

        .content {
            margin-left: 0;
            max-width: 480px;
        }
    }
</style>
