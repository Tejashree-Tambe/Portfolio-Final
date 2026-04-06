import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Code2,
  LineChart,
  Mail,
  MapPin,
  Sparkles,
  Stars,
  Trophy,
  User,
  Wand2,
} from "lucide-react";

const skills = [
  {
    title: "Program Management",
    icon: Briefcase,
    items: [
      "Requirement Gathering",
      "Product Thinking & Roadmapping",
      "User Flow Design & UI/UX Analysis",
      "Stakeholder Management",
      "Client Communication",
    ],
  },
  {
    title: "AI Systems Understanding",
    icon: Brain,
    items: [
      "GCP",
      "GenAI & Agentic AI workflows",
      "RAG",
      "GraphRAG",
      "Vector databases & retrieval pipelines",
    ],
  },
  {
    title: "Data Analysis",
    icon: LineChart,
    items: [
      "Data Mining",
      "Machine Learning",
      "Data Visualization",
      "KPI Tracking",
      "NPS, CSAT, Delivery Metrics, Adoption, ARPU",
    ],
  },
  {
    title: "Engineering & Web",
    icon: Code2,
    items: [
      "C, C++, Java, Python, SQL, JavaScript",
      "HTML, CSS, JavaScript",
      "React, Django, Flask, Express.js",
    ],
  },
];

const experience = [
  {
    company: "Quantiphi Analytics",
    role: "Senior Business Analyst",
    duration: "Apr 2024 – Present",
    accent: "from-fuchsia-500/30 via-violet-500/25 to-cyan-400/25",
    story:
      "I work where structure meets speed: part business analyst, part product thinker, part AI delivery enabler. My recent work has centered on GenAI and agentic AI programs that needed more than momentum—they needed clarity, governance, and a way to scale without drama. I introduced structured tracking and sharper delivery visibility so teams could move faster with fewer blind spots, while still keeping quality and stakeholder confidence intact. The result was stronger compliance, calmer execution, and a lot fewer surprises dressed up as urgency.",
    highlights: [
      "Managed GenAI and agentic AI workloads with structured governance and tracking.",
      "Improved delivery visibility while maintaining zero major escalations.",
      "Strengthened tracking compliance to 90%.",
      "Built WBR, MBR, and QBR narratives across 6 workstreams using data analysis and UI/UX insight.",
      "Led a 4-member hackathon team to 1st place out of 20 teams.",
      "Recognized with #Inspire (Aug ’25), Ninja Kaizen (H1 2025), and Best Team (H1 2025).",
    ],
  },
  {
    company: "Digichefs",
    role: "Data Science Intern",
    duration: "Jun 2023 – Mar 2024",
    accent: "from-cyan-500/30 via-sky-500/20 to-emerald-400/20",
    story:
      "At Digichefs, I learned how to turn data from dashboards into decisions that actually changed business outcomes. I worked with behavioral and transaction data to identify valuable customer segments, predict churn, and improve conversion efficiency. It was the kind of experience that taught me machine learning is most useful when it stops trying to impress and starts helping teams decide what to do next.",
    highlights: [
      "Used K-means and Hierarchical Clustering to identify high-value customer segments.",
      "Supported targeted campaigns that improved engagement and ROI by 20%.",
      "Built Random Forest and XGBoost models for lead scoring and churn reduction.",
      "Improved conversion accuracy by 15% and streamlined A/B testing decisions.",
    ],
  },
];

const projects = [
  {
    name: "AstraShield",
    date: "Sep 2025",
    link: "#",
    description:
      "AstraShield is an agentic AI system built to detect fraudulent ‘help’ resources such as QR codes, flyers, NGO posters, and other trust-sensitive media using multimodal extraction, verification workflows, and explainable risk scoring.",
    bullets: [
      "Led a team of 4 in a high-intensity hackathon environment.",
      "Designed an image → extraction → verification → risk scoring pipeline.",
      "Used LLM workflows with external trust checks including domain lookup, scam databases, and registry validation.",
      "Reduced manual validation effort by 20–30%.",
      "Shortlisted in the top 3,000 teams out of 200,000+ participants at MumbaiHacks 2025.",
    ],
    badge: "AI + Trust Systems",
  },
  {
    name: "SocioCom",
    date: "Sep 2021",
    link: "#",
    description:
      "SocioCom blended a reels-style experience with an e-commerce layer so vendors could connect audience engagement with smarter business actions. It was built as both a technical prototype and a product-thinking exercise.",
    bullets: [
      "Built two portals: E-Commerce + Reels.",
      "Developed an ML workflow to extract reel insights and generate vendor recommendations.",
      "Secured 5th place out of 120 teams at TSEC Hackathon 2021.",
      "Created the frontend using HTML/CSS and React.",
      "Reduced storage costs by 30% by shifting extracted visual data to Cloudinary.",
    ],
    badge: "Product + Frontend + ML",
  },
];

