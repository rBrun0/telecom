"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import background1 from "@/public/background1.png";
import commentsImage from "@/public/comments.png";

const ThirdSection = () => {
  return (
    <section className="relative flex flex-col items-center pt-7 pb-12 min-h-screen lg:h-[calc(100vh+8rem)] px-4 md:px-8">
      <Image
        src={background1}
        fill
        className="object-cover bg-center -z-10"
        alt="imagem-fundo"
      />

      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        Depoimentos
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg lg:text-xl text-white font-medium text-center pt-6 md:pt-10 pb-4 px-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Não é só a gente que diz que a P4 Telecom é a melhor opção para você.
        Veja o que os nossos clientes <br /> estão falando sobre a nossa
        internet:
      </motion.p>

      <motion.div
        className="relative w-full max-w-[43.9rem] h-[20rem] sm:h-[28rem] lg:h-full "
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <Image
          src={commentsImage}
          fill
          alt="comentarios"
          className="bg-cover bg-center"
        />
      </motion.div>
    </section>
  );
};

export default ThirdSection;
