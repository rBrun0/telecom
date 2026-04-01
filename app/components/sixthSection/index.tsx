"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "@/public/background3.jpg";

const SixthSection = () => {
  return (
    <section className="relative w-full min-h-96 py-10 flex flex-col items-center justify-center px-4 md:px-8">
      <Image
        src={backgroundImage}
        fill
        alt="imagem-fundo"
        className="object-cover bg-center -z-10"
      />

      <motion.h1
        className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold pb-4 text-center"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45 }}
      >
        Garanta agora mesmo a sua Internet!
      </motion.h1>

      <motion.p
        className="text-white text-sm sm:text-base text-center px-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        Clique no botão abaixo, preencha os dados e nós ligaremos para você em
        até <br /> 10 minutos em horário comercial ou no primeiro horario dentro
        do próximo dia útil.
      </motion.p>

      <motion.button
        className=" min-w-56 h-14 px-10 mt-6 rounded-full bg-green-500 text-white font-semibold flex flex-nowrap justify-center items-center mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        QUERO A ALTA VELOCIDADE
      </motion.button>
    </section>
  );
};

export default SixthSection;
