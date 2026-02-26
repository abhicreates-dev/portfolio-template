import { useState } from 'react';

type Experience = {
    logo: string;          // emoji or image URL
    logoIsEmoji?: boolean;
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
    tags: string[];
};

const experiences: Experience[] = [
    {
        logo: 'https://cdn.worldvectorlogo.com/logos/freelancer-1.svg',
        logoIsEmoji: false,
        company: 'Freelance',
        role: 'Full Stack Developer',
        period: 'Jan, 2025 - Present',
        location: 'Remote',
        bullets: [
            'Built and shipped production full-stack apps for clients across fintech and SaaS.',
            'Architected REST and WebSocket APIs in TypeScript with strict type safety end-to-end.',
            'Owned deployments — Docker, Nginx, CI/CD pipelines, and cloud infra from scratch.',
        ],
        tags: ['TypeScript', 'Node.js', 'React', 'PostgreSQL', 'Docker', 'Nginx'],
    },
    {
        logo: 'https://cdn-icons-png.flaticon.com/512/888/888868.png',
        logoIsEmoji: false,
        company: 'Open Source',
        role: 'Contributor',
        period: 'Jun, 2024 - Present',
        location: 'Remote',
        bullets: [
            'Contributed features and bug fixes to popular open-source TypeScript/Rust projects.',
            'Improved documentation and onboarding guides adopted by hundreds of developers.',
            'Reviewed PRs and mentored new contributors on best practices.',
        ],
        tags: ['Rust', 'TypeScript', 'GitHub Actions', 'Open Source'],
    },

];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section className="px-5 pb-5">
            <div className="border border-black/15 dark:border-white/10 divide-y divide-black/15 dark:divide-white/10">
                {experiences.map((exp, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div key={exp.company}>
                            {/* ── Header row — always visible, clickable ── */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center text-left cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-150"
                            >
                                {/* Logo — flush left, black bg, border-right, no padding (mirrors SocialLink) */}
                                <div className="shrink-0 w-16 h-16 bg-black flex items-center justify-center border-r border-black/15 dark:border-white/10 select-none">
                                    {exp.logoIsEmoji ? (
                                        <span className="text-2xl">{exp.logo}</span>
                                    ) : (
                                        <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain" />
                                    )}
                                </div>

                                {/* Company + role */}
                                <div className="flex-1 min-w-0 px-4 py-4">
                                    <p className="font-medium text-lg text-gray-900 dark:text-gray-100 leading-tight">{exp.company}</p>
                                    <p className="text-xs font-light text-gray-500 dark:text-gray-400 mt-0.5">{exp.role}</p>
                                </div>

                                {/* Date + location + chevron */}
                                <div className="flex items-center gap-3 shrink-0 pr-4">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 leading-tight">{exp.period}</p>
                                        <p className="text-xs font-light text-gray-500 dark:text-gray-400 mt-0.5">{exp.location}</p>
                                    </div>
                                    {/* Chevron */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </button>

                            {/* ── Accordion body — grid trick for smooth height animation ── */}
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <div className="px-5 pb-5 pt-1 border-t border-black/10 dark:border-white/[0.07]">
                                        {/* Mobile: date + location shown here */}
                                        <p className="sm:hidden text-xs text-gray-500 dark:text-gray-400 mb-3">
                                            {exp.period} · {exp.location}
                                        </p>

                                        {/* Bullet points */}
                                        <ul className="space-y-2 mb-4">
                                            {exp.bullets.map((b) => (
                                                <li key={b} className="flex items-start gap-2 text-sm font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    <span className="mt-[5px] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-0.5 text-[0.7rem] font-medium border border-black/20 dark:border-white/15 text-gray-600 dark:text-gray-400 rounded-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
