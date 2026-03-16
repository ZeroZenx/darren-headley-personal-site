import Image from "next/image";

const PROFILE = {
  name: "Darren Headley",
  title:
    "Director of Information Technology Services at COSTAATT | MSc Artificial Intelligence | AI-Driven Transformation Leader | BSc Computer Science | ML | CV | RPA | NCP-MCI | CAIE | AI PM I Applied AI",
  location: "Trinidad & Tobago",
  email: "darren_headley@hotmail.com",
  phoneDisplay: "+1 868 7510 325",
  phoneTel: "+18687510325",
  linkedin: "https://www.linkedin.com/in/darren-headley-2278671b5/",
  cvHref: "/darren-headley-cv-2025.pdf",
};

const OUTCOMES = [
  {
    title: "Digital transformation leadership",
    detail:
      "Leading AI integration across teaching, learning, and administrative services at COSTAATT.",
  },
  {
    title: "Cybersecurity operations and resilience",
    detail:
      "Overseeing SOC/IDS/firewall operations, strengthening awareness, and improving operational readiness.",
  },
  {
    title: "Major platform upgrades",
    detail:
      "Spearheaded the Moodle LMS upgrade to v4.0 and supported institution-wide training and adoption.",
  },
  {
    title: "Automation + reporting",
    detail:
      "Building automation systems for tracking, reporting, and student engagement to reduce manual effort and improve visibility.",
  },
] as const;

const EXECUTIVE_IMPACT = [
  {
    title: "AI and digital transformation leadership",
    decision:
      "Defined and introduced an institutional approach for integrating AI across teaching, learning, and administrative services at COSTAATT.",
    action:
      "Established strategic direction for responsible AI adoption across academic and administrative operations.",
    outcome:
      "Launched AI pilots supporting registry, admissions, and faculty engagement while establishing the foundation for responsible AI adoption across the institution.",
  },
  {
    title: "Enterprise systems modernization",
    decision:
      "Prioritized modernization of critical institutional systems to support scalable digital delivery.",
    action:
      "Led modernization of core platforms including LMS, admissions workflows, and internal automation systems.",
    outcome:
      "Improved service delivery, reduced manual processing across administrative units, and strengthened institutional readiness for digital service delivery.",
  },
  {
    title: "Automation of student services",
    decision:
      "Targeted student-facing processes for automation to improve efficiency and service quality.",
    action:
      "Directed development of automation platforms for student document processing, transcript workflows, and admissions support.",
    outcome:
      "Reduced administrative processing time while improving visibility into student application and service workflows.",
  },
  {
    title: "Learning management platform transformation",
    decision:
      "Made LMS transformation a strategic priority for teaching and learning improvement.",
    action:
      "Spearheaded the upgrade of Moodle LMS to version 4.0 and supported institution-wide rollout.",
    outcome:
      "Enabled improved digital learning capabilities for faculty and students and strengthened adoption of modern online teaching tools.",
  },
  {
    title: "Cybersecurity operations leadership",
    decision:
      "Elevated cybersecurity as a core institutional leadership responsibility.",
    action:
      "Oversaw cybersecurity operations including firewall governance, network monitoring, and security awareness initiatives.",
    outcome:
      "Strengthened operational readiness and improved the protection of public-facing academic systems and internal infrastructure.",
  },
  {
    title: "Technology operations leadership",
    decision:
      "Structured multi-campus IT operations for consistency, responsiveness, and resilience.",
    action:
      "Directed technology operations across helpdesk services, network administration, and system administration teams.",
    outcome:
      "Improved service responsiveness and operational stability across institutional technology services.",
  },
  {
    title: "Data visibility and reporting automation",
    decision:
      "Prioritized data visibility as a leadership enabler for faster institutional decisions.",
    action:
      "Led development of reporting and tracking systems for leadership and administrative teams.",
    outcome:
      "Enabled faster decision-making through improved reporting visibility and reduced manual reporting effort.",
  },
  {
    title: "Cross-department transformation initiatives",
    decision:
      "Adopted a cross-functional delivery model to drive institutional alignment.",
    action:
      "Led technology initiatives involving academic leadership, student services, and administrative units.",
    outcome:
      "Accelerated institutional adoption of new digital systems while aligning technology strategy with institutional priorities.",
  },
  {
    title: "Infrastructure and service reliability",
    decision:
      "Focused infrastructure strategy on reliability and resilience of critical services.",
    action:
      "Directed improvements to network infrastructure, system monitoring, and operational processes supporting institutional platforms.",
    outcome:
      "Improved service reliability and strengthened operational resilience for critical institutional services.",
  },
  {
    title: "Future-focused innovation leadership",
    decision:
      "Positioned innovation as a deliberate, structured institutional capability.",
    action:
      "Championed AI experimentation, workflow automation, and technology pilots supporting institutional transformation.",
    outcome:
      "Positioned the institution to adopt emerging technologies in a structured and responsible manner.",
  },
] as const;

