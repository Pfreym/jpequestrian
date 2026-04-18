export default async function Book({
  searchParams,
}: {
  searchParams?: { success?: string; error?: string };
}) {
  const success = searchParams?.success === "1";
  const error = searchParams?.error === "1";

  return (
    <main className="page-shell py-10 sm:py-14 lg:py-16">
      <div className="arena-rule mb-8" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <section className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--sage-deep)]">
            Book a session
          </p>
          <h1 className="mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
            Send through your preferred date and time.
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">
            Use the form to request a booking. Include your details, preferred
            session time, and anything useful to know about you or your horse.
          </p>

          <div className="mt-8 space-y-4 border-t border-[var(--line)] pt-5 text-[15px] leading-7 text-[var(--ink-soft)]">
            <p>Choose a date.</p>
            <p>Pick a preferred time.</p>
            <p>Leave notes or goals in the comments field.</p>
          </div>
        </section>

        <section className="max-w-2xl">
          {success ? (
            <p className="mb-5 border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--sage-deep)]">
              Your booking request was sent.
            </p>
          ) : null}

          {error ? (
            <p className="mb-5 border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--ink)]">
              The booking request could not be sent. Please try again.
            </p>
          ) : null}

          <form
            action="/api/bookings"
            method="post"
            className="grid gap-5 border-t border-[var(--line)] pt-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="min-h-[52px] border border-[var(--line-strong)] bg-white px-4 text-[var(--ink)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="min-h-[52px] border border-[var(--line-strong)] bg-white px-4 text-[var(--ink)]"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                  Contact phone number
                </span>
                <input
                  required
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  className="min-h-[52px] border border-[var(--line-strong)] bg-white px-4 text-[var(--ink)]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                  Date
                </span>
                <input
                  required
                  type="date"
                  name="date"
                  className="min-h-[52px] border border-[var(--line-strong)] bg-white px-4 text-[var(--ink)]"
                />
              </label>
            </div>

            <label className="grid gap-2 sm:max-w-sm">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                Time
              </span>
              <input
                required
                type="time"
                name="time"
                className="min-h-[52px] border border-[var(--line-strong)] bg-white px-4 text-[var(--ink)]"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                Comments
              </span>
              <textarea
                name="comments"
                rows={6}
                placeholder="Goals, riding background, horse details, or anything else useful."
                className="border border-[var(--line-strong)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[var(--saddle)] bg-[var(--saddle)] px-7 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--parchment-soft)] transition hover:bg-[var(--saddle-deep)]"
              >
                Send booking request
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
