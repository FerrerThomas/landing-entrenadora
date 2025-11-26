import React, { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex items-center justify-center w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/20 px-4 sm:px-10 py-3 w-full max-w-6xl">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-6">
                        <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#181113] dark:text-white/90">Entrenadora Personal</h2>
                </div>
                <nav className="hidden md:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#sobre-mi">Sobre mí</a>
                        <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#planes">Planes</a>
                        <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#rutinas">Rutinas</a>
                        <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#contacto">Contáctame</a>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Empieza Ahora</span>
                    </button>
                </nav>
                <button className="md:hidden p-2 rounded-full hover:bg-primary/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className="material-symbols-outlined text-[#181113] dark:text-white/90">menu</span>
                </button>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-primary/20 p-4 md:hidden flex flex-col gap-4 shadow-lg">
                    <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#sobre-mi" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
                    <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#planes" onClick={() => setIsMenuOpen(false)}>Planes</a>
                    <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#rutinas" onClick={() => setIsMenuOpen(false)}>Rutinas</a>
                    <a className="text-[#181113] dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal" href="#contacto" onClick={() => setIsMenuOpen(false)}>Contáctame</a>
                    <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <span className="truncate">Empieza Ahora</span>
                    </button>
                </div>
            )}
        </header>
    );
}
