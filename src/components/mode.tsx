import { useEffect, useState } from 'react'

export default function ModeToggle() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    })

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

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
            className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer shadow-md"
        >
            {isDark ? (
                /* Sun icon — shown in dark mode to switch to light */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M5.64 18.36l-.71.71m12.73 0-.71-.71M5.64 5.64l-.71-.71M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"
                    />
                </svg>
            ) : (
                /* Moon icon — shown in light mode to switch to dark */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    />
                </svg>
            )}
        </button>
    )
}
