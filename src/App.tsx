import ModeToggle from './components/mode'
import TypingText from './components/TypingText'
import SocialLink from './components/SocialLink'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'
import X from './assets/xlogo.jpg'
import Github from './assets/Untitled design (13).png'
import Linkedin from './assets/Untitled design (15).png'
import { GitHubCalendar } from 'react-github-calendar';
import Footer2 from './components/Footer2'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-[#080808] text-gray-900 dark:text-white transition-colors duration-300">
      <ModeToggle />
      <main className="w-full max-w-4xl h-full border border-dashed border-black/50 dark:border-white/10">

        {/* ── Cover + Profile ── */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/1200x/57/96/a6/5796a6ae0ee5032f99795710f485e19f.jpg"
            alt="Cover"
            className="w-full object-cover"
          />

          {/* Profile photo — absolute on sm+, static block below cover on mobile */}
          <img
            src='https://pbs.twimg.com/profile_images/2025474173993357312/fCAQ1TKK_400x400.jpg'
            alt="Profile"
            className="
              hidden sm:block
              rounded-full border p-[2px] border-gray-200 dark:border-white/50
              absolute bottom-0 translate-y-1/2 left-[1%]
              w-[17%] min-w-[60px] h-auto
            "
          />

          {/* Name + typing — beside photo on sm+, hidden here (shown below on mobile) */}
          <div className="hidden sm:block absolute left-[19%] mt-1">
            <h1 className="tracking-tight font-medium text-xl sm:text-2xl md:text-3xl">
              Nagmani Upadhyay
            </h1>
            <div className="text-sm font-light mt-1 secondary"><TypingText /></div>
          </div>
        </div>

        {/* ── Mobile-only: profile photo + name stacked below cover ── */}
        <div className="flex sm:hidden items-center gap-3 px-4 pt-3 pb-1">
          <img
            src='https://pbs.twimg.com/profile_images/2025474173993357312/fCAQ1TKK_400x400.jpg'
            alt="Profile"
            className="rounded-full border p-[2px] border-gray-200 dark:border-white/50 w-14 h-14 shrink-0"
          />
          <div>
            <h1 className="tracking-tight font-medium text-lg leading-tight">Nagmani Upadhyay</h1>
            <div className="text-xs font-light mt-0.5 secondary"><TypingText /></div>
          </div>
        </div>

        {/* ── Bio ── */}
        <div className="px-5 mt-8 sm:mt-[13%]">
          <p className="text-base sm:text-lg font-light secondary leading-snug imp">
            I build web apps. <span>full stack, but backend head.</span>{' '}
            I mostly craft in <span>TypeScript</span>, these days getting in <span>Rust</span> too.
            {' '}when I start a project, I try to make it perfect <span>from init to deployment.</span>{' '}
            I care more about performance, clean architecture, and <span>shipping things</span> that actually work.
            {' '}Btw I use <span>Neovim</span>.
          </p>
        </div>

        {/* ── Social Links ── */}
        <div className="grid grid-cols-3 mx-5 mt-8 sm:mt-12 divide-x divide-black/50 dark:divide-white/30 border border-black/50 dark:border-white/20">
          <SocialLink logo={X} title="Twitter" href="https://x.com" />
          <SocialLink logo={Github} title="Github" href="https://x.com" />
          <SocialLink logo={Linkedin} title="Linkedin" href="https://x.com" />
        </div>

        {/* ── GitHub Calendar ── */}
        <div className="m-5 mt-8 sm:mt-12 saturate-0 invert-100 dark:invert-0 overflow-x-auto">
          <GitHubCalendar username="nagmani001" />
        </div>

        {/* ── Slant divider ── */}
        <div className="slant-divider mt-8 border-y border-black/50 dark:border-white/10" />

        {/* ── Projects ── */}
        <div className="mt-5 px-5">
          <h2 className="text-xl sm:text-2xl font-medium mb-5">Projects</h2>
        </div>
        <Projects />

        {/* ── Slant divider ── */}
        <div className="slant-divider mt-8 border-y border-black/50 dark:border-white/10" />

        {/* ── Experience ── */}
        <div className="mt-5 px-5">
          <h2 className="text-xl sm:text-2xl font-medium mb-5">Experience</h2>
        </div>
        <Experience />

        {/* ── Slant divider ── */}
        <div className="slant-divider mt-8 border-y border-black/50 dark:border-white/10" />

        {/* ── Skills ── */}
        <div className="mt-5 px-5">
          <h2 className="text-xl sm:text-2xl font-medium mb-5">Skills</h2>
        </div>
        <Skills />
         <div className="slant-divider mt-5 border-y border-black/50 dark:border-white/10" />

        <Footer2/>

      </main>

    </div>
  )
}

export default App
