"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import pet1 from "@/public/secondLogo.jpg";
import pet2 from "@/public/thirdLogo.jpg";
import pet3 from "@/public/fourthLogo.jpg";

const cards = [
  { src: pet1, fromTop: true },
  { src: pet2, fromTop: false },
  { src: pet3, fromTop: true },
];

const FourthSection = () => {
  return (
    <section className="py-8 px-4 md:px-8">
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-blue-800 pb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        Planos acessíveis e transparentes
      </motion.h1>

      <motion.p
        className="text-center text-base sm:text-lg lg:text-xl text-zinc-600 px-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Nós oferecemos preços acessíveis e transparentes, sem taxas extras ou
        surpresas na fatura. <br />
        você pode escolher o plano que mais combina com você e com o seu bolso,
        veja abaixo:
      </motion.p>

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center pt-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
            initial={{ opacity: 0, y: card.fromTop ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              delay: i * 0.2,
              ease: "easeOut" as const,
            }}
          >
            <Image
              src={card.src}
              fill
              alt="imagem"
              className="bg-center object-cover rounded-3xl"
            />
          </motion.div>
        ))}
      </div>

      <motion.h1
        className="text-zinc-600 text-base sm:text-lg lg:text-xl text-center pt-10 md:pt-16 px-4"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Todos os planos contam com roteador wi-fi incluso e suporte premium 24
        horas por dia, 7 dias por <br /> semana. Você não vai perder essa
        oportunidade, vai? Sejá rápido! Clique no botão abaixo e faça o seu{" "}
        <br /> cadastro, ligaremos para você em até 10 mintos.
      </motion.h1>

      <motion.button
        className=" min-w-56 h-14 px-10 mt-10 rounded-full bg-green-500 text-white font-semibold flex flex-nowrap justify-center items-center mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        QUERO A ALTA VELOCIDADE
      </motion.button>
    </section>
  );
};

export default FourthSection;
