import React, { useState } from "react";

// SmartDAW Landing Page - single-file React component
// Tailwind CSS required in project
// Default export: LandingPage

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 antialiased">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1440 520" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stopColor="#7c3aed" stopOpacity="0.7" />
              <stop offset="1" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M0,320 C120,360 240,280 360,300 C480,320 600,420 720,400 C840,380 960,260 1080,280 C1200,300 1320,420 1440,380 L1440 520 L0 520 Z" fill="url(#g1)" />
        </svg>
      </div>

      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-teal-400 flex items-center justify-center shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M3 12h18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 8v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 8v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Умная DAW</h1>
              <p className="text-xs text-gray-300 -mt-1">ИИ‑помощник для автоматического сведения</p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <a className="text-sm text-gray-300 hover:text-white">Особенности</a>
            <a className="text-sm text-gray-300 hover:text-white">Тарифы</a>
            <a className="text-sm text-gray-300 hover:text-white">Дорожная карта</a>
            <button className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 font-semibold shadow">
              Попробовать бесплатно
            </button>
          </div>

          {/* Burger button */}
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Открыть меню</span>
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu panel */}
        {mobileOpen && (
          <div id="mobile-menu" className="sm:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">Особенности</a>
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">Тарифы</a>
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">Дорожная карта</a>
              <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 font-semibold shadow">
                Попробовать бесплатно
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Умная DAW — ваш ИИ‑помощник в мире музыки</h2>
            <p className="mt-4 text-lg text-gray-300">Автоматическое сведение треков с помощью искусственного интеллекта. Быстро. Просто. Профессионально.</p>

            <div className="mt-8 flex gap-3">
              <PrimaryButton>Попробовать бесплатно</PrimaryButton>
              <SecondaryButton>Записаться в ранний доступ</SecondaryButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-300">
              <Stat label="Экономия времени" value="До 10x" />
              <Stat label="Поддержка VST" value="Да" />
              <Stat label="Экспорт" value="WAV • FLAC • MP3" />
              <Stat label="Импорт проектов" value="Ableton • Bitwig" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <MockupCard />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h3 className="text-2xl font-semibold">Как это работает</h3>
          <p className="mt-2 text-gray-300">Просто загрузите проект Ableton (.als) или Bitwig (.dawproject) — нажмите «Свести» — и получите готовый микс.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Анализ и эквализация"
              desc="ИИ выявляет частотные конфликты и устраняет резонансы — как Soothe, но автоматически по всей сессии."
            />
            <FeatureCard
              title="Панорама и стерео"
              desc="Автоматическая расстановка панорам для плотной, но чистой стереокартины."
            />
            <FeatureCard
              title="Динамика и подбор VST"
              desc="ИИ подбирает оптимальные VST для компрессии и динамической обработки каждой дорожки."
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-b from-transparent to-gray-800/60 rounded-xl">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Интерфейс знаком пользователям Ableton и Bitwig</h3>
              <p className="mt-2 text-gray-300">Плавный переход для профессионалов, минимум обучения для новичков.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="inline-flex rounded-md shadow">
                <button className="px-5 py-3 bg-white text-gray-900 font-semibold rounded-md">Скачать демо</button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SmallCard title="Гибридный режим" text="Автомат + ручная доработка" />
            <SmallCard title="Поддержка VST" text="Совместимость со всеми стандартными VST-плагинами" />
            <SmallCard title="Экспорт" text="WAV, FLAC, MP3 — готово к мастерингу" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h3 className="text-2xl font-semibold">Тарифы</h3>
          <p className="mt-2 text-gray-300">Выберите подходящий план: от бесплатного для теста до студийной лицензии для команд.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard name="Free" price="0" items={["До 5 дорожек", "Базовый ИИ-анализ"]} />
            <PriceCard name="Pro" price="9.99/mo" items={["Неограниченно дорожек", "Обновления ИИ", "Поддержка VST"]} featured />
            <PriceCard name="Studio" price="custom" items={["Лицензии для команд", "Облачная обработка", "Приоритетная поддержка"]} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gray-800/60 rounded-xl">
          <h3 className="text-2xl font-semibold">Дорожная карта</h3>
          <ol className="mt-6 space-y-4 text-gray-300">
            <li><strong>MVP (3–4 мес.)</strong> — импорт проектов, базовый ИИ-анализ и автоматическое сведение.</li>
            <li><strong>Beta (6–8 мес.)</strong> — поддержка VST, улучшенные алгоритмы, экспорт.</li>
            <li><strong>Release (12 мес.)</strong> — гибридный режим, стабильный UI.</li>
            <li><strong>Expansion</strong> — облако, коллаборации, мобильные клиенты.</li>
          </ol>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
          <h3 className="text-3xl font-bold">Готов начать экономить время на сведении?</h3>
          <p className="mt-3 text-gray-300">Запишитесь в ранний доступ и получите демо‑версию.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <PrimaryButton>Записаться в ранний доступ</PrimaryButton>
            <SecondaryButton>Связаться с нами</SecondaryButton>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Умная DAW — Все права защищены</div>
          <div className="mt-3 md:mt-0">Политика конфиденциальности • Условия использования</div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small components used above ---------- */

function PrimaryButton({ children }) {
  return (
    <button className="px-5 py-3 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 font-semibold shadow hover:scale-[1.01] transition-transform">
      {children}
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="px-4 py-2 rounded-md bg-transparent border border-gray-700 text-gray-200 hover:bg-gray-800 transition">
      {children}
    </button>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-gray-800/50 p-4 rounded-md">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function MockupCard() {
  return (
    <div className="w-full max-w-xl bg-gradient-to-br from-black/60 to-white/2 border border-gray-800 rounded-xl p-6 shadow-2xl">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-md p-4">
        <div className="w-full h-3 bg-gray-700 rounded mb-4" />
        <div className="grid grid-cols-4 gap-3">
          <div className="h-24 rounded bg-gradient-to-br from-purple-600/40 to-teal-400/30" />
          <div className="h-24 rounded bg-gradient-to-br from-purple-600/20 to-teal-400/10" />
          <div className="h-24 rounded bg-gradient-to-br from-purple-600/10 to-teal-400/5" />
          <div className="h-24 rounded bg-gradient-to-br from-purple-600/40 to-teal-400/30" />
        </div>
        <div className="mt-4">
          <div className="h-12 bg-gray-800 rounded mb-2" />
          <div className="h-12 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-2 text-gray-300 text-sm">{desc}</p>
    </div>
  );
}

function SmallCard({ title, text }) {
  return (
    <div className="p-4 rounded-md bg-gray-800/50 border border-gray-700">
      <h5 className="font-semibold">{title}</h5>
      <p className="text-gray-300 mt-2 text-sm">{text}</p>
    </div>
  );
}

function PriceCard({ name, price, items = [], featured = false }) {
  return (
    <div className={`p-6 rounded-lg border ${featured ? "border-purple-500 bg-gradient-to-r from-purple-900/30 to-transparent" : "border-gray-700 bg-gray-800/40"}`}>
      <div className="flex items-baseline justify-between">
        <div>
          <div className="text-sm text-gray-300">{name}</div>
          <div className="text-2xl font-bold">{price === '0' ? 'Free' : price}</div>
        </div>
        {featured && <div className="text-xs text-purple-400 font-semibold">Популярно</div>}
      </div>
      <ul className="mt-4 text-gray-300 space-y-2">
        {items.map((it, i) => (
          <li key={i}>• {it}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button className={`w-full py-2 rounded-md font-semibold ${featured ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-100'}`}>
          Выбрать
        </button>
      </div>
    </div>
  );
}
