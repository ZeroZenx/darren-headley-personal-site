import Image from "next/image";

const PROFILE = {
  name: "DARREN RICHARD KERN HEADLEY",
  title:
    "Director of Information Technology and Digital Transformation",
  location: "Tacarigua, Trinidad and Tobago",
  email: "darren_headley@hotmail.com",
  phoneDisplay: "751-0325",
  phoneTel: "+18687510325",
  linkedin: "https://www.linkedin.com/in/darren-headley-2278671b5/",
  cvHref: "/darren-richard-kern-headley-executive-cv-2026.pdf",
};

const PROFESSIONAL_PROFILE = [
  "Strategic technology executive with more than 20 years of experience leading enterprise IT operations, cybersecurity governance, artificial intelligence initiatives, infrastructure modernization, digital transformation, and institutional technology strategy.",
  "Experienced in aligning technology operations with organizational objectives through innovation, operational leadership, AI adoption, enterprise systems management, process automation, and service delivery transformation.",
  "Proven track record leading multi-campus technology environments, enterprise modernization initiatives, disaster recovery programs, cybersecurity operations, AI-enabled services, and operational transformation projects within higher education and enterprise environments.",
  "Recognized for executive leadership, stakeholder engagement, operational resilience, AI transformation initiatives, infrastructure governance, and technology strategy development.",
] as const;

const CORE_COMPETENCIES = [
  "Artificial Intelligence Strategy and Adoption",
  "Digital Transformation Leadership",
  "Enterprise IT Operations",
  "Cybersecurity Governance",
  "Data Analytics and Reporting",
  "IT Governance and Compliance",
  "Infrastructure Architecture",
  "Disaster Recovery and Business Continuity",
  "Enterprise Systems Management",
  "Cloud and Hybrid Environments",
  "Strategic Technology Planning",
  "Vendor and Procurement Management",
  "Process Automation",
  "Enterprise Networking",
  "Operational Leadership",
  "Team Development and Mentorship",
  "Budget and Resource Management",
  "Stakeholder Engagement",
  "Service Delivery Management",
  "Institutional Technology Leadership",
] as const;

const KEY_RESPONSIBILITIES_AND_ACHIEVEMENTS = [
  "Lead institutional technology strategy aligned with operational and organizational goals.",
  "Direct enterprise IT operations supporting multiple campuses, administrative services, academic platforms, and institutional digital services.",
  "Oversee technology teams responsible for systems administration, network operations, cybersecurity, infrastructure support, enterprise applications, and help desk operations.",
  "Lead institutional digital transformation initiatives focused on operational modernization, automation, AI adoption, and service optimization.",
  "Spearheaded implementation of AI-enabled operational services including chatbot technologies, automated communication systems, workflow automation, and AI-assisted administrative solutions.",
  "Directed enterprise infrastructure modernization initiatives involving virtualization platforms, cybersecurity systems, wireless infrastructure, VoIP platforms, cloud services, and disaster recovery solutions.",
  "Managed enterprise cybersecurity operations including infrastructure hardening, incident response coordination, identity management initiatives, access governance, and operational security improvements.",
  "Directed disaster recovery and business continuity initiatives involving enterprise backup modernization, replication environments, recovery planning, and operational resilience programs.",
  "Managed enterprise infrastructure platforms including Fortinet security environments, CrowdStrike, Darktrace, Microsoft 365 services, Veeam backup environments, virtualization platforms, enterprise networking, CCTV systems, and identity management services.",
  "Led institutional AI awareness and transformation initiatives involving executive leadership, faculty engagement, staff training, and operational automation strategies.",
  "Collaborated with executive leadership on institutional strategy, governance, budgeting, procurement planning, operational modernization, and enterprise transformation initiatives.",
  "Managed enterprise technology procurement activities, vendor negotiations, contract evaluations, and strategic technology partnerships.",
  "Directed implementation of Microsoft 365 automation services including Power Automate workflows, SharePoint solutions, automated document generation systems, and operational process improvements.",
  "Developed operational reporting frameworks, KPI dashboards, analytics reporting structures, and executive technology reporting systems.",
  "Coordinated enterprise systems integration initiatives involving ERP systems, authentication platforms, cloud technologies, learning management systems, and operational support environments.",
  "Led multi-campus technical operations supporting academic continuity, enterprise services, and institutional operational requirements.",
  "Supervise and mentor multidisciplinary technology teams supporting institutional technology operations and enterprise service delivery.",
] as const;

const AI_AND_DIGITAL_TRANSFORMATION = [
  "Led institutional AI adoption initiatives supporting operational efficiency and service modernization.",
  "Directed implementation of AI-assisted communication and workflow automation systems.",
  "Designed AI-enabled operational strategies for higher education administration and student engagement.",
  "Led strategic discussions surrounding AI governance, responsible AI usage, and institutional AI policy frameworks.",
  "Delivered AI awareness and adoption initiatives for staff, faculty, and institutional stakeholders.",
  "Managed implementation of AI-powered automation tools using Microsoft 365 and enterprise workflow platforms.",
  "Supported AI integration initiatives involving chatbot technologies, process automation, and analytics-driven operational improvements.",
] as const;

