# Дорожная карта: Smart DAW Landing

Этот файл фиксирует текущий статус и план улучшений. Используйте как чек‑лист.

## Текущее состояние
- React + Vite + Tailwind v3
- Главная страница `my-react-app/src/LandingPage.jsx`
- Мобильное бургер‑меню
- Двуязычность RU/EN + переключатель (сохранение в localStorage)
- Деплой: GitHub Pages (Actions) и Netlify (netlify.toml, SPA `_redirects`)

## Улучшения
- SEO/OG: мета‑теги, favicon/og:image, `lang` на `<html>`, `sitemap.xml`, `robots.txt`
- i18n: вынести строки в `src/i18n.ts`, поддержка `?lang=ru|en`
- Навигация: закрытие меню по клику вне и по ESC, якоря и подсветка активного пункта
- Формы/лиды: действия для CTA (Netlify Forms, почта, TG), аналитика (GA4/Метрика)
- Производительность: оптимизация SVG/изображений, предзагрузка шрифтов, Lighthouse
- Доступность: контрасты, `aria-*`, фокус‑стили
- Качество: pre-commit хуки, простые тесты компонентов

## Шаги продолжения
1) Создать `my-react-app/src/i18n.ts` и перенести все строки из `LandingPage.jsx` в словарь `{ ru: {...}, en: {...} }`.
2) Добавить разбор `?lang=` при старте и синхронизацию с `localStorage`.
3) В `my-react-app/index.html` добавить title/description/OG‑мета и подключить favicon; `document.documentElement.lang = 'ru'|'en'` из React.
4) Реализовать закрытие мобильного меню по клику вне панели и по ESC.
5) Подключить форму (Netlify Forms) для CTA и настроить аналитику событий.
6) Прогнать Lighthouse, выполнить рекомендации.

## Деплой: заметки
- GitHub Pages: пуш в `main` запускает `.github/workflows/deploy.yml`.
- Netlify: использует `netlify.toml` (base=`my-react-app`, publish=`dist`). При ошибке rollup можно выставить переменную `NPM_CONFIG_OPTIONAL=false` и выполнить «Clear cache and deploy».
