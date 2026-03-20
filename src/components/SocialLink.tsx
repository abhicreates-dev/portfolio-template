interface SocialLinkProps {
    logo: string
    title: string
    href?: string
}

export default function SocialLink({ logo, title, href = '#' }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between cursor-pointer no-underline text-inherit"
        >
            <div className="flex items-center">
                <img
                    src={logo}
                    alt={title}
                    className="h-9 w-9 sm:h-12 sm:w-12 md:h-12 md:w-12 border-r border-black/50 dark:border-white/20"
                />
                <div className="text-xs sm:text-sm md:text-lg opacity-50 font-normal ml-2">{title}</div>
            </div>

            {/* Diagonal arrow */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mr-3 opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </svg>
        </a>
    )
}
