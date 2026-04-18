import Image from "next/image";
import dressageHero from "../../../public/images/generated/dressage-hero-01.png";
import showJumping from "../../../public/images/generated/show-jumping-01.png";

const serviceCards = [
  {
    title: "Private Coaching",
    copy:
      "Focused sessions for better feel, cleaner communication, and more confident riding.",
  },
  {
    title: "Mentorship",
    copy:
      "Longer-term support between lessons to keep horse, rider, and goals moving together.",
  },
];

export function Splash() {
  return (
    <div className="pb-20">
      <section className="page-shell relative overflow-hidden py-10 sm:py-14 lg:py-20">
        <div className="arena-rule mb-8" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sage-deep)]">
              Equestrian coaching and mentorship
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Build a steadier rider.
              <span className="block text-[var(--saddle)]">
                Develop a more confident horse.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
              JP Equestrian helps riders train with more clarity, better feel,
              and a plan that respects both performance and partnership.
            </p>

          </div>

          <div className="relative">
            <div className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[color:rgba(243,244,242,0.42)] via-[color:rgba(243,244,242,0.12)] to-transparent sm:h-16" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[color:rgba(243,244,242,0.38)] via-[color:rgba(243,244,242,0.08)] to-transparent sm:h-24" />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[color:rgba(243,244,242,0.46)] via-[color:rgba(243,244,242,0.14)] to-transparent sm:w-14 lg:w-16" />
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[color:rgba(243,244,242,0.46)] via-[color:rgba(243,244,242,0.14)] to-transparent sm:w-14 lg:w-16" />
              <Image
                src={dressageHero}
                width={1523}
                height={713}
                alt="Horse and rider training together"
                className="h-full min-h-[420px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="page-shell py-8 sm:py-12">
        <div className="arena-rule mb-8" />
        <div className="grid gap-8 py-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-xl">
            <div className="mb-6 h-px w-20 bg-[var(--brass)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sage-deep)]">
              Coaching
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Calm, direct coaching that gives horse and rider a clearer next
              step.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-[var(--ink-soft)]">
              Good coaching should sharpen observation, simplify decisions, and
              leave both rider and horse with a clearer next step.
            </p>

            <div className="mt-8 grid gap-5 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
              <div className="border-t border-[var(--line)] pt-4 sm:border-t-0 sm:pt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saddle)]">
                  Observe
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--ink-soft)]">
                  Start with what horse and rider are actually showing that
                  day.
                </p>
              </div>
              <div className="border-t border-[var(--line)] pt-4 sm:border-t-0 sm:pt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saddle)]">
                  Refine
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--ink-soft)]">
                  Refine the timing, feel, and decisions that matter most.
                </p>
              </div>
              <div className="border-t border-[var(--line)] pt-4 sm:border-t-0 sm:pt-0">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--saddle)]">
                  Repeat
                </p>
                <p className="mt-3 text-base leading-8 text-[var(--ink-soft)]">
                  Leave with work you can repeat confidently between sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="page-shell py-8 sm:py-12">
        <div className="arena-rule mb-8" />
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <article className="relative overflow-hidden rounded-[1.9rem]">
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:rgba(243,244,242,0.7)] to-transparent" />
              <Image
                src={showJumping}
                width={1523}
                height={713}
                alt="Horse and rider clearing a jump in competition"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </article>
          </div>

          <div className="max-w-xl py-2">
            <div className="mb-6 h-px w-20 bg-[var(--brass)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sage-deep)]">
              Sessions and support
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Built for riders who want better feel, cleaner technique, and
              steadier progress.
            </h2>
            <div className="mt-8 space-y-6 border-t border-[var(--line)] pt-5">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="border-t border-[var(--line)] pt-4 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-xl leading-tight text-[var(--ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-base leading-8 text-[var(--ink-soft)]">
                    {card.copy}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-[var(--ink-soft)]">
              The aim is simple: more confidence for the rider, more clarity for
              the horse, and work that carries beyond a single lesson.
            </p>

            <div className="mt-8">
              <a
                href="/book"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--saddle)] bg-[var(--saddle)] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--parchment-soft)] transition hover:bg-[var(--saddle-deep)]"
              >
                View booking calendar
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
