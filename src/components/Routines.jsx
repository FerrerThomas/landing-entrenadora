import React from 'react';
import { motion } from 'framer-motion';

export default function Routines() {
    const routines = [
        {
            title: "Enfoque Glúteos",
            description: "Ejercicios específicos para tonificar, fortalecer y dar forma a tus glúteos para una silueta definida.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYgQ6GVz8Q96_ZAFlO2hJwKuVgYD3ZyDvGbkGboOREgnf3i66pnSNKOC0LvUhBlKN9a-ISt6mV5r282HnxTHlkCGqysxTpKw3i1M8LtJHaZXOSfi3AsAaXKYvm4zFvJ1ss9-8O3WgWZivJUjToHkKlADF5heOmwbjjcRVImtP6kzptpgivsoiWzVuXlTP_7ED-dmxpSPIaR8oO6Wn4eQlEpcLicegXsuxrKy3NgoKxAh_PYwLmzg36s_32l1_6Hikj_DdN762DOa4",
            alt: "Mujer haciendo sentadillas para glúteos"
        },
        {
            title: "Tren Superior Fuerte",
            description: "Desarrolla fuerza y definición en espalda, pecho, hombros y brazos con estas rutinas completas.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3_RDvKge7fItaQVEoEDWiyOewRrkV9G_kxyvPGgwEKYf7rScx6Xu25KCn6tn7fcI8IbvrDoZRpPKmc2T5ruf7vzvfD-y0OPrM6GxXjjQdAl_IWbiJBk21D43GgJLm3z4xx_Z2L-W4HFmjIdyYIJSVN8StSTUBCvV0lCkBrspHGidfvebUCBU96rMMWPGtTVpOW99Q0fWoQX2Z_orYjtjo97XpOrqAb9XvjO6f1Lu3wA26Egh6NRvEBF4J6oOmBbhqYfNx70ZId78",
            alt: "Hombre haciendo dominadas para tren superior"
        },
        {
            title: "Core y Abdomen",
            description: "Fortalece tu centro, mejora tu postura y consigue un abdomen definido con ejercicios efectivos y seguros.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKadin6JbmtSosJWLUBQ7X7z17H86o-VwWtw17C3cgD5avDJh2wOBD5Z14Y02wXZS0zompFF1iEFEwIGpIF4zj2fTIzkNo_lrphOBf88NFi-fAUiXX8tAXN44sV-xZLhSmbzZ3CkQdJOcJ0LfWgwfXHsl-zhBlR7XdzJ0QiAnRrWMf3wL4UFqL6bSIZCBd1wVlZ5Ld-fi7MXRvBzi9SaTRCimLIQwVa95sCGFv0dsNQXoBUK3YblBkHP1Vv-X9i2AWTlVFhL9kRhY",
            alt: "Persona haciendo plancha para abdomen"
        }
    ];

    return (
        <section className="w-full max-w-6xl px-4 sm:px-10 py-16 sm:py-24" id="rutinas">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[#181113] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Rutinas Específicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {routines.map((routine, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col bg-background-light dark:bg-background-dark rounded overflow-hidden shadow-lg transition-transform hover:scale-105"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className="w-full h-48 bg-cover bg-center"
                                style={{ backgroundImage: `url('${routine.image}')` }}
                                aria-label={routine.alt}
                            ></div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-[#181113] dark:text-white">{routine.title}</h3>
                                <p className="text-sm text-[#181113] dark:text-white/80 flex-grow">{routine.description}</p>
                                <a
                                    href={`https://wa.me/5492215048825?text=${encodeURIComponent(`Hola Cielo, me gustaria mas infromacion del Plan ${routine.title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 flex w-fit items-center justify-center rounded-full h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 transition-colors"
                                >
                                    <span className="truncate">+ Info</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