const certifications = ["Google Cloud Certification"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function GlowBlob({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-40 ${className}`} aria-hidden="true" />;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/65 backdrop-blur">
        <Stars className="h-3.5 w-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/70 md:text-lg">{subtitle}</p>
    </div>
  );
}

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-[#070711] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,70,239,0.10),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_25%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.10),transparent_30%)]" />
        <GlowBlob className="left-[-6rem] top-[-3rem] h-72 w-72 bg-fuchsia-500/20" />
        <GlowBlob className="right-[5%] top-[12%] h-80 w-80 bg-cyan-400/20" />
        <GlowBlob className="left-[35%] bottom-[5%] h-96 w-96 bg-violet-500/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.18]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-4 z-40 mb-10 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-sm font-bold shadow-lg shadow-fuchsia-500/20">
              TT
            </div>
            <div>
              <p className="text-sm font-medium text-white">Tejashree Tambe</p>
              <p className="text-xs text-white/55">Sr. Business Analyst • AI Systems • Product Thinking</p>
            </div>
          </div>
          <nav className="hidden gap-5 text-sm text-white/70 md:flex">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </motion.header>

        <section className="grid min-h-[86vh] items-center gap-10 lg:grid-cols-[1.2fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Engineering Mind. Product Eye. AI-first Execution.
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              I build thoughtful,
              <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent"> visually compelling </span>
              digital work at the intersection of business, AI, and Product Strategy.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              From engineering roots to business analysis and AI program execution, I work where business goals, AI systems, and structured execution meet — and make the intersection look good.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "GenAI / Agentic AI",
                "Product Storytelling",
                "Data + Decision Systems",
                "UI/UX-aware Thinking",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur transition hover:border-fuchsia-400/30 hover:bg-white/10"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["2+", "Years across analysis, GenAI, Agentic AI, and product-facing execution"],
                ["1st", "Place in a 24-hour hackathon with a 4-member team - Nov 2025 (Quantiphi Analytics)"],
                ["Top 3K", "MumbaiHacks 2025 out of 200,000+ participants - Oct 2025 (Mumbai Hacks - Corporate Track)"],
              ].map(([stat, desc]) => (
                <div key={stat} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">{stat}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-cyan-400/25 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d18] p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />

                <div className="relative grid gap-4">
                  <div className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-white/45">Live Identity Card</p>
                      <h3 className="mt-3 text-2xl font-semibold">Tejashree Tambe</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">
                        Senior Business Analyst with an engineering background, business depth, and a healthy obsession with elegant systems.
                      </p>
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10">
                      <Brain className="h-9 w-9 text-fuchsia-200" />
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#121226] to-[#0d1020] p-3">
                    <img
                      src="profile.jpg"
                      alt="Profile"
                      className="h-[420px] w-full rounded-[1.25rem] object-cover"
                    />
                    {/* <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                      <p className="text-sm text-white/70">Business, AI, and everything in between</p>
                      <p className="mt-1 text-lg font-medium">I work where business goals, AI systems, and structured execution meet — and make the intersection look good.</p>
                    </div> */}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm text-white/55">
                        <Wand2 className="h-4 w-4" />
                        Design energy
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-400" />
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-400" />
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-3 flex items-center gap-2 text-sm text-white/55">
                        <Trophy className="h-4 w-4" />
                        Quick signal
                      </div>
                      <p className="text-lg font-semibold text-white">Builder of structured chaos</p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        Equal parts analytics, product instinct, and presentation polish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <SectionTitle
              eyebrow="About"
              title="Not just another analyst with a dashboard."
            />
            <div className="space-y-4 text-white/72 leading-8">
              <p>
                I come from an engineering background, but I’ve never believed good work should feel mechanical. My style sits at the intersection of structured thinking, business context, technical capability and design sensitivity - 
                translating ambiguity into clear direction and aligning teams around solutions that are both practical and scalable.
              </p>

              <p>
                In the GenAI and agentic AI space, I focus on turning capability into usability. 
                That means defining how AI systems fit into real business processes, ensuring they are understandable, 
                adoptable, and aligned with outcomes rather than just experimentation. 
                I work across product, data, engineering, and business teams to translate evolving AI workflows into 
                structured execution, with clear metrics, visibility, and accountability.
                I enjoy working in environments where things are not fully defined yet. 
                That’s where strong problem-solving, structured thinking, and alignment can create the most value — 
                turning uncertainty into direction, and direction into execution. 
              </p>              
              <p>
                Over time, I’ve grown into roles that require both detail and direction: analyzing data, shaping narratives, 
                improving decision-making, and making complex work look much clearer than it felt behind the scenes. 
                This allows me to move beyond analysis into designing solutions that improve decision-making, streamline execution, 
                and drive measurable impact.I enjoy solving ambiguous problems that lead to building polished outputs.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/45"></p>
            <div className="rounded-[1.5rem] border border-dashed border-white/15 bg-black/10 p-6">
              <p className="text-base leading-8 text-white/72">
I’m a Senior Business Analyst working at the intersection of AI, product thinking, and execution, where I translate complex technical systems into meaningful business outcomes.
<br></br><br></br>
Over the past few years, I’ve grown beyond traditional BA responsibilities to operate more like a bridge between strategy and delivery—managing multiple workstreams, driving stakeholder alignment, and crafting executive narratives that make even the most complex AI systems easy to understand (and act on). From GenAI and Agentic AI use cases to production-level deployments on cloud, I’ve had the opportunity to work closely with engineering teams and understand how modern AI products are actually built and scaled.
<br></br><br></br>
What I enjoy most is bringing structure to chaos—whether it’s setting up governance for fast-moving projects, improving tracking and visibility, or turning raw technical outputs into clear, compelling stories for decision-makers.
<br></br><br></br>
I actively follow the tech and AI ecosystem and enjoy staying close to emerging trends. Hackathons have been a big part of my journey—from participating during my college days to representing my company in high-intensity, 24-hour builds—giving me a hands-on way to explore ideas, solve problems, and collaborate under pressure.
<br></br><br></br>
I’m also deeply interested in the future of AI-driven products and how they can solve real-world problems at scale. Lately, I’ve been investing in upskilling myself in GenAI, system design concepts like RAG and vector databases, and product strategy, with a long-term goal of building impactful AI-led solutions.
<br></br><br></br>
Outside of work, you’ll most likely find me listening to music, dancing, or decoding lyrics like they’re business problems—because good rhythm and good systems have one thing in common: they both need the right flow.              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-28"
        >
          <SectionTitle
            eyebrow="Experience"
            title="Career chapters, told like stories—not bullet survivors."
            subtitle=""
          />

          <div className="space-y-8">
            {experience.map((item) => (
              <div
                key={item.company}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-white/50">{item.duration}</p>
                    <h3 className="mt-3 text-3xl font-semibold">{item.role}</h3>
                    <p className="mt-2 text-lg text-white/75">{item.company}</p>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-white/80">{item.story}</p>
                    <div className="mt-6 grid gap-3">
                      {item.highlights.map((point) => (
                        <div key={point} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/72">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-28"
        >
          <SectionTitle
            eyebrow="Projects"
            title="The fun part: things I built when curiosity got serious."
            subtitle="A mix of AI systems, product thinking, hackathon pressure, and frontend execution."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.a
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                key={project.name}
                href={project.link}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fuchsia-100">
                      {project.badge}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-1 text-sm text-white/45">{project.date}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/45 transition group-hover:text-white" />
                </div>
                <p className="text-base leading-7 text-white/72">{project.description}</p>
                <div className="mt-5 space-y-3">
                  {project.bullets.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/68">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-28"
        >
          <SectionTitle
            eyebrow="Skills"
            title="The toolkit behind the thinking."
            subtitle="A balanced profile across program management, AI systems, data analysis, and engineering foundations."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/15">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                  <div className="mt-5 space-y-3">
                    {skill.items.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm leading-6 text-white/68">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-28 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <SectionTitle
              eyebrow="Certification"
              title="Signals of intent"
              subtitle="Not just learning for the resume—learning to build better systems."
            />
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Design notes</p>
            <div className="mt-5 space-y-4 text-white/72 leading-8">
              <p>
                This layout uses neon-soft gradients, glassmorphism cards, layered blur, grid textures, and motion-led transitions to create a portfolio that feels modern, premium, and personality-rich.
              </p>
              <p>
                For an even stronger result, add your real GitHub links, LinkedIn, a polished portrait, and micro-interactions such as cursor glow, section parallax, and hover trails.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-28"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">Contact</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                  Let’s build something smart,
                  <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-200 bg-clip-text text-transparent"> useful, and impossible to ignore.</span>
                </h2>
                <div className="mt-6 flex flex-col gap-3 text-white/70">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4" />
                    your.email@example.com
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" />
                    Mumbai, India
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4" />
                    Add LinkedIn • GitHub • Resume button here
                  </div>
                </div>
              </div>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02]"
              >
                Say hello
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}


// export default function App() {
//   return (
//     <div style={{padding: "40px"}}>
//       <h1 style={{fontSize: "40px"}}>Your Portfolio</h1>
//       <p>Edit this file to customize your portfolio.</p>
//     </div>
//   )
// }


