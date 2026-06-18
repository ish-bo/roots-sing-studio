import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roots Through Music — Sing. Connect. Belong." },
      {
        name: "description",
        content:
          "An adult-first Indian music program for busy NRIs. Sing Bollywood and classical songs confidently in 16 weeks — with personalized feedback and a global community.",
      },
      { property: "og:title", content: "Roots Through Music™" },
      {
        property: "og:description",
        content: "Rediscover Indian music, confidence, and cultural connection. Built for NRI adults.",
      },
    ],
  }),
  component: Landing,
});

/* ---------- tiny UI helpers ---------- */

function Ornament() {
  return (
    <div className="divider-ornament">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10Z" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "ivory",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "ivory" | "sage" | "ink" | "blush" | "lavender" | "peach" | "mint";
}) {
  const bg =
    tone === "sage"
      ? "bg-[color-mix(in_oklab,var(--sage)_60%,var(--background))]"
      : tone === "ink"
        ? "bg-[var(--ink)] text-[var(--cream)]"
        : tone === "blush"
          ? "bg-[color-mix(in_oklab,var(--blush)_55%,var(--background))]"
          : tone === "lavender"
            ? "bg-[color-mix(in_oklab,var(--lavender)_55%,var(--background))]"
            : tone === "peach"
              ? "bg-[color-mix(in_oklab,var(--peach)_55%,var(--background))]"
              : tone === "mint"
                ? "bg-[color-mix(in_oklab,var(--mint)_55%,var(--background))]"
                : "";
  return (
    <section id={id} className={`relative py-24 md:py-32 ${bg}`}>
      <div className="container-narrow">
        {(eyebrow || title || intro) && (
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
            {title && (
              <h2 className="text-5xl md:text-6xl leading-[1.05] font-serif font-bold">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-6 text-xl md:text-2xl text-[var(--ink)]/85 leading-relaxed font-normal">
                {intro}
              </p>
            )}
            <div className="mt-8">
              <Ornament />
            </div>
          </div>
        )}
        <div className={eyebrow || title ? "mt-16" : ""}>{children}</div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

function Landing() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <Method />
      <Journey />
      <Differentiators />
      <Pricing />
      <Testimonial />
      <Faq />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-narrow flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--gold)]/50 text-[var(--primary)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8 6 8 10 12 14C16 18 16 22 12 22M6 8C8 10 8 14 6 16M18 8C16 10 16 14 18 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-serif text-xl tracking-tight">
            Roots Through Music
            <sup className="text-[10px] text-[var(--ink)]/75"> ™</sup>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          <a href="#program" className="hover:text-primary transition">Program</a>
          <a href="#journey" className="hover:text-primary transition">Journey</a>
          <a href="#pricing" className="hover:text-primary transition">Pricing</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </nav>
        <a
          href="#pricing"
          className="hidden md:inline-flex items-center rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-[var(--cream)] hover:opacity-90 transition"
        >
          Join the cohort
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-narrow grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 animate-fade-up">
          <p className="eyebrow mb-6">An adult-first Indian music journey</p>
          <h1 className="text-6xl md:text-8xl leading-[1.02] font-serif font-bold tracking-tight text-[var(--ink)]">
            It's never too late
            <span className="block italic font-bold text-[var(--primary)]">to sing your roots.</span>
          </h1>
          <p className="mt-7 text-xl md:text-2xl text-[var(--ink)]/85 max-w-xl leading-relaxed font-normal">
            A 16-week program for busy NRI adults to sing Bollywood,
            devotional, and classical songs with confidence — guided by
            personalized feedback and a warm global community.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-[var(--primary)] px-7 py-3.5 text-base font-semibold text-[var(--cream)] hover:bg-[var(--ink)] transition shadow-[0_8px_24px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
            >
              Join the founding cohort
            </a>
            <a href="#program" className="inline-flex items-center gap-2 px-3 py-2 text-base font-semibold text-[var(--ink)] hover:text-[var(--primary)] transition">
              <span className="border-b-2 border-[var(--gold)]/70">Explore the program</span>
              <span>→</span>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-base text-[var(--ink)]/80 font-medium">
            <Stat n="16" l="weeks" />
            <span className="opacity-30">•</span>
            <Stat n="15 min" l="daily riyaz" />
            <span className="opacity-30">•</span>
            <Stat n="∞" l="judgment-free" />
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-[2rem] bg-[color-mix(in_oklab,var(--blush)_60%,transparent)] blur-2xl opacity-80" />
            <div className="absolute -inset-10 rounded-[2.5rem] bg-[color-mix(in_oklab,var(--lavender)_50%,transparent)] blur-3xl opacity-60" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/30 bg-[var(--cream)] shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_40%,transparent)]">
              <img
                src={heroImg}
                alt="A South Asian man singing into a vintage microphone with lotus motifs"
                width={1280}
                height={1280}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[var(--background)]/95 backdrop-blur border border-[var(--border)] px-5 py-4 shadow-lg">
              <p className="text-xs uppercase tracking-widest text-[var(--ink)]/70 font-semibold">Now enrolling</p>
              <p className="font-serif text-xl font-bold text-[var(--ink)]">Cohort 01 · 25 seats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <span className="font-serif text-2xl text-[var(--primary)]">{n}</span>
      <span className="ml-2">{l}</span>
    </div>
  );
}

