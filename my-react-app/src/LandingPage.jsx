import React, { useEffect, useState } from "react";

// SmartDAW Landing Page - single-file React component
// Tailwind CSS required in project
// Default export: LandingPage

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState('ru');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    if (saved === 'ru' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    try { window.localStorage.setItem('lang', lang); } catch (_) {}
  }, [lang]);

  const isRu = lang === 'ru';
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
              <h1 className="text-lg font-semibold leading-tight">{isRu ? 'Умная DAW' : 'Smart DAW'}</h1>
              <p className="text-xs text-gray-300 -mt-1">{isRu ? 'ИИ‑помощник для автоматического сведения' : 'AI assistant for automatic mixing'}</p>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <a className="text-sm text-gray-300 hover:text-white">{isRu ? 'Особенности' : 'Features'}</a>
            <a className="text-sm text-gray-300 hover:text-white">{isRu ? 'Тарифы' : 'Pricing'}</a>
            <a className="text-sm text-gray-300 hover:text-white">{isRu ? 'Дорожная карта' : 'Roadmap'}</a>
            <button className="ml-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 font-semibold shadow">
              {isRu ? 'Попробовать бесплатно' : 'Try for free'}
            </button>
            <div className="ml-2">
              <LangSwitch lang={lang} setLang={setLang} />
            </div>
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
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">{isRu ? 'Особенности' : 'Features'}</a>
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">{isRu ? 'Тарифы' : 'Pricing'}</a>
              <a className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-800">{isRu ? 'Дорожная карта' : 'Roadmap'}</a>
              <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-teal-400 text-gray-900 font-semibold shadow">
                {isRu ? 'Попробовать бесплатно' : 'Try for free'}
              </button>
              <div className="pt-2">
                <LangSwitch lang={lang} setLang={setLang} />
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">{isRu ? 'Умная DAW — ваш ИИ‑помощник в мире музыки' : 'Smart DAW — your AI assistant for mixing'}</h2>
            <p className="mt-4 text-lg text-gray-300">{isRu ? 'Автоматическое сведение треков с помощью искусственного интеллекта. Быстро. Просто. Профессионально.' : 'Automatic track mixing powered by AI. Fast. Simple. Professional.'}</p>

            <div className="mt-8 flex gap-3">
              <PrimaryButton>{isRu ? 'Попробовать бесплатно' : 'Try for free'}</PrimaryButton>
              <SecondaryButton>{isRu ? 'Записаться в ранний доступ' : 'Join early access'}</SecondaryButton>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-300">
              <Stat label={isRu ? 'Экономия времени' : 'Time savings'} value={isRu ? 'До 10x' : 'Up to 10x'} />
              <Stat label="VST" value={isRu ? 'Поддержка' : 'Supported'} />
              <Stat label={isRu ? 'Экспорт' : 'Export'} value="WAV • FLAC • MP3" />
              <Stat label={isRu ? 'Импорт проектов' : 'Project import'} value="Ableton • Bitwig" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <MockupCard />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h3 className="text-2xl font-semibold">{isRu ? 'Как это работает' : 'How it works'}</h3>
          <p className="mt-2 text-gray-300">{isRu ? 'Просто загрузите проект Ableton (.als) или Bitwig (.dawproject) — нажмите «Свести» — и получите готовый микс.' : 'Upload an Ableton (.als) or Bitwig (.dawproject), click “Mix”, and get a ready track.'}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title={isRu ? 'Анализ и эквализация' : 'Analysis & EQ'}
              desc={isRu ? 'ИИ выявляет частотные конфликты и устраняет резонансы — как Soothe, но автоматически по всей сессии.' : 'AI finds frequency conflicts and removes resonances automatically across the session.'}
            />
            <FeatureCard
              title={isRu ? 'Панорама и стерео' : 'Panning & Stereo'}
              desc={isRu ? 'Автоматическая расстановка панорам для плотной, но чистой стереокартины.' : 'Automatic panning for a dense yet clean stereo field.'}
            />
            <FeatureCard
              title={isRu ? 'Динамика и подбор VST' : 'Dynamics & VST selection'}
              desc={isRu ? 'ИИ подбирает оптимальные VST для компрессии и динамической обработки каждой дорожки.' : 'AI suggests optimal VSTs for compression and dynamic processing.'}
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gradient-to-b from-transparent to-gray-800/60 rounded-xl">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">{isRu ? 'Интерфейс знаком пользователям Ableton и Bitwig' : 'Familiar for Ableton and Bitwig users'}</h3>
              <p className="mt-2 text-gray-300">{isRu ? 'Плавный переход для профессионалов, минимум обучения для новичков.' : 'Smooth transition for pros, minimal learning for newcomers.'}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="inline-flex rounded-md shadow">
                <button className="px-5 py-3 bg-white text-gray-900 font-semibold rounded-md">{isRu ? 'Скачать демо' : 'Download demo'}</button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SmallCard title={isRu ? 'Гибридный режим' : 'Hybrid mode'} text={isRu ? 'Автомат + ручная доработка' : 'Auto + manual fine-tuning'} />
            <SmallCard title="VST" text={isRu ? 'Совместимость со всеми стандартными VST-плагинами' : 'Compatible with standard VST plugins'} />
            <SmallCard title={isRu ? 'Экспорт' : 'Export'} text={isRu ? 'WAV, FLAC, MP3 — готово к мастерингу' : 'WAV, FLAC, MP3 — ready for mastering'} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <h3 className="text-2xl font-semibold">{isRu ? 'Тарифы' : 'Pricing'}</h3>
          <p className="mt-2 text-gray-300">{isRu ? 'Выберите подходящий план: от бесплатного для теста до студийной лицензии для команд.' : 'Choose a plan: from free trial to studio licenses for teams.'}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard name="Free" price="0" items={isRu ? ["До 5 дорожек", "Базовый ИИ-анализ"] : ["Up to 5 tracks", "Basic AI analysis"]} />
            <PriceCard name="Pro" price="9.99/mo" items={isRu ? ["Неограниченно дорожек", "Обновления ИИ", "Поддержка VST"] : ["Unlimited tracks", "AI updates", "VST support"]} featured />
            <PriceCard name="Studio" price="custom" items={isRu ? ["Лицензии для команд", "Облачная обработка", "Приоритетная поддержка"] : ["Team licenses", "Cloud processing", "Priority support"]} />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 bg-gray-800/60 rounded-xl">
          <h3 className="text-2xl font-semibold">{isRu ? 'Дорожная карта' : 'Roadmap'}</h3>
          <ol className="mt-6 space-y-4 text-gray-300">
            <li>{isRu ? <span><strong>MVP (3–4 мес.)</strong> — импорт проектов, базовый ИИ-анализ и автоматическое сведение.</span> : <span><strong>MVP (3–4 mo)</strong> — project import, basic AI analysis and auto mixing.</span>}</li>
            <li>{isRu ? <span><strong>Beta (6–8 мес.)</strong> — поддержка VST, улучшенные алгоритмы, экспорт.</span> : <span><strong>Beta (6–8 mo)</strong> — VST support, improved algorithms, export.</span>}</li>
            <li>{isRu ? <span><strong>Release (12 мес.)</strong> — гибридный режим, стабильный UI.</span> : <span><strong>Release (12 mo)</strong> — hybrid mode, stable UI.</span>}</li>
            <li>{isRu ? <span><strong>Expansion</strong> — облако, коллаборации, мобильные клиенты.</span> : <span><strong>Expansion</strong> — cloud, collaboration, mobile clients.</span>}</li>
          </ol>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
          <h3 className="text-3xl font-bold">{isRu ? 'Готов начать экономить время на сведении?' : 'Ready to save time on mixing?'}</h3>
          <p className="mt-3 text-gray-300">{isRu ? 'Запишитесь в ранний доступ и получите демо‑версию.' : 'Join early access and get a demo.'}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <PrimaryButton>{isRu ? 'Записаться в ранний доступ' : 'Join early access'}</PrimaryButton>
            <SecondaryButton>{isRu ? 'Связаться с нами' : 'Contact us'}</SecondaryButton>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© {new Date().getFullYear()} {isRu ? 'Умная DAW — Все права защищены' : 'Smart DAW — All rights reserved'}</div>
          <div className="mt-3 md:mt-0">{isRu ? 'Политика конфиденциальности • Условия использования' : 'Privacy Policy • Terms of Use'}</div>
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

function LangSwitch({ lang, setLang }) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-md border border-gray-700 bg-gray-800/60">
      <button
        className={`px-3 py-1 text-sm ${lang === 'ru' ? 'bg-purple-500 text-white' : 'text-gray-300 hover:text-white'}`}
        onClick={() => setLang('ru')}
        aria-pressed={lang === 'ru'}
      >RU</button>
      <button
        className={`px-3 py-1 text-sm ${lang === 'en' ? 'bg-purple-500 text-white' : 'text-gray-300 hover:text-white'}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >EN</button>
    </div>
  );
}
