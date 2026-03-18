import { useState } from "react";
import Section from "../components/layout/Section";
import { Briefcase, Code, Database, Download, ExternalLink, Github, Play, Rocket, SendHorizonal } from "lucide-react";
import ResumePdf from "../assets/Resume.pdf";
import ProfileImg from "../assets/image/profile-image.png";
import Uniqode from "../assets/image/uniqode.png";
import AicoImage from "../assets/image/aico.png";
import GoreadImg from "../assets/image/goread.png";
import TechmarblesImg from "../assets/image/techmarbles.png";
import BookMyShowImg from "../assets/image/bookmyshow.png";
import ResumeBuilderImg from "../assets/image/resumebuilder.png";
function Card({ className = "", children }) {
    return (
        <div
            className={`rounded-xl border border-border bg-elevated shadow-sm ${className}`}
        >
            {children}
        </div>
    );
}

export default function Home() {
    const typedLine = "Hi! I'm Swati Chaudhary";
    const typedSteps = typedLine.length;

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = ResumePdf;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const expArray = [
        {
            title: 'Frontend Developer',
            year: 'Oct 2023 – Current',
            company: 'Techmarbles Web Solution Private Limited',
            location: 'Mohali, India',
            description:
                'Developing modern web applications using React.js and Next.js with reusable, responsive UI components.',
            keyPoints: (
                <ul className="text-sm text-secondary-color space-y-2 mb-4">
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Developing modern web applications using React.js and Next.js.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Building reusable UI components and responsive layouts.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Working with Shopify and WordPress for dynamic website development and implementing animations using GSAP.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Utilizing HTML, CSS, JavaScript and Git to ship production‑ready React and React Native features.
                        </span>
                    </li>
                </ul>
            ),
            skills: [
                'React.js',
                'Next.js',
                'GSAP',
                'Shopify',
                'WordPress',
                'HTML5',
                'CSS',
                'JavaScript',
                'Git',
                'React Native',
            ],
        },
        {
            title: 'Web Design Intern',
            year: 'Mar 2023 – Aug 2023',
            company: 'SWASTIK WEB TECHNOLOGY',
            location: 'Una, India',
            description:
                'Focused on frontend customization, bug fixing, and responsive website development.',
            keyPoints: (
                <ul className="text-sm text-secondary-color space-y-2 mb-4">
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Worked on frontend customization and bug fixing.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Improved UI performance and cross‑browser compatibility.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Developed responsive websites using HTML, CSS, Bootstrap, and JavaScript.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Contributed as a team member on React Native projects, delivering stable, production‑ready features.
                        </span>
                    </li>
                </ul>
            ),
            skills: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript'],
        },
        {
            title: 'Full Stack Developer Intern',
            year: 'Apr 2022 – Jan 2023',
            company: 'ALMABETTER',
            location: 'New Delhi, India (Remote)',
            description:
                'Hands‑on full‑stack internship building API‑based and React applications with a focus on clean, maintainable code.',
            keyPoints: (
                <ul className="text-sm text-secondary-color space-y-2 mb-4">
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Built a backend project, <span className="font-semibold">'BookMyShow'</span>, as an API‑based application.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Developed a front‑end project, <span className="font-semibold">'Resume Maker'</span>, using React.js.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Enhanced user experience by developing responsive web designs for seamless cross‑device compatibility.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Developed, coded, modified and debugged application programs with varying complexity and full independence.
                        </span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span><Play className="text-primary w-3 h-3" /></span>
                        <span className="flex-1">
                            Worked with senior developers and designers to implement solutions using HTML, CSS, JavaScript, and React.
                        </span>
                    </li>
                </ul>
            ),
            skills: ['React.js', 'Node.js', 'APIs', 'Responsive Design', 'HTML5', 'CSS', 'JavaScript', 'MongoDB', 'SQL'],
        },
    ];

const projects = [
        {
            title: "Uniqode",
            description:
                "UNICODE Platform – Fast, global digital experiences with dynamic QR codes, team collaboration, analytics, and integrations, trusted by top brands.",
            image: Uniqode,
            imageAlt: "Uniqode marketing platform preview",
            tags: ["React", "Bootstrap"],
            liveUrl: "https://www.uniqode.com/",
        },
        {
            title: "AICO – QR & Digital ID Platform",
            description:
                "AICO is a Shopify omnichannel platform enabling businesses to manage products, orders, and customer engagement via QR-based digital experiences with a fast, interactive UI.",
            image: AicoImage,
            imageAlt: "AIco web platform preview",
            tags: ["Shopify", "GSAP"],
            liveUrl: "https://aico.swiss/",
        },
        {
            title: "Goread.io",
            description:
                "GoreAd.io – Boost Instagram & TikTok with instant followers, likes, and views. Fast, secure, high-quality growth trusted by creators worldwide.",
            image: GoreadImg,
            imageAlt: "Goread.io website preview",
            tags: ["PHP", "HTML", "CSS", "JavaScript"],
            liveUrl: "https://goread.io/",
        },
        {
            title: "Techmarbles Web Solution",
            description:
                "TechMarbles is a professional web agency website showcasing services like web development, UI/UX design, and QA testing, along with its workflow, projects, and client feedback in a clean, modern layout.",
            image: TechmarblesImg,
            imageAlt: "Techmarbles website preview",
            tags: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
            liveUrl: "https://techmarbles.com/",
        },
        {
            title: "Book My Show",
            description:
                "API‑based movie ticket booking demo with responsive front‑end experience.",
            image: BookMyShowImg,
            imageAlt: "BookMyShow11 demo preview",
            tags: ["Node.js", "API", "HTML", "CSS", "JavaScript", "MongoDB"],
            liveUrl: "https://bookmyshow11.netlify.app/",
        },
        {
            title: "Resume Builder",
            description:
                "React‑based resume builder that generates clean, professional CV layouts.",
            image: ResumeBuilderImg,
            imageAlt: "Resume builder app preview",
            tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
            liveUrl: "https://resume-builder-cap.netlify.app/",
        },
    ];
    const skillsData = [
        {
            icon: <Code />,
            title: 'Frontend Development',
            items: [
                { name: 'React.js', level: 80 },
                { name: 'Next.js', level: 80 },
                { name: 'HTML5', level: 100 },
                { name: 'CSS', level: 100 },
                { name: 'Tailwind CSS', level: 100 },
                { name: 'JavaScript', level: 80 },
                { name: 'GSAP Animation', level: 80 },
                { name: 'Bootstrap', level: 100 },
                { name: 'Mobile-friendly Design', level: 80 },
            ],
        },
        {
            icon: <Database />,
            title: 'Backend Development',
            items: [
                { name: 'Node.js / NestJS', level: 50 },
                { name: 'PHP / MySQL', level: 40 },
                { name: 'RESTful APIs', level: 60 },
            ],
        },
        {
            title: 'Tools & Platforms',
            items: [
                { name: 'GitHub Workflows', level: 80 },
                { name: 'Shopify Development', level: 50 },
                { name: 'WordPress Customization', level: 50 },
            ],
        },
    ]

    const [visibleProjects, setVisibleProjects] = useState(3);

    return (
        <main className="bg-common">
            {/* Hero */}
            <section className="pt-28 pb-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
                    <div className="text-center">
                        <p className="font-mono text-xs tracking-widest text-primary uppercase">
                            Frontend / React JS Developer
                        </p>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary max-w-xl mx-auto leading-[60px]">
                        Designing and Building <span className="text-primary">Modern Web Experiences</span>
                        </h1>
                        <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base text-secondary">
                            Frontend developer specializing in modern, scalable web applications using React and Next.js, focused on performance, accessibility, and seamless user experiences.
                        </p>
                    </div>

                    <div className="mt-10 sm:mt-12">
                        <Card className="mx-auto max-w-3xl overflow-hidden border border-white/10 bg-gray-900/95 backdrop-blur-sm">
                            <div className="bg-gray-800/50 px-4 py-3 flex items-center justify-between border-b border-white/10">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                                    terminal — swati@portfolio
                                </div>
                                <div className="hidden md:block md:w-14"></div>
                            </div>
                            <div className="p-6 font-mono text-sm min-h-80 max-h-100 overflow-y-auto">
                                <div className="mb-4">
                                    <div className="flex gap-2 mb-2 terminal-in" style={{ "--d": "50ms" }}>
                                        <span className="text-primary">➜</span>
                                        <span className="text-accent">~</span>
                                        <span className="text-white">whoami</span>
                                    </div>
                                    <div className="pl-4 mb-2">
                                        <div className="space-y-2 text-sm text-gray-300">
                                            <p className="text-white font-bold">
                                                <span
                                                    className="typewriter align-middle"
                                                    style={{
                                                        "--d": "250ms",
                                                        "--tw-steps": typedSteps,
                                                        "--tw-ch": `${typedSteps}ch`,
                                                        "--tw-duration": "1100ms",
                                                    }}
                                                >
                                                    {typedLine}
                                                </span>
                                                <span
                                                    className="ml-1 inline-block w-2 h-5 bg-white/60 align-middle caret-hide-after"
                                                    style={{ "--hide-after": "1350ms" }}
                                                />
                                            </p>
                                            <p className="terminal-in" style={{ "--d": "1400ms" }}>
                                                Frontend / React JS Developer
                                            </p>
                                            <p className="terminal-in" style={{ "--d": "1700ms" }}>
                                                Specialized in React, Next.js, and Node.js
                                            </p>
                                            <p className="text-accent terminal-in" style={{ "--d": "2050ms" }}>
                                                🔍 Currently seeking new opportunities
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <form className="flex gap-2 terminal-in" style={{ "--d": "2450ms" }}>
                                    <span className="text-primary">➜</span>
                                    <span className="text-accent">~</span>
                                    <input className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-600" type="text" placeholder="Type 'help' for available commands..." />
                                    <span className="w-2 h-5 bg-white/60 caret"></span>
                                </form>
                                
                            </div>
                        </Card>
                    </div>
                    <div className="mt-12 flex flex-wrap gap-4 justify-center">
                        <button
                            type="button"
                            onClick={() => {
                                const el = document.getElementById("projects");
                                if (el) {
                                    el.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                            className="inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-primary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/30 px-8 py-3 text-base group"
                        >
                            <span><Rocket /></span>View Projects
                        </button>
                        <button
                            type="button"
                            onClick={handleDownloadCV}
                            className="inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer bg-elevated border border-border text-primary-color hover:bg-subtle px-8 py-3 text-base"
                        >
                            <span><Download /></span> Download CV
                        </button>
                    </div>
                </div>
            </section>

            {/* About */}
            <Section
                id="about"
                eyebrow="01."
                title="About Me"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-4 md:space-y-6">
                        <p className="text-secondary-color text-base md:text-lg leading-relaxed">
                            I'm a frontend developer passionate about creating intuitive and high-performance web experiences. With expertise in React, Next.js, and modern UI technologies, I focus on building scalable applications with clean architecture and responsive design.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-4 md:pl-6 py-2">
                            <p className="text-primary-color font-semibold text-xl italic">“Clean code is not an option, it's a standard.”</p>
                            
                        </blockquote>

                        <div className="flex gap-4 md:gap-6 pt-4">
                            {[
                                { k: "2+", v: "Years Exp" },
                                { k: "7+", v: "Projects" },
                                { k: "12+", v: "Skills" },
                            ].map((s) => (
                                <div key={s.v} className="flex flex-col items-center gap-1 md:gap-2 w-full">
                                    <span className="text-3xl md:text-4xl font-black text-primary">
                                        {s.k}
                                    </span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-tertiary-color text-center leading-tight">
                                        {s.v}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group mx-auto lg:ml-auto mt-8 lg:mt-0">
                        <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
                        <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl border-2 border-primary overflow-hidden z-10">
                        <img src={ProfileImg} alt="Swati Chaudhary" className="object-cover grayscale transition-all duration-700 ease-in-out hidden lg:block object-top w-full h-full" />
                          <img src={ProfileImg} alt="Swati Chaudhary" className="object-cover lg:absolute lg:inset-0 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-700 ease-in-out object-top w-full h-full" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border-b-2 border-r-2 border-accent rounded-br-2xl"></div>
                    </div>
                </div>
            </Section>

            {/* Experience */}
            <Section
                id="experience"
                eyebrow="02."
                title="Professional Experience"
            >
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border-strong before:to-transparent">
                    {expArray.map((i) => (
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-border-strong bg-common text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase />
                            </div>
                            <div className="rounded-xl transition-all duration-200 bg-elevated border border-border hover:border-primary/50 shadow-sm hover:shadow-md w-[calc(100%-4rem)] md:w-[45%] p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-primary-color">{i.title}</h3>
                                    <time className="font-mono text-xs text-primary font-bold">{i.year}</time>
                                </div>
                                <div className="flex flex-col gap-1 mb-4">
                                    <div className="text-accent text-sm font-mono font-bold">{i.company}</div>
                                    <div className="text-tertiary-color text-xs">{i.location}</div>
                                </div>
                                <p className="text-secondary-color text-sm mb-4 leading-relaxed">{i.description}</p>
                                {i.keyPoints}
                                <div className="flex flex-wrap gap-2">
                                    {i.skills.map((s) => (
                                        <span key={s} className="inline-flex items-center justify-center rounded font-mono uppercase transition-colors bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 text-[10px]">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Skills */}
            <Section
                id="skills"
                eyebrow="03."
                title="Skills Inventory"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((col, index) => (
                        <Card key={col.title} className="rounded-xl transition-all duration-200 bg-elevated border border-color hover:border-primary/50 shadow-sm hover:shadow-md p-6 md:p-8 space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                {col.icon && (
                                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                        {col.icon}
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-primary-color uppercase tracking-wider">
                                    {col.title}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {col.items.map((item) => {
                                    const skillName = typeof item === 'string' ? item : item.name;
                                    const skillLevel = typeof item === 'string' ? 75 : item.level;
                                    const key = typeof item === 'string' ? item : item.name;
                                    
                                    return (
                                        <li key={key} className="space-y-2">
                                            <div className="flex justify-between items-center text-xs font-mono">
                                                <span className="text-secondary font-medium">
                                                    {skillName}
                                                </span>
                                                <span className="text-accent font-bold">
                                                    {skillLevel}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${skillLevel}%` }}
                                                />
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Projects */}
            <Section
                id="projects"
                eyebrow="04."
                title="Featured Projects"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, visibleProjects).map((project) => (
                        <Card
                            key={project.title}
                            className="group relative overflow-hidden rounded-2xl border border-color bg-elevated hover:border-primary/50 transition-all flex flex-col"
                        >
                            {/* Image / preview area */}
                            <div className="relative w-full h-48 md:h-64 shrink-0">
                               <img src={project.image} alt={project.imageAlt} className="object-cover group-hover:scale-105 transition-transform duration-500 w-full h-full" />
                            </div>

                            <div className="flex flex-col flex-1 p-6">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center justify-center rounded font-mono uppercase transition-colors bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 text-[10px]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & description */}
                            
                                    <h3 className="font-bold text-primary-color text-xl mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary-color text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>
                               

                                {/* Actions */}
                                <div className="flex gap-3 mt-auto">
                                
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all text-sm font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Live
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                {visibleProjects < projects.length && (
                    <div className="mt-6 flex justify-center">
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleProjects((prev) =>
                                    Math.min(prev + 3, projects.length)
                                )
                            }
                            className="px-6 py-2 rounded-lg bg-elevated border border-border text-sm font-semibold text-text-primary hover:bg-subtle hover:border-primary transition-colors"
                        >
                            Load more
                        </button>
                    </div>
                )}
            </Section>

            {/* Contact */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center mb-10">
                    <p className="font-mono text-primary text-sm">
                        05. What's next?
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black text-primary-color uppercase tracking-tight">
                        GET IN TOUCH
                    </h2>
                    <p className="text-secondary-color text-lg">
                        My inbox is always open. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                </div>

                <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/95 backdrop-blur-sm">
                        {/* Window header */}
                        <div className="bg-gray-800/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                <span className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                                New Message — contact.sh
                            </div>
                            <div className="hidden md:block md:w-12" />
                        </div>

                        {/* Body */}
                        <form className="p-8 space-y-6">
                            {/* Name */}
                            <div className="space-y-2 text-left">
                                <p className="flex gap-2 text-gray-400 text-sm uppercase font-mono">
                                    Contact: Name
                                </p>
                                <div className="flex items-center gap-2 border-b border-white/20 pb-2">
                                    <span className="text-primary font-mono">➜</span>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-gray-600 font-mono"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="space-y-2 text-left">
                                <p className="flex gap-2 text-gray-400 text-sm uppercase font-mono">
                                    Contact: Email
                                </p>
                                <div className="flex items-center gap-2 border-b border-white/20 pb-2">
                                    <span className="text-primary font-mono">➜</span>
                                    <input
                                        type="email"
                                        placeholder="your-email@example.com"
                                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-gray-600 font-mono"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2 text-left">
                                <p className="flex gap-2 text-gray-400 text-sm uppercase font-mono">
                                    Contact: Message
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-primary font-mono mt-1">➜</span>
                                    <textarea
                                        rows={4}
                                        placeholder="Type your message here..."
                                        className="flex-1 bg-transparent border-none p-0 focus:ring-0 text-white placeholder:text-gray-600 font-mono resize-none"
                                    />
                                </div>
                            </div>

                            {/* Button */}
                                <button
                                    type="button"
                                    className="cursor-pointer w-full py-4 bg-primary rounded-lg text-white font-black uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <SendHorizonal className="w-5 h-5" />
                                    Execute Send
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

