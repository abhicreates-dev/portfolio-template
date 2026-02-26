export default function Footer() {
    return (
        <footer className="border-t border-black/50 dark:border-white/10 px-5 py-6">
            {/* Big flat name */}
            <div className="w-full overflow-hidden">
                <span
                    className="block font-black uppercase leading-none w-full text-black/10 dark:text-white/10"
                    style={{
                        fontSize: '10.7vw',
                        letterSpacing: '-0.03em',
                    }}
                >
                    Nagmani
                </span>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-4">
                
                <p className="text-[0.7rem] font-light tracking-widest uppercase secondary">
                    Built with ♥ &amp; TypeScript
                </p>
            </div>
        </footer>
    );
}
