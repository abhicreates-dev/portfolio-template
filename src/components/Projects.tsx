type Project = {
    title: string;
    description: string;
    status: 'Live' | 'Building';
    image: string;
    accent: string;
    href: string;
};

const projects: Project[] = [
    {
        title: 'DevCircle',
        description: 'A social platform where developers share projects, ideas, and grow together.',
        status: 'Live',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
        accent: '#1a1a2e',
        href: '#',
    },
    {
        title: 'Asap',
        description: 'Record studio-quality remote audio and video, locally captured without quality loss.',
        status: 'Building',
        image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80',
        accent: '#0d1117',
        href: '#',
    },
    {
        title: 'PulseDB',
        description: 'Real-time database introspection and query analytics built for backend engineers.',
        status: 'Live',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
        accent: '#0f2027',
        href: '#',
    },
    {
        title: 'Lunel',
        description: 'Type-safe end-to-end API layer — generate clients directly from your Rust backend.',
        status: 'Building',
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80',
        accent: '#1a0a00',
        href: '#',
    },
];

export default function Projects() {
    return (
        <section className="px-5">
            {/* Center-divider wrapper: the pseudo ::after trick isn't available in Tailwind,
          so we use a relative container with an inset absolute line */}
            <div className="relative">
                {/* Vertical center divider — only when 2-col grid is active */}
                <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-px bg-black/15 dark:bg-white/10 pointer-events-none" />
                {/* Horizontal row divider — only when 2-col grid is active */}
                <div className="hidden sm:block absolute left-0 right-0 top-1/2 h-px bg-black/15 dark:bg-white/10 pointer-events-none" />

                {/* 2-col grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  ">
                    {projects.map((p) => (
                        <article
                            key={p.title}
                            className="group flex flex-col pt-2 border-black/15 dark:border-white/10 overflow-hidden transition-colors duration-200 "
                        >
                            {/* ── Image block ── */}
                            <div
                                className="relative   overflow-hidden aspect-video border-b border-black/15 dark:border-white/10"
                                style={{ background: p.accent }}
                            >
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full rounded-xl border-2 border-black/50 dark:border-white/20 mix-blend-luminosity h-full object-cover block opacity-75 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-[1.04] group-hover:brightness-110 group-hover:border-black/50 dark:group-hover:border-white/20"
                                />
                                {/* Bottom fade into accent colour */}

                            </div>

                            {/* ── Content block ── */}
                            <div className="flex flex-col gap-1.5 flex-1 px-5 pt-4 pb-1">
                                {/* Title + status row */}
                                <div>
                                    <h2 className="text-[1.05rem] font-medium text-gray-950 dark:text-gray-50 m-0">
                                        {p.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400 m-0">
                                    {p.description}
                                </p>

                                {/* CTA */}
                                <a
                                    href={p.href}
                                    className="mt-1.5 inline-block text-[0.82rem] text-gray-500 dark:text-gray-400 no-underline tracking-wide transition-colors duration-150 hover:text-gray-900 dark:hover:text-white"
                                >
                                    View Project&nbsp;↗
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
