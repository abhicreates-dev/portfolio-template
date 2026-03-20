import { useEffect, useState } from 'react'

const WORDS = ['Full Stack Developer', 'Design Engineer', 'Frontend Developer','Freelancer']

const TYPING_SPEED = 80   // ms per character while typing
const DELETING_SPEED = 40 // ms per character while deleting
const PAUSE_AFTER_WORD = 1800 // ms to wait after word is fully typed
const PAUSE_BEFORE_TYPE = 300  // ms to wait before typing next word

export default function TypingText() {
    const [displayText, setDisplayText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = WORDS[wordIndex]

        let timeout: ReturnType<typeof setTimeout>

        if (!isDeleting) {
            if (displayText.length < currentWord.length) {
                // Still typing
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1))
                }, TYPING_SPEED)
            } else {
                // Word fully typed — pause then start deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true)
                }, PAUSE_AFTER_WORD)
            }
        } else {
            if (displayText.length > 0) {
                // Still deleting
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length - 1))
                }, DELETING_SPEED)
            } else {
                // Fully deleted — move to next word
                timeout = setTimeout(() => {
                    setIsDeleting(false)
                    setWordIndex((prev) => (prev + 1) % WORDS.length)
                }, PAUSE_BEFORE_TYPE)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, wordIndex])

    return (
        <span className="inline-flex items-center gap-[2px]">
            {displayText}
            {/* blinking cursor */}
            <span className="animate-blink w-[1.5px] h-[1em] bg-current inline-block" />
        </span>
    )
}
