import Link from "next/link";

const PROFILE = {
  name: "Darren Headley",
  title: "Director, Technology Services | AI & Digital Transformation",
  location: "Trinidad & Tobago",
  email: "Darren_headey@me.com",
  phoneDisplay: "+1 868 7510 325",
  phoneTel: "+18687510325",
  linkedin: "https://www.linkedin.com/in/darren-headley-2278671b5/",
};

const PROJECTS = [
  {
    name: "COSTAATT-CRM",
    description:
      "Recruitment CRM to streamline lead capture, admissions workflows, and enrollment tracking.",
    href: "https://github.com/ZeroZenx/COSTAATT-CRM",
  },
  {
    name: "TAPS-Transcript-Automation",
    description:
      "Transcript request automation with role-based workflows, Azure AD authentication, and SharePoint integration.",
    href: "https://github.com/ZeroZenx/TAPS-Transcript-Automation",
  },
  {
    name: "Helix-One",
    description:
      "AI-powered crypto trading arena with real-time leaderboard, analytics, and Binance integration.",
    href: "https://github.com/ZeroZenx/Helix-One",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 dark:from-zinc-950 dark:to-black dark:text-zinc-50">
      <header className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {PROFILE.location}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              {PROFILE.title}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>

            <a
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
              href={`mailto:${PROFILE.email}`}
            >
              Email
            </a>

            <a
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
              href={`tel:${PROFILE.phoneTel}`}
            >
              Call
            </a>
          </div>

          <div className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-semibold">Email</p>
              <p className="mt-1 break-all">{PROFILE.email}</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-semibold">Phone</p>
              <p className="mt-1">{PROFILE.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-20">
        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">About</h2>
          <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              Innovative and strategic IT leader with a proven track record of
              aligning technology solutions with institutional priorities.
              Experienced across software, hardware, systems integration, and
              AI-driven transformation.
            </p>
            <p>
              Adept at designing and executing scalable, secure, and future-ready
              infrastructure to support evolving digital demands, while fostering
              cross-functional collaboration to drive digital transformation,
              workflow automation, and operational resilience.
            </p>
            <p>
              Currently leading enterprise-wide AI policy development, chatbot
              innovation, and cybersecurity awareness initiatives at the College
              of Science, Technology and Applied Arts of Trinidad and Tobago
              (COSTAATT).
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Featured Projects</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                A few projects that reflect my focus on automation, reliability,
                and practical impact.
              </p>
            </div>
            <Link
              className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href={PROFILE.linkedin}
              target="_blank"
            >
              Connect
            </Link>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold group-hover:underline">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>
                  </div>
                  <span className="text-zinc-400 transition group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">What I work on</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Enterprise AI policy, governance, and responsible adoption
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Chatbots and workflow automation for service delivery
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Secure, scalable infrastructure and systems integration
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Cybersecurity awareness and operational resilience
            </li>
          </ul>
        </section>

        <footer className="mt-10 pb-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js and
            deployed on Vercel.
          </p>
        </footer>
      </main>
    </div>
  );
}
