import { useEffect, useRef, useState } from 'react'

export default function ModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })
    const btnRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggle = () => {
        const btn = btnRef.current
        if (!btn) { setIsDark(v => !v); return }

        // Get button center position relative to viewport
        const rect = btn.getBoundingClientRect()
        const x = Math.round(rect.left + rect.width / 2)
        const y = Math.round(rect.top + rect.height / 2)

        // Max radius needed to cover the whole screen from that point
        const maxR = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        // View Transitions API — if browser supports it
        if (!document.startViewTransition) {
            setIsDark(v => !v)
            return
        }

        // Inject the keyframe style once
        if (!document.getElementById('vt-reveal-style')) {
            const s = document.createElement('style')
            s.id = 'vt-reveal-style'
            s.textContent = `
                ::view-transition-old(root) { animation: none; z-index: 0; }
                ::view-transition-new(root) {
                    animation: vt-circle-reveal 0.85s cubic-bezier(0.4, 0, 0.2, 1) both;
                    z-index: 1;
                }
                @keyframes vt-circle-reveal {
                    from { clip-path: circle(0px at ${x}px ${y}px); }
                    to   { clip-path: circle(${Math.ceil(maxR)}px at ${x}px ${y}px); }
                }
            `
            document.head.appendChild(s)
        } else {
            // Update coordinates for new click position
            const existing = document.getElementById('vt-reveal-style')!
            existing.textContent = `
                ::view-transition-old(root) { animation: none; z-index: 0; }
                ::view-transition-new(root) {
                    animation: vt-circle-reveal 0.85s cubic-bezier(0.4, 0, 0.2, 1) both;
                    z-index: 1;
                }
                @keyframes vt-circle-reveal {
                    from { clip-path: circle(0px at ${x}px ${y}px); }
                    to   { clip-path: circle(${Math.ceil(maxR)}px at ${x}px ${y}px); }
                }
            `
        }

        document.startViewTransition(() => {
            setIsDark(v => !v)
            // Flush: forces React to commit before the transition snapshot
            return new Promise<void>(resolve => setTimeout(resolve, 0))
        })
    }

    return (
        <button
            ref={btnRef}
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-md"
        >
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M5.64 18.36l-.71.71m12.73 0-.71-.71M5.64 5.64l-.71-.71M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    )
}