const TECHNOLOGY_LEADERSHIP_HIGHLIGHTS = [
  "Directed modernization of enterprise learning management systems and digital learning environments.",
  "Managed enterprise cybersecurity initiatives and infrastructure resilience programs.",
  "Led deployment of campus-wide wireless modernization projects.",
  "Directed implementation of enterprise backup and disaster recovery environments.",
  "Oversaw modernization of enterprise authentication and identity management systems.",
  "Coordinated institution-wide infrastructure support operations across multiple campuses.",
  "Supported enterprise cloud modernization and digital service delivery initiatives.",
] as const;

const EXPERIENCE = [
  {
    role: "Director of Information Technology and Digital Transformation",
    organization:
      "College of Science, Technology and Applied Arts of Trinidad and Tobago",
    period: "January 2006 - Present",
    detail:
      "Provide executive leadership for enterprise technology operations across a multi-campus higher education institution supporting academic systems, cybersecurity operations, digital infrastructure, enterprise applications, cloud services, and institutional transformation initiatives.",
  },
  {
    role: "Help Desk / Support Technician / Analyst",
    organization: "Software Technology Limited",
    period: "January 2005 - January 2006",
    bullets: [
      "Delivered enterprise technical support services and systems troubleshooting.",
      "Assisted with systems deployment, implementation support, and issue resolution activities.",
      "Participated in systems development initiatives and operational technology support.",
      "Coordinated vendor engagement and technical escalation activities.",
    ],
  },
  {
    role: "Helpdesk Analyst",
    organization: "Scotiabank",
    period: "January 2003 - January 2005",
    bullets: [
      "Delivered enterprise technical support services within banking operations.",
      "Supported workstation deployment, troubleshooting, operational support, and systems administration activities.",
      "Managed technical issue tracking and operational support services.",
    ],
  },
  {
    role: "Assistant System Administrator",
    organization: "Hadco Limited",
    period: "January 2002 - January 2003",
    bullets: [
      "Assisted with enterprise network administration and infrastructure support.",
      "Supported deployment of VoIP systems and operational technology services.",
      "Managed desktop support and infrastructure troubleshooting activities.",
    ],
  },
] as const;

const EDUCATION = [
  {
    degree: "Master of Science (MSc) Artificial Intelligence",
    institution: "University of York",
    date: "Graduated: 2025",
  },
  {
    degree: "Bachelor of Science (BSc) Computer Science",
    institution: "University of Southampton",
    date: "",
  },
] as const;

const CERTIFICATIONS = [
  "ITIL Foundation",
  "CompTIA Network+",
  "Linux+",
  "HP ATA Connected Devices",
] as const;

const TECHNOLOGIES_AND_PLATFORMS = [
  "Microsoft 365",
  "Azure and Cloud Services",
  "Fortinet Security Solutions",
  "CrowdStrike",
  "Darktrace",
  "Veeam Backup and Replication",
  "VMware Virtualization",
  "Active Directory",
  "SharePoint",
  "Microsoft Teams",
  "Power Automate",
  "Enterprise Networking",
  "VoIP Systems",
  "Cybersecurity Operations",
  "AI and Automation Platforms",
  "Learning Management Systems",
  "Enterprise Infrastructure Platforms",
] as const;

const PROFESSIONAL_STRENGTHS = [
  "Executive Leadership",
  "Strategic Planning",
  "AI Transformation",
  "Cybersecurity Governance",
  "Digital Innovation",
  "Operational Excellence",
  "Team Leadership",
  "Institutional Modernization",
  "Technology Governance",
  "Stakeholder Communication",
  "Enterprise Service Delivery",
  "Cross-Functional Collaboration",
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
                alt="Darren Richard Kern Headley"
                fill
                className="object-cover object-[50%_8%]"
                priority
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {PROFILE.location}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
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
              download
            >
              Download Executive CV
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
          <h2 className="text-xl font-semibold">Professional Profile</h2>
          <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
            {PROFESSIONAL_PROFILE.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Core Competencies</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            {CORE_COMPETENCIES.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Professional Experience</h2>
            <a
              className="text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
              href={PROFILE.cvHref}
              download
            >
              Download Full Executive CV
            </a>
          </div>

          <div className="mt-5 space-y-4">
            {EXPERIENCE.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <h3 className="text-base font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.organization}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {item.period}
                </p>
                {"detail" in item ? (
                  <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                    {item.detail}
                  </p>
                ) : null}
                {"bullets" in item ? (
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="text-zinc-500">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Key Responsibilities and Achievements</h2>
          <ul className="mt-4 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
            {KEY_RESPONSIBILITIES_AND_ACHIEVEMENTS.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">AI and Digital Transformation Leadership</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {AI_AND_DIGITAL_TRANSFORMATION.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-zinc-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Technology Leadership Highlights</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {TECHNOLOGY_LEADERSHIP_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-zinc-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Education</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
              {EDUCATION.map((item) => (
                <li key={item.degree}>
                  <p className="font-semibold">{item.degree}</p>
                  <p className="text-zinc-600 dark:text-zinc-400">{item.institution}</p>
                  {item.date ? (
                    <p className="text-zinc-600 dark:text-zinc-400">{item.date}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Certifications</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {CERTIFICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Technologies and Platforms</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              {TECHNOLOGIES_AND_PLATFORMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-xl font-semibold">Professional Strengths</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {PROFESSIONAL_STRENGTHS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-500">
              References: Available upon request.
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
