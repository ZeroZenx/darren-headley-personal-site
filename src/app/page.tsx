import Image from "next/image";

const PROFILE = {
  name: "Darren Headley",
  legalName: "Darren Richard Kern Headley",
  title: "AI & Digital Transformation Executive",
  supportingLine: "Cybersecurity | Enterprise Technology | Innovation Leadership",
  location: "Tacarigua, Trinidad and Tobago",
  email: "darren_headley@hotmail.com",
  phoneDisplay: "751-0325",
  phoneTel: "+18687510325",
  linkedin: "https://www.linkedin.com/in/darren-headley-2278671b5/",
  website: "https://darrenheadley.vercel.app",
  cvHref: "/darren-richard-kern-headley-executive-cv-2026.pdf",
};

const ADVISORY_OUTLOOK_URL = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(
  PROFILE.email,
)}&subject=${encodeURIComponent("Speaking and Advisory Inquiry")}&body=${encodeURIComponent(
  "Hello Darren,\n\nI would like to connect about a speaking, advisory, or executive technology opportunity.\n\nRegards,",
)}`;

const IMPACT_CHIPS = [
  "20+ Years Technology Leadership",
  "MSc Artificial Intelligence",
  "Director at COSTAATT",
  "IDB Pr.A.I.S.E. 2024 Innovation Recognition",
] as const;

const SIGNATURE_WINS = [
  {
    title: "AI Connect Innovation Initiative",
    description:
      "AI-powered engagement and operational transformation initiative recognized through the IDB Pr.A.I.S.E. innovation program.",
  },
  {
    title: "Enterprise AI Communications Platform",
    description:
      "AI-assisted administrative communication and workflow automation platform improving operational responsiveness and service efficiency.",
  },
  {
    title: "Enterprise Recruitment CRM Platform",
    description:
      "Custom recruitment and engagement platform supporting lead management, automation workflows, student engagement, and institutional outreach.",
  },
  {
    title: "Unified Digital Student Services Platform",
    description:
      "Centralized digital workflow platform modernizing student service requests and operational delivery.",
  },
  {
    title: "Digital Performance Management Platform",
    description:
      "Enterprise digital performance evaluation and workflow modernization system for staff appraisal and operational management.",
  },
  {
    title: "Secure Digital Document Intake Platform",
    description:
      "Secure document upload and workflow automation platform supporting digital intake, process modernization, and operational efficiency.",
  },
  {
    title: "Infrastructure & Cybersecurity Modernization",
    description:
      "Leadership of enterprise cybersecurity, disaster recovery, wireless modernization, identity governance, and infrastructure resilience initiatives.",
  },
] as const;

const CASE_STUDIES = [
  {
    title: "AI Connect Innovation Initiative",
    challenge:
      "Modernize institutional engagement and demonstrate practical AI value in a higher education environment.",
    role:
      "Architected the concept, positioned the initiative around responsible AI adoption, and aligned the solution to operational transformation priorities.",
    outcome:
      "Recognized through the IDB Pr.A.I.S.E. 2024 Innovation Category, strengthening COSTAATT's profile as an innovation-forward institution.",
  },
  {
    title: "Enterprise AI Communications Platform",
    challenge:
      "High-volume administrative communication required faster response cycles, better workflow visibility, and reduced manual handling.",
    role:
      "Led the transformation approach for AI-assisted communication, workflow automation, and Microsoft 365-enabled service improvement.",
    outcome:
      "Improved operational responsiveness and created a scalable foundation for AI-assisted administrative service delivery.",
  },
  {
    title: "Infrastructure & Cybersecurity Modernization",
    challenge:
      "Multi-campus services required stronger resilience, security governance, identity controls, and continuity planning.",
    role:
      "Directed modernization priorities across cybersecurity, disaster recovery, enterprise networking, wireless infrastructure, and identity governance.",
    outcome:
      "Strengthened service reliability, institutional readiness, and enterprise technology governance across critical platforms.",
  },
] as const;

const EXECUTIVE_CAPABILITIES = [
  "AI strategy and adoption",
  "Enterprise technology strategy",
  "Cybersecurity governance",
  "Digital service modernization",
  "Operational transformation",
  "Cloud and hybrid environments",
  "Data visibility and executive reporting",
  "Vendor, procurement, and resource leadership",
] as const;

const EXPERIENCE = [
  {
    role: "Director of Information Technology and Digital Transformation",
    organization:
      "College of Science, Technology and Applied Arts of Trinidad and Tobago",
    period: "January 2006 - Present",
    summary:
      "Executive leadership for multi-campus enterprise technology operations, cybersecurity governance, cloud services, digital infrastructure, and AI-enabled modernization.",
  },
  {
    role: "Help Desk / Support Technician / Analyst",
    organization: "Software Technology Limited",
    period: "January 2005 - January 2006",
    summary:
      "Enterprise technical support, systems deployment, troubleshooting, operational support, and vendor escalation.",
  },
  {
    role: "Helpdesk Analyst",
    organization: "Scotiabank",
    period: "January 2003 - January 2005",
    summary:
      "Banking technology support across workstation deployment, issue tracking, operational support, and systems administration.",
  },
  {
    role: "Assistant System Administrator",
    organization: "Hadco Limited",
    period: "January 2002 - January 2003",
    summary:
      "Network administration, VoIP deployment support, desktop services, and infrastructure troubleshooting.",
  },
] as const;

const EDUCATION = [
  "Master of Science (MSc) Artificial Intelligence, University of York, 2025",
  "Bachelor of Science (BSc) Computer Science, University of Southampton",
] as const;

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.legalName,
  alternateName: PROFILE.name,
  url: PROFILE.website,
  image: `${PROFILE.website}/headshot.jpg`,
  jobTitle: "Director of Information Technology and Digital Transformation",
  email: `mailto:${PROFILE.email}`,
  telephone: PROFILE.phoneTel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tacarigua",
    addressCountry: "TT",
  },
  sameAs: [PROFILE.linkedin],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of York",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Southampton",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence Strategy",
    "Digital Transformation",
    "Cybersecurity Governance",
    "Enterprise Technology Strategy",
    "Operational Modernization",
    "Cloud Services",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03060b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative isolate min-h-[88vh] border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#03060b_0%,#07111f_42%,#02050a_100%)]" />
        <div className="executive-grid absolute inset-0 -z-10 opacity-35" />
        <div className="network-sweep absolute right-0 top-0 -z-10 h-full w-full opacity-70" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(3,6,11,0),#03060b)]" />

        <div className="mx-auto grid min-h-[88vh] w-full max-w-7xl items-center gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:px-14">
          <div className="max-w-4xl pt-6">
            <p className="animate-rise text-sm font-semibold uppercase tracking-[0.34em] text-[#d6ae5f]">
              Executive Technology Leadership
            </p>
            <h1
              aria-label="DARREN HEADLEY"
              className="animate-rise mt-4 text-[clamp(3.5rem,8.6vw,6.8rem)] font-semibold leading-[0.9] tracking-[0] text-white [animation-delay:80ms]"
            >
              DARREN
              <span className="block text-[#d6ae5f]">HEADLEY</span>
            </h1>
            <p className="animate-rise mt-6 text-[clamp(1.25rem,2.1vw,1.7rem)] font-semibold uppercase tracking-[0.12em] text-white [animation-delay:160ms]">
              {PROFILE.title}
            </p>
            <p className="animate-rise mt-4 max-w-3xl text-lg leading-8 text-slate-300 [animation-delay:240ms] sm:text-xl">
              {PROFILE.supportingLine}
            </p>

            <div className="animate-rise mt-6 flex flex-wrap gap-3 [animation-delay:320ms]">
              {IMPACT_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="border border-[#d6ae5f]/45 bg-[#d6ae5f]/10 px-4 py-2 text-sm font-medium text-[#f4d998]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="animate-rise mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:400ms]">
              <a
                className="inline-flex items-center justify-center border border-[#d6ae5f] bg-[#d6ae5f] px-5 py-3 text-sm font-semibold text-[#05070d] transition hover:bg-[#f0ca78]"
                href={PROFILE.cvHref}
                download
              >
                Download Executive CV
              </a>
              <a
                className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d6ae5f] hover:text-[#f4d998]"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d6ae5f] hover:text-[#f4d998]"
                href={ADVISORY_OUTLOOK_URL}
                target="_blank"
                rel="noreferrer"
              >
                Email for Speaking & Advisory
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto xl:max-w-md">
            <div className="absolute -inset-4 border border-[#d6ae5f]/20" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-white/5">
              <Image
                src="/headshot.jpg"
                alt="Darren Headley"
                fill
                className="object-cover object-[50%_8%]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(3,6,11,0),rgba(3,6,11,0.94))] p-5">
                <p className="text-sm font-semibold text-[#f4d998]">
                  Director at COSTAATT
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                  AI | Cybersecurity | Transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03060b] px-6 py-20 sm:px-10 lg:px-14" id="signature-wins">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
              Signature Wins
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[0] text-white sm:text-5xl">
              Transformation outcomes with executive-level visibility.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              A portfolio of AI, digital service, cybersecurity, and operational modernization initiatives framed around enterprise impact.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {SIGNATURE_WINS.map((win, index) => (
              <article
                key={win.title}
                className="group min-h-56 bg-[#07101d] p-6 transition hover:bg-[#0b1627]"
              >
                <p className="text-sm font-semibold text-[#d6ae5f]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-xl font-semibold text-white">
                  {win.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {win.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07101d] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
                Executive Positioning
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Strategy, governance, and operational execution in one leadership profile.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {EXECUTIVE_CAPABILITIES.map((capability) => (
                <div key={capability} className="bg-[#03060b] p-5">
                  <p className="text-base font-medium text-slate-100">
                    {capability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#03060b] px-6 py-20 sm:px-10 lg:px-14" id="case-studies">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
              Case Studies
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Leadership translated into institutional scale.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.title}
                className="border border-white/10 bg-[#07101d] p-6 transition hover:border-[#d6ae5f]/50"
              >
                <h3 className="text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <dl className="mt-7 space-y-5">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae5f]">
                      Challenge
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-300">
                      {study.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae5f]">
                      Leadership Role
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-300">
                      {study.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae5f]">
                      Outcome
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-slate-300">
                      {study.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07101d] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
              Executive Profile
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Beyond IT operations: a technology leader shaping institutional modernization.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              Strategic technology executive with more than 20 years leading enterprise IT operations, cybersecurity governance, artificial intelligence initiatives, infrastructure modernization, and institutional technology strategy.
            </p>
            <p>
              Known for connecting executive priorities with practical delivery: AI adoption, service modernization, data visibility, continuity planning, and operational resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#03060b] px-6 py-20 sm:px-10 lg:px-14" id="experience">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
                Experience
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Career foundation.
              </h2>
            </div>
            <a
              className="inline-flex w-fit items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d6ae5f] hover:text-[#f4d998]"
              href={PROFILE.cvHref}
              download
            >
              Download Full Executive CV
            </a>
          </div>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {EXPERIENCE.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="grid gap-4 py-6 md:grid-cols-[0.7fr_1.3fr]"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm text-[#d6ae5f]">{item.period}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200">
                    {item.organization}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07101d] px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
              Education
            </p>
            <ul className="mt-6 space-y-4 text-lg leading-7 text-slate-200">
              {EDUCATION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d6ae5f]">
              Contact
            </p>
            <div className="mt-6 space-y-3 text-lg text-slate-200">
              <p>{PROFILE.location}</p>
              <p>{PROFILE.phoneDisplay}</p>
              <a className="block underline decoration-[#d6ae5f]/70 underline-offset-4" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
              <a className="block underline decoration-[#d6ae5f]/70 underline-offset-4" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
