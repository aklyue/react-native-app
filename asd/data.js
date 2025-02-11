export const asd = [
    {
        id: 1,
        name: 'Драма',
        movies: [
            {
                movieId: 1,
                title: 'Фильм 1',
                description: 'Описание фильма 1',
                rating: 4.5,
                comments: [
                    {
                        userId: 1,
                        text: 'Хороший фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 2,
                        text: 'Отлично!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Фильм 2',
                description: 'Описание фильма 2',
                rating: 4.8,
                comments: [
                    {
                        userId: 3,
                        text: 'Хороший фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 4,
                        text: 'Отлично!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Комедия',
        movies: [
            {
                movieId: 3,
                title: 'Фильм 3',
                description: 'Описание фильма 3',
                image: "https://thumbs.dfs.ivi.ru/storage8/contents/2/2/3718fa5811fe930fabb25d4e17f885.jpg/234x360/?q=60",
                rating: 4.5,
                comments: [
                    {
                        userId: 5,
                        text: 'Хороший фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 6,
                        text: 'Отлично!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Фильм 4',
                description: 'Описание фильма 4',
                rating: 4.8,
                comments: [
                    {
                        userId: 7,
                        text: 'Хороший фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 8,
                        text: 'Отлично!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
];


export const categoriesData = [
    {
        id: 1,
        name: 'Драма',
        image: "https://i.pinimg.com/originals/d0/44/83/d04483c2937a4904907be468d11a9735.jpg",
        movies: [
            {
                movieId: 1,
                title: 'Побег из Шоушенка',
                description: 'Драма о дружбе и надежде в самой жестокой тюрьме.',
                image: 'https://ru-images-s.kinorium.com/movie/300/101209.jpg?1678571590',
                rating: 9.3,
                comments: [
                    {
                        userId: 1,
                        text: 'Замечательный фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 2,
                        text: 'Изумительно!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Властелин колец: Возвращение Короля',
                description: 'Эпическое завершение величайшей фэнтези-саги.',
                image: 'https://ru-images-s.kinorium.com/movie/300/139945.jpg?1565096756',
                rating: 8.9,
                comments: [
                    {
                        userId: 3,
                        text: 'Невероятное завершение!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 4,
                        text: 'Эпохальное произведение искусства!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 3,
                title: 'Список Шиндлера',
                description: 'Драма о спасении еврейских беженцев во время Холокоста.',
                image: 'https://ru-images-s.kinorium.com/movie/300/98467.jpg?1517239380',
                rating: 8.9,
                comments: [
                    {
                        userId: 5,
                        text: 'История невероятной мужественности!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 6,
                        text: 'Сильно впечатлило!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Зеленая миля',
                description: 'Драма о сверхъестественных явлениях в тюрьме смертников.',
                image: 'https://ru-images-s.kinorium.com/movie/300/109273.jpg?1679304848',
                rating: 8.6,
                comments: [
                    {
                        userId: 7,
                        text: 'Сильная история с потрясающими актерами!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 8,
                        text: 'Очень трогательно и мощно!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 5,
                title: 'Подозрительные лица',
                description: 'Драма о загадочном убийстве и расследовании.',
                image: 'https://ru-images-s.kinorium.com/movie/300/104353.jpg?1576537248',
                rating: 8.6,
                comments: [
                    {
                        userId: 9,
                        text: 'Блестящая игра актеров!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 10,
                        text: 'Сюжет, который держит в напряжении!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Комедия',
        image: "https://images.kinorium.com/movie/shot/349117/w1500_407204.jpg",
        movies: [
            {
                movieId: 1,
                title: 'Форест Гамп',
                description: 'История простого человека, который сделал необычное в жизни.',
                image: 'https://ru-images-s.kinorium.com/movie/300/99975.jpg?1678665198',
                rating: 8.8,
                comments: [
                    {
                        userId: 11,
                        text: 'Забавный и трогательный фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 12,
                        text: 'Том Хэнкс великолепен!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Сверхъестественное',
                description: 'Комедия о паранормальных явлениях и охотниках на призраков.',
                image: 'https://ru-images-s.kinorium.com/movie/300/347572.jpg?1587670622',
                rating: 8.4,
                comments: [
                    {
                        userId: 13,
                        text: 'Смешно и довольно жутко!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 14,
                        text: 'Легендарный сериал!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 3,
                title: 'Ирония судьбы, или С легким паром!',
                description: 'Советская комедия о путешествии и любви.',
                image: 'https://ru-images-s.kinorium.com/movie/300/67902.jpg?1629707263',
                rating: 8.5,
                comments: [
                    {
                        userId: 15,
                        text: 'Вечная новогодняя классика!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 16,
                        text: 'Смех и вдохновение!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Достучаться до небес',
                description: 'Комедия о приключениях двух друзей в Германии.',
                image: 'https://ru-images-s.kinorium.com/movie/300/108220.jpg?1681306053',
                rating: 7.6,
                comments: [
                    {
                        userId: 17,
                        text: 'Смешно и незабываемо!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 18,
                        text: 'Хороший юмор и приключения!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 5,
                title: 'Большой Лебовски',
                description: 'Комедия о человеке по прозвищу "Дюд" и его необычных приключениях.',
                image: 'https://ru-images-s.kinorium.com/movie/300/107537.jpg?1679307072',
                rating: 8.1,
                comments: [
                    {
                        userId: 19,
                        text: 'Культовый фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 20,
                        text: 'Забавный и непредсказуемый!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Фантастика',
        image: "https://cdnb.artstation.com/p/assets/images/images/018/952/423/4k/jaime-jasso-neoshanghai-jaimejasso.jpg?1561425480",
        movies: [
            {
                movieId: 1,
                title: 'Звёздные войны: Эпизод IV - Новая надежда',
                description: 'Эпическая сага о войне в далекой галактике.',
                image: 'https://ru-images-s.kinorium.com/movie/300/71037.jpg?1517238362',
                rating: 8.6,
                comments: [
                    {
                        userId: 21,
                        text: 'Новая надежда для кинематографии!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 22,
                        text: 'Блестящая фантастика!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Мстители',
                description: 'Супергерои объединяются, чтобы спасти мир.',
                image: 'https://ru-images-s.kinorium.com/movie/300/391991.jpg?1678574171',
                rating: 8.4,
                comments: [
                    {
                        userId: 23,
                        text: 'Зрелищное действо!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 24,
                        text: 'Лучшие герои всех времен!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 3,
                title: 'Матрица',
                description: 'Фильм о виртуальной реальности и сопротивлении машинам.',
                image: 'https://ru-images-s.kinorium.com/movie/300/116780.jpg?1678571724',
                rating: 8.7,
                comments: [
                    {
                        userId: 25,
                        text: 'Философская идея в захватывающем экшене!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 26,
                        text: 'Иконический фильм!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Интерстеллар',
                description: 'Фантастическая одиссея о путешествиях в космосе и времени.',
                image: 'https://ru-images-s.kinorium.com/movie/300/384511.jpg?1678571416',
                rating: 8.6,
                comments: [
                    {
                        userId: 27,
                        text: 'Глубокий и визуально потрясающий фильм!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 28,
                        text: 'Новый взгляд на научную фантастику!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 5,
                title: 'Остров проклятых',
                description: 'Фантастический триллер о загадочном острове и загадках прошлого.',
                image: 'https://ru-images-s.kinorium.com/movie/300/431590.jpg?1678576160',
                rating: 8.2,
                comments: [
                    {
                        userId: 29,
                        text: 'Захватывающее путешествие!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 30,
                        text: 'Загадочно и увлекательно!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        name: 'Боевики',
        image: "https://w.forfun.com/fetch/71/712897729f4b15a02f26e4dcf3957718.jpeg",
        movies: [
            {
                movieId: 1,
                title: 'Джон Уик',
                description: 'Бывший наемник возвращается, чтобы отомстить за убийство своей собаки.',
                image: 'https://ru-images-s.kinorium.com/movie/300/703219.jpg?1678878664',
                rating: 7.4,
                comments: [
                    {
                        userId: 31,
                        text: 'Безумно динамичный и стильный боевик!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 32,
                        text: 'Киану Ривз в своем лучшем исполнении!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Великолепная семёрка',
                description: 'Семь наемных убийц пытаются спасти мексиканскую деревню от бандитов.',
                image: 'https://ru-images-s.kinorium.com/movie/300/665697.jpg?1679411723',
                rating: 6.9,
                comments: [
                    {
                        userId: 33,
                        text: 'Классический вестерн с яркими персонажами!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 34,
                        text: 'Очень увлекательный и динамичный фильм!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 3,
                title: 'Алита: Боевой ангел',
                description: 'Борьба девушки-киборга без каких-либо воспоминаний.',
                image: 'https://ru-images-s.kinorium.com/movie/300/332295.jpg?1687187624',
                rating: 7.1,
                comments: [
                    {
                        userId: 35,
                        text: 'Философская идея в захватывающем экшене!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 36,
                        text: 'Иконический фильм!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Невозможное',
                description: 'История о семье, которая выживает во время цунами в Таиланде.',
                image: 'https://ru-images-s.kinorium.com/movie/300/531934.jpg?1678798164',
                rating: 7.6,
                comments: [
                    {
                        userId: 37,
                        text: 'Потрясающе напряженный боевик!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 38,
                        text: 'Основано на реальных событиях и очень трогательно!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 5,
                title: 'Лицо со шрамом',
                description: 'Бывший наемный убийца вступает в схватку с мафией.',
                image: 'https://ru-images-s.kinorium.com/movie/300/79391.jpg?1544702410',
                rating: 8.3,
                comments: [
                    {
                        userId: 39,
                        text: 'Культовый фильм о преступном мире!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 40,
                        text: 'Аль Пачино великолепен!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'Ужасы',
        image: "https://esquire.kz/wp-content/uploads/2021/10/19176dfe-ce2b-4764-a992-3d27bd50217f-1536x864.jpg",
        movies: [
            {
                movieId: 1,
                title: 'Загадочное убийство',
                description: 'Психологический триллер о детективе, расследующем убийство.',
                image: 'https://ru-images-s.kinorium.com/movie/300/2415486.jpg?1683823575',
                rating: 4.9,
                comments: [
                    {
                        userId: 41,
                        text: 'Заставляет задуматься и переживать!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 42,
                        text: 'Отличный детектив с неожиданным развитием сюжета!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 2,
                title: 'Зло',
                description: 'Ужасы о демоническом вторжении в дом семьи.',
                image: 'https://ru-images-s.kinorium.com/movie/300/1608443.jpg?1531504807',
                rating: 5.0,
                comments: [
                    {
                        userId: 43,
                        text: 'Мрачный и жуткий ужастик!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 44,
                        text: 'Поднимает волосы на коже!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 3,
                title: 'Астрал',
                description: 'Ужасы о паранормальных явлениях и стремлении спасти семью.',
                image: 'https://ru-images-s.kinorium.com/movie/300/519946.jpg?1692267691',
                rating: 6.8,
                comments: [
                    {
                        userId: 45,
                        text: 'Отличный психологический ужас!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 46,
                        text: 'Создает неповторимую атмосферу страха!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 4,
                title: 'Звонок',
                description: 'Ужасы о проклятом видеоролике, который приносит смерть.',
                image: 'https://ru-images-s.kinorium.com/movie/300/148914.jpg?1692713415',
                rating: 7.1,
                comments: [
                    {
                        userId: 47,
                        text: 'Знаменитый фильм ужасов!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 48,
                        text: 'Заставляет вас бояться телефона!',
                        user: 'Пользователь2',
                    },
                ],
            },
            {
                movieId: 5,
                title: 'Тихое место',
                description: 'Ужасы о семье, которая выживает в мире, где звук может убить.',
                image: 'https://ru-images-s.kinorium.com/movie/300/1617236.jpg?1678660752',
                rating: 7.5,
                comments: [
                    {
                        userId: 49,
                        text: 'Очень напряженный и оригинальный ужастик!',
                        user: 'Пользователь1',
                    },
                    {
                        userId: 50,
                        text: 'Уникальная концепция и отличные актеры!',
                        user: 'Пользователь2',
                    },
                ],
            },
        ]
    }
];