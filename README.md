# Smart DAW Landing — лендинг ИИ‑помощника для сведения музыки

Одностраничный лендинг, презентующий продукт «Умная DAW» — ИИ‑помощника для автоматического сведения треков. Проект создан на React (Vite) с оформлением на Tailwind CSS.

## Функциональность
- Блоки: шапка, геро‑секция, «Как это работает», преимущества, тарифы, дорожная карта, футер
- Адаптивная верстка, аккуратная типографика
- Чистые и переиспользуемые UI‑компоненты в одном файле (`LandingPage.jsx`)

## Технологии
- React 19 + Vite 6
- Tailwind CSS 3 (PostCSS + Autoprefixer)
- ESLint (конфиг для React Hooks и Vite)

## Структура проекта
```
Smart Daw Landing React/
├─ my-react-app/            # само приложение
│  ├─ src/
│  │  ├─ LandingPage.jsx    # основной компонент лендинга
│  │  ├─ App.jsx, main.jsx, index.css, App.css
│  ├─ index.html
│  ├─ tailwind.config.js
│  ├─ postcss.config.js
│  ├─ vite.config.js
│  ├─ package.json
├─ .gitignore
├─ README.md                # этот файл
```

## Требования
- Node.js 18+
- npm 9+

## Установка и запуск
```bash
cd my-react-app
npm install
npm run dev
```
Откройте ссылку из консоли (обычно `http://localhost:5173`).

## Сборка
```bash
cd my-react-app
npm run build
```
Готовые файлы появятся в `my-react-app/dist`.

## Публикация (GitHub Pages/статический хостинг)
1. Соберите проект: `npm run build`
2. Загрузите содержимое `my-react-app/dist` на любой статический хостинг (GitHub Pages, Netlify, Vercel и т.д.)
   - Для GitHub Pages можно использовать отдельную ветку `gh-pages` или action, публикующий `dist/`.

## Разработка
- Источник лендинга — `my-react-app/src/LandingPage.jsx`. Можно заменять/расширять секции без изменения остального шаблона.
- Tailwind настроен в v3 для совместимости с утилитарными классами наподобие `px-6`, `py-6`, `bg-gradient-to-r` и т.д.

## Лицензия
MIT (при необходимости можно заменить строку лицензии под ваш проект).
