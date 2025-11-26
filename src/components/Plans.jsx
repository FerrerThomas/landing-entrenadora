import React from 'react';
import { motion } from 'framer-motion';

export default function Plans() {
    const plans = [
        {
            title: "Pérdida de Peso",
            description: "Programas enfocados en la quema de grasa y la mejora cardiovascular para un cambio saludable y duradero.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr8avjoLr3gjb6l9EJ7WABXTXJmCkX5-H3dg7E0Nmp7Dbk_vaEPcteq_MPC8akTnnI-sS13N4v4izMRpQ4l2xuaDl0H08_sikZHGvrN241Mx6JNe7_2Wa_NzhD0LDmw3zr3H1yVxeg6d4QGPth12b9wbgj3eWd-thYPc-8R-QvIS6Ayd-SS49iFoMSuo-oKe4iX4u5DtFpa5lDXrykHFq6LxHTGYZ9T-4dEMHZirlGZ6BKRk0GtaCyxo9_iOss0QSnGS-KIcs45tY",
            alt: "Una persona midiendo su cintura con una cinta métrica"
        },
        {
            title: "Aumento Muscular",
            description: "Rutinas de fuerza y planes nutricionales diseñados para maximizar la hipertrofia y ganar volumen muscular.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjGqam5p8sIiPPFNlDph85pmTwgQ_Zis3i4wUzrcqz2NlL8DNLh4ass8QPhuxSODtoNBmp-U_hz9n65UJVN9lhiVnyR2S51sv8qa3I1Eu-SKo9KP5YVggCoEXoVMvjc9csEiWZCBr20s6f_MU3jV42llH259xH1Z9soOFkKVctktJYMdj5PsuiMkHHfWOmKmHHTZptkp2TWg6eRabUS_wuFRHYQdrcPXBE6D1fuxihWOVbkga-JrUK7ZEruPWyorFdrc8y0blEfyg",
            alt: "Persona levantando pesas para ganar músculo"
        },
        {
            title: "Recomposición Corporal",
            description: "Estrategias integrales para reducir grasa y construir músculo simultáneamente, transformando tu físico.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBz0uPo-mlkcjAajmBHHexNhuR3UmrOyjRD3KV4JJolN3mopZyFGoe8E2NvwbZA4QBPtr2YQhFywIyzI3bY769XyQpQvpGa7efK1cKt4jMa1NZD6_ccCYe6Db6Gnpd43gEm8rYh3z80V9FlP8nzMQwYJDtiCecPKMk5mNL0Kl_NIOML2BYBtPjTZcbi26QYGodKjYiJYIjXZHz7w0eSAW1mWFprHEJQ5cEUSuaJLcVhBdNECAO62XdU69ZQdc7v5ivro6gbClvVHZ8",
            alt: "Mujer en pose de yoga, representando equilibrio corporal"
        }
    ];

    return (
        <section className="w-full max-w-6xl px-4 sm:px-10 py-16 sm:py-24 bg-primary/5 dark:bg-primary/10 rounded-lg" id="planes">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[#181113] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Planes de Entrenamiento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
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
                                style={{ backgroundImage: `url('${plan.image}')` }}
                                aria-label={plan.alt}
                            ></div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-[#181113] dark:text-white">{plan.title}</h3>
                                <p className="text-sm text-[#181113] dark:text-white/80 flex-grow">{plan.description}</p>
                                <a
                                    href={`https://wa.me/5492215048825?text=${encodeURIComponent(`Hola Cielo, me gustaria mas infromacion del Plan ${plan.title}`)}`}
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
