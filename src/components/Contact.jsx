import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="w-full max-w-4xl px-4 sm:px-10 py-16 sm:py-24" id="contacto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="text-center">
                    <h2 className="text-[#181113] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Contáctame</h2>
                    <p className="mt-2 text-[#181113] dark:text-white/80 max-w-2xl mx-auto">¿Lista para empezar tu transformación? Envíame un mensaje y te responderé lo antes posible.</p>
                </div>
                <form className="mt-10 max-w-2xl mx-auto space-y-6">
                    <div>
                        <label className="sr-only" htmlFor="name">Nombre</label>
                        <input autoComplete="name" className="block w-full rounded border-primary/30 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="name" name="name" placeholder="Tu Nombre" type="text" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input autoComplete="email" className="block w-full rounded border-primary/30 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="email" name="email" placeholder="Tu Email" type="email" />
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message">Mensaje</label>
                        <textarea className="block w-full rounded border-primary/30 bg-background-light dark:bg-background-dark shadow-sm focus:border-primary focus:ring-primary py-3 px-4" id="message" name="message" placeholder="Tu Mensaje" rows="4"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="flex w-full sm:w-auto sm:px-10 cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" type="submit">
                            <span className="truncate">Enviar Mensaje</span>
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
