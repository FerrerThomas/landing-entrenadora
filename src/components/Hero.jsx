import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="w-full max-w-6xl px-4 sm:px-10 py-16 sm:py-24">
            <div className="@container">
                <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
                    <motion.div
                        className="flex flex-col gap-6 text-center md:text-left md:flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[#181113] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                                Transforma tu cuerpo, potencia tu vida
                            </h1>
                            <h2 className="text-[#181113] dark:text-white/80 text-base font-normal leading-normal sm:text-lg">
                                Alcanza tus metas con un plan de entrenamiento personalizado diseñado solo para ti.
                            </h2>
                        </div>
                        <div className="flex justify-center md:justify-start">
                            <a
                                href="https://wa.me/5492215048825?text=Hola%20Cielo%2C%20vengo%20de%20la%20web"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
                            >
                                <span className="truncate">Empieza tu cambio</span>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:flex-1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square sm:aspect-[4/3] md:aspect-square bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTQb7vI7cfU-hUFhP87pYgIanBiyDvA6fH-fd_OxmzqzF9nRTXTD2mHcHQv1CqV8Ig206ppNAd-GM3brhxP0W1olzagHHN8IwHLxqDSOoMBFWW23HlHnqMhF00xqlOLEK2F21F7HEhg46wVEtSg7H5cQIiqHRUaBMh0ShvEfvSA6fvYkuwoMsCdsUIQtttMzxH61h5HvwYw1jU3N3rn4Lw0rUshCEcuw3YquMFQY5IzL6ae4atlWnmw0p9fk2zlq9nGE0epjXkw50")' }}
                            aria-label="Foto de la entrenadora personal sonriendo y lista para entrenar"
                        ></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
