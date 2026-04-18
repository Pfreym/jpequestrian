import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(255,255,255,0.84)] backdrop-blur-md">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-[var(--ink)]">
          <Image src={logo} width={44} height={44} alt="JP Equestrian logo" />
          <div className="leading-none">
            <div className="brand-script text-[1.9rem] text-[var(--sage-deep)]">
              JP Equestrian
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
              Coaching for horse and rider
            </div>
          </div>
        </Link>

        <Link
          href="/book"
          className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--saddle)] bg-[var(--saddle)] px-5 text-sm font-semibold tracking-[0.08em] text-[var(--parchment-soft)] transition hover:bg-[var(--saddle-deep)]"
        >
          Book a Session
        </Link>
      </div>
    </header>
  );
}