function Problem() {
  const items = [
    "I started too late.",
    "I don't have time for years of theory.",
    "I want to sing songs I love, not just exercises.",
    "I can't find a teacher in my timezone.",
    "I'm afraid to sing in front of others.",
    "I miss my connection to Indian culture.",
  ];
  return (
    <Section
      tone="blush"
      eyebrow="The quiet ache"
      title="You're not alone in wanting this."
      intro="Thousands of NRI adults grew up loving Indian music but never had the chance to learn. We built Roots Through Music for exactly that person."
    >
      <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {items.map((q) => (
          <li
            key={q}
            className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--background)]/70 backdrop-blur px-6 py-5 font-serif italic text-lg text-[var(--ink)]"
          >
            “{q}”
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Method() {
  const parts = [
    { pct: "20%", title: "Foundations", body: "Just enough classical theory — sargam, ragas, taal — taught with everyday songs, not lectures." },
    { pct: "60%", title: "Song Application", body: "Every concept lands inside a Bollywood, devotional, or ghazal piece you actually want to sing." },
    { pct: "20%", title: "Performance & Community", body: "Virtual mehfils, monthly challenges, and a final showcase. Belonging is the curriculum." },
  ];
  return (
    <Section
      id="program"
      eyebrow="The method"
      title="A gentler way into Indian music."
      intro="Most schools are built for children or future performers. Ours is built for the adult who simply wants to sing — beautifully, confidently, and soon."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {parts.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-3xl bg-[var(--cream)] border border-[var(--border)] p-8 hover:border-[var(--gold)] transition"
          >
            <div className="font-serif text-6xl text-[var(--primary)]/90 leading-none">{p.pct}</div>
            <h3 className="mt-6 text-2xl">{p.title}</h3>
            <p className="mt-3 text-lg text-[var(--ink)]/80 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Journey() {
  const modules = [
    {
      n: "Module One",
      weeks: "Weeks 1–4",
      title: "Find Your Voice",
      body: "Discover your range, match pitch, learn diaphragmatic breathing, and record your very first melody.",
      outcome: "“I can actually sing.”",
    },
    {
      n: "Module Two",
      weeks: "Weeks 5–8",
      title: "Indian Music Foundations",
      body: "Sargam, alankars for Bollywood, ragas like Yaman and Bhairavi, and the rhythms behind your favorite songs.",
      outcome: "“I finally understand Indian music.”",
    },
    {
      n: "Module Three",
      weeks: "Weeks 9–12",
      title: "Bollywood & Karaoke Mastery",
      body: "Pick songs that fit your voice, sing with tracks, master expression — murki, meend, and emotional delivery.",
      outcome: "“I can perform songs I love.”",
    },
    {
      n: "Module Four",
      weeks: "Weeks 13–16",
      title: "Performance & Community",
      body: "Virtual mehfils, duets, fear-management rituals, and a final showcase to graduate as a Roots singer.",
      outcome: "“I belong to a community.”",
    },
  ];
  return (
    <Section
      id="journey"
      eyebrow="The transformation"
      title="Sixteen weeks. One quiet revolution."
    >
      <ol className="relative mx-auto max-w-3xl">
        <span className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/50 to-transparent" aria-hidden />
        {modules.map((m, i) => (
          <li
            key={m.title}
            className={`relative mb-14 md:mb-20 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12"}`}
          >
            <span className="absolute left-4 md:left-auto md:right-auto top-2 -translate-x-1/2 md:translate-x-0 grid h-8 w-8 place-items-center rounded-full bg-[var(--background)] border border-[var(--gold)] text-[var(--primary)] font-serif"
              style={i % 2 ? { left: "-1rem" } : { right: "-1rem", left: "auto" }}
            >
              {i + 1}
            </span>
            <div className="ml-12 md:ml-0 rounded-3xl border border-[var(--border)] bg-[var(--cream)] p-7 shadow-sm">
              <p className="eyebrow">{m.n} · {m.weeks}</p>
              <h3 className="mt-3 text-3xl">{m.title}</h3>
              <p className="mt-3 text-lg text-[var(--ink)]/80 leading-relaxed">{m.body}</p>
              <p className="mt-5 font-serif italic text-[var(--primary)]">{m.outcome}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Differentiators() {
  const items = [
    { t: "Adult-beginner first", b: "No intimidation, no prior experience, no children in your Zoom room." },
    { t: "15 minutes a day", b: "A daily riyaz that fits between meetings and bedtime stories." },
    { t: "Personalized feedback", b: "AI pitch and rhythm reports paired with human coaching." },
    { t: "Songs in your key", b: "We help you find your scale and transpose karaoke tracks to it." },
    { t: "Cultural context", b: "Every song comes with its meaning, mood, and emotional roots." },
    { t: "Global mehfil", b: "Monthly themed sing-alongs from Kishore Kumar nights to devotional evenings." },
  ];
  return (
    <Section tone="lavender" eyebrow="Why it works" title="A program shaped around your real life.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.t} className="rounded-2xl bg-[var(--background)]/70 backdrop-blur border border-[var(--border)] p-7">
            <div className="h-9 w-9 rounded-full bg-[var(--gold)]/30 grid place-items-center text-[var(--primary)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6" /></svg>
            </div>
            <h3 className="mt-5 text-xl">{i.t}</h3>
            <p className="mt-2 text-base text-[var(--ink)]/80">{i.b}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      tag: "14-day mini course",
      price: "$49",
      sub: "one-time",
      bullets: ["Find your scale", "Sing your first song", "Community access"],
      cta: "Start gently",
    },
    {
      name: "Bootcamp",
      tag: "The flagship · 16 weeks",
      price: "$499",
      sub: "or 3 × $179",
      bullets: ["Weekly live classes", "Recordings & feedback", "Virtual mehfils", "Final showcase"],
      cta: "Join the cohort",
      featured: true,
    },
    {
      name: "Circle",
      tag: "Annual membership",
      price: "$999",
      sub: "per year",
      bullets: ["Masterclasses", "Personal song coaching", "Quarterly vocal assessments", "Guest artists"],
      cta: "Become a member",
    },
  ];
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Choose your rhythm."
      intro="Founding members receive lifetime community access, a Founding badge, and extra feedback sessions. Limited to the first 25 students."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-3xl p-8 border transition ${
              t.featured
                ? "bg-[var(--ink)] text-[var(--cream)] border-[var(--gold)] shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--primary)_50%,transparent)] md:-translate-y-4"
                : "bg-[var(--cream)] border-[var(--border)] hover:border-[var(--gold)]"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-4 py-1 text-xs tracking-widest uppercase text-[var(--ink)]">
                Most loved
              </span>
            )}
            <p className={`text-xs uppercase tracking-[0.3em] ${t.featured ? "text-[var(--gold)]" : "text-[var(--ink)]/75"}`}>{t.tag}</p>
            <h3 className={`mt-4 text-3xl ${t.featured ? "text-[var(--cream)]" : ""}`}>{t.name}</h3>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-serif text-5xl">{t.price}</span>
              <span className={`text-sm ${t.featured ? "text-[var(--cream)]/70" : "text-[var(--ink)]/75"}`}>{t.sub}</span>
            </div>
            <ul className={`mt-7 space-y-3 text-base ${t.featured ? "text-[var(--cream)]/90" : "text-[var(--ink)]/80"}`}>
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className={t.featured ? "text-[var(--gold)]" : "text-[var(--primary)]"}>♪</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm transition ${
                t.featured
                  ? "bg-[var(--gold)] text-[var(--ink)] hover:opacity-90"
                  : "bg-[var(--primary)] text-[var(--cream)] hover:bg-[var(--ink)]"
              }`}
            >
              {t.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-[var(--ink)]/75">
        VIP one-on-one coaching also available at $2,499 · Corporate cultural-wellness packages from $7,500.
      </p>
    </Section>
  );
}

function Testimonial() {
  return (
    <Section tone="ink">
      <div className="max-w-3xl mx-auto text-center">
        <Ornament />
        <p className="mt-8 font-serif italic text-3xl md:text-4xl leading-snug text-[var(--cream)]">
          “I always wanted to sing Indian songs but life got in the way.
          For the first time in twenty years, I sang at my daughter's
          birthday — and didn't apologize before doing it.”
        </p>
        <p className="mt-8 text-sm tracking-widest uppercase text-[var(--gold)]">
          Priya · Software Engineer, Seattle
        </p>
      </div>
    </Section>
  );
}

function Faq() {
  const qa = [
    { q: "Do I need prior musical experience?", a: "Not at all. The program is built for complete beginners — every concept starts from zero." },
    { q: "Am I too old to learn singing?", a: "Adults can significantly improve their voice at any age with structured practice and feedback. We see it every cohort." },
    { q: "How much time do I need?", a: "About 15–20 minutes a day of riyaz, plus one weekly live session. Designed around full-time work and family life." },
    { q: "Will I actually learn Bollywood songs?", a: "Yes. 60% of the program is song application — by week 12 you'll have three recorded performances." },
    { q: "Is there a community?", a: "Yes — a global circle of NRI adults, with monthly mehfils, song challenges, and duets." },
  ];
  return (
    <Section id="faq" eyebrow="Questions" title="A few quiet doubts, answered.">
      <div className="max-w-2xl mx-auto divide-y divide-[var(--border)]">
        {qa.map((x) => (
          <details key={x.q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
              <span className="font-serif text-xl text-[var(--ink)]">{x.q}</span>
              <span className="text-[var(--primary)] text-2xl group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-4 text-lg text-[var(--ink)]/80 leading-relaxed">{x.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-14">
      <div className="container-narrow grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="font-serif text-2xl">Roots Through Music<sup className="text-xs">™</sup></p>
          <p className="mt-3 text-base text-[var(--ink)]/80 max-w-xs">
            Sing. Connect. Belong. A cultural-wellness program for NRI adults.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2">
            <li><a href="#program" className="hover:text-primary">The Program</a></li>
            <li><a href="#journey" className="hover:text-primary">The 16-Week Journey</a></li>
            <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
            <li><a href="#faq" className="hover:text-primary">FAQ</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Stay close</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-[var(--border)] bg-[var(--cream)] px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)]"
            />
            <button className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm text-[var(--cream)] hover:bg-[var(--ink)] transition">
              Notify me
            </button>
          </form>
          <p className="mt-3 text-xs text-[var(--ink)]/75">No spam — just cohort openings & free mehfils.</p>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-[var(--ink)]/75">
        © {new Date().getFullYear()} Roots Through Music™ · Made with love for the diaspora.
      </p>
    </footer>
  );
}
