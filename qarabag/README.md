# Qarabağ — руководство по сайту

Сайт статический (HTML + CSS + JavaScript), без сборки и без установки. Стек не менялся.

## Запуск
Дважды щёлкните `index.html` — работает и без сервера. Для проверки на «боевых» условиях: `python -m http.server` в папке проекта → http://localhost:8000.

## Структура
```
index.html            главная страница (разметка, SEO-теги)
css/variables.css     ЦВЕТА И ШРИФТЫ (меняйте здесь)
css/style.css         стили компонентов
data/timeline.js      45 записей салнамы (дни 1–44 + «Yekun»)
data/regions.js       районы
data/locations.js     точки карты
data/quiz.js          вопросы викторины
js/config.js          настройки + ключ Google Maps
js/footer-links.js    кнопки футера
js/core.js            общие функции, заглушки фото, проверка данных
js/timeline.js regions.js map.js quiz.js modal.js main.js   логика блоков
assets/images/{timeline,regions,gallery,historical,heroes}  фотографии
MDU_sehidler.html     страница героев (прежняя, не менялась)
data/_old/            резервные копии исходных timeline.json и locations.json
```

## Как менять
**Цвета/шрифты:** `css/variables.css` (`--navy`, `--blue`, `--red`, `--green`, `--gold`, `--serif`, `--sans`).

**Изменить событие:** откройте `data/timeline.js`, найдите нужную дату, измените `title`, `short`, `description`, `facts`, `sources`. Сохраните, обновите страницу.

**Фото к дню:** положите файл `assets/images/timeline/day-09.jpg` (имя = `id` записи) — подхватится автоматически. Или впишите путь в поле `image`. Дополнительные фото:
```js
gallery:[{src:"assets/images/gallery/day-09-a.jpg", caption:"Подпись", credit:"Источник/автор"}]
```
**Добавить событие:** скопируйте любой блок `{ ... }` в `data/timeline.js`, дайте уникальный `id`, укажите `date`, `title`, `description`, `regionIds:["cebrayil"]`. **Порядок** = порядок в файле. **Скрыть** — `hidden:true`.

**Район:** `data/regions.js` — те же правила; фото `assets/images/regions/<id>.jpg`. Связь с днями — через `regionIds` в timeline.js.

**Новая страница:** создайте `about.html` по образцу `index.html`, подключите `css/style.css`, добавьте ссылку в меню `index.html` и/или `js/footer-links.js`.

**Проверка ошибок:** откройте консоль браузера (F12). `Core.validate()` сообщает о повторяющихся id, неверных датах и неизвестных районах. Серые 404 на `day-NN.jpg` — это нормально, пока фото не добавлено (показывается заглушка).

**Перед публикацией:** в `js/config.js` поставьте `showPlaceholderHints:false` (скроет подсказки на заглушках).

## Важно
- **Ключ Google Maps** лежит открытым текстом в `js/config.js`. Ограничьте его в Google Cloud по домену и только Maps JavaScript API; лучше перевыпустить, если архив уже где-то публиковался.
- **Нумерация дней.** 27 сент.–9 нояб. = ровно 44 дня; 9 ноября AZƏRTAC называет «44-м днём». 10 нояб. в проекте идёт как «Yekun» (вступление заявления в силу). Нумерация автора сохранена.
- **Статусы дней:** `sourced` — есть источник; `draft` — текст автора без источника; `todo` — день ещё не заполнен (на сайте виден бейдж). Заполняйте только проверенными данными.
- **Админ-панели нет намеренно:** без backend и авторизации она не сохраняла бы изменения. Редактирование — через файлы данных выше.
