import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="w-full max-w-6xl px-4 sm:px-10 py-16 sm:py-24" id="sobre-mi">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[#181113] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">Sobre mí</h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8ITa5mdtdOR4PdTqu5lVfF_zNFk_Bs9qBTWWzlHrCWrhZcrX7-cfA5WQGm5zzC2dw7yOtAtiIoU29uZpaf6IWeZjO1TNcsmr4dvV8oo0Egu_Jx3vO2zq59kl2o3wYfT56dDsbuoHNm1dCwAmXI0uJXTanifnLbsQw_KBzVJIbP_6HrTLyo5odSJ763bBmz96ebQf1IEtZ1bJuULfXSp7HWcjhQvHZP4Zlk031JYj3Awr7WwfNQhm73SAjxSHsxgkIMjLZgf05BPY")' }}
                            aria-label="Foto profesional de la entrenadora"
                        ></div>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-4">
                        <h3 className="text-[#181113] dark:text-white tracking-light text-2xl font-bold leading-tight sm:text-3xl">
                            Hola, soy Cielo
                        </h3>
                        <p className="text-[#181113] dark:text-white/80 text-base font-normal leading-relaxed">
                            Mi filosofía se centra en crear un estilo de vida saludable y sostenible. Con mis certificaciones y experiencia, te guiaré en cada paso del camino para que no solo alcances tus objetivos, sino que también disfrutes del proceso y aprendas a mantener tus resultados a largo plazo. Juntos, desbloquearemos tu máximo potencial.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