const STRATEGIC_INITIATIVES = [
  "AI adoption strategy for academic and administrative operations",
  "AI inbox automation for institutional email workflows",
  "Student document automation platform",
  "Transcript automation workflow system",
  "Recruitment CRM for admissions pipeline management",
  "Cyberbullying monitoring dashboard integrated with security platforms",
  "Institutional LMS modernization program",
  "Internal reporting and automation systems for operational visibility",
] as const;

const ALL_GITHUB_PROJECTS = [
  {
    name: "COSTAATT-CRM",
    description:
      "A comprehensive Recruitment CRM system for COSTAATT that streamlines student lead management from capture to enrollment.",
    href: "https://github.com/ZeroZenx/COSTAATT-CRM",
  },
  {
    name: "TAPS-Transcript-Automation",
    description:
      "Enterprise-grade transcript request automation with role-based workflows, Azure AD authentication, and SharePoint integration.",
    href: "https://github.com/ZeroZenx/TAPS-Transcript-Automation",
  },
  {
    name: "Helix-One",
    description:
      "AI-powered analytics arena with real-time leaderboard, technical analysis, and exchange integration.",
    href: "https://github.com/ZeroZenx/Helix-One",
  },
  {
    name: "COSTAATT-Techhub-Web",
    description:
      "Tech hub website focused on innovative learning experiences and collaborative exploration.",
    href: "https://github.com/ZeroZenx/COSTAATT-Techhub-Web",
  },
  {
    name: "COSTAATT-HR-Performance-Appreasal-System",
    description:
      "Performance management system (HR Performance Gateway) for 347+ staff members.",
    href: "https://github.com/ZeroZenx/COSTAATT-HR-Performance-Appreasal-System",
  },
  {
    name: "Digital-Gift-Match",
    description:
      "Full-stack donor/volunteer matching app with admin dashboard and automated email notifications.",
    href: "https://github.com/ZeroZenx/Digital-Gift-Match",
  },
  {
    name: "Library-Circulation-Lookup",
    description:
      "Read-only lookup tool for legacy Voyager circulation data with search and analytics.",
    href: "https://github.com/ZeroZenx/Library-Circulation-Lookup",
  },
  {
    name: "COSTAATT-Advanced-CMMS",
    description:
      "Enterprise CMMS concept: advanced work order management with modern features and extensible architecture.",
    href: "https://github.com/ZeroZenx/COSTAATT-Advanced-CMMS",
  },
  {
    name: "COSTAATT-Student-Document-Upload-System",
    description:
      "Student-facing web app for submitting required documents for admissions and registry processes.",
    href: "https://github.com/ZeroZenx/COSTAATT-Student-Document-Upload-System",
  },
  {
    name: "Cyberbullying-Signals-Dashboard",
    description:
      "Monitoring and alerting dashboard for cyberbullying signals (FortiAnalyzer and other sources) with RBAC.",
    href: "https://github.com/ZeroZenx/Cyberbullying-Signals-Dashboard",
  },
  {
    name: "Faculty-Workshop-Teaching-Learning-With-AI",
    description:
      "Workshop site for faculty: Teaching & Learning with AI — from critical thinking to workflow automation.",
    href: "https://github.com/ZeroZenx/Faculty-Workshop-Teaching-Learning-With-AI",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 dark:from-zinc-950 dark:to-black dark:text-zinc-50">
      <header className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-zinc-200 dark:ring-zinc-800 sm:h-28 sm:w-28">
              <Image
                src="/headshot.jpg"
                alt="Darren Headley"
                fill
                className="object-cover object-[50%_15%] sm:object-center"
                priority
              />
            </div>

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
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
              href={PROFILE.cvHref}
              target="_blank"
              rel="noreferrer"
            >
              Download CV
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
              I’m a technology leader focused on modernizing service delivery
              through secure infrastructure, workflow automation, and responsible
              AI adoption. I lead cross-functional initiatives that connect
              policy, people, and platforms—turning operational pain points into
              scalable systems that improve reliability, responsiveness, and
              decision-making.
            </p>
            <p>
              As Director of Information Technology at COSTAATT, I oversee IT
              infrastructure, cloud integrations, and cybersecurity operations
              (SOC, IDS, firewall), while driving digital transformation across
              teaching, learning, and administration.
            </p>
            <p>
              My background spans web development, database administration, and
              IT governance—with a practical, outcomes-first approach to shipping
              improvements.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Selected Outcomes</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Highlights from recent work across transformation, operations, and delivery.
              </p>
            </div>
            <a
              className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href={PROFILE.cvHref}
              target="_blank"
              rel="noreferrer"
            >
              Full CV
            </a>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <p className="text-sm font-semibold">{o.title}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {o.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">What I work on</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Digital transformation: AI integration in teaching, learning, and administration
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Cybersecurity operations: SOC, IDS, firewall oversight and awareness programs
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Cloud and infrastructure: integrations, upgrades, and service reliability
            </li>
            <li className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">
              Automation systems for tracking, reporting, and operational efficiency
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Executive Leadership and Business Impact</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Leadership decisions translated into strategic direction and institutional outcomes.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {EXECUTIVE_IMPACT.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <h3 className="text-base font-semibold">{item.title}</h3>
                <div className="mt-3 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <p>
                    <span className="font-semibold">Leadership decision:</span> {item.decision}
                  </p>
                  <p>
                    <span className="font-semibold">Strategic action:</span> {item.action}
                  </p>
                  <p>
                    <span className="font-semibold">Outcome:</span> {item.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="text-base font-semibold">Strategic Initiatives Led</h3>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              {STRATEGIC_INITIATIVES.map((initiative) => (
                <li key={initiative} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{initiative}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Featured Projects</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Public repositories from my GitHub profile.
              </p>
            </div>
            <a
              className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href="https://github.com/ZeroZenx"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {ALL_GITHUB_PROJECTS.map((p) => (
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
                    {p.description ? (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {p.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="text-zinc-400 transition group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Education</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <p className="font-semibold">Masters in Artificial Intelligence</p>
                <p className="text-zinc-600 dark:text-zinc-400">University of York • Aug 2025</p>
              </li>
              <li>
                <p className="font-semibold">BSc Computer Science</p>
                <p className="text-zinc-600 dark:text-zinc-400">University of Southampton • Aug 2003</p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Certifications & Credentials</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>NCP-MCI</li>
              <li>CAIE</li>
              <li>ITIL Foundation (v1, v3) • ITIL Service Strategy</li>
              <li>CompTIA A+</li>
              <li>CompTIA Network+</li>
              <li>Linux+</li>
              <li>HP ATA – Connected Devices V1</li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
              Also experienced with ML and RPA initiatives (see CV for details).
            </p>
          </div>
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
