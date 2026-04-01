"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import backgroundTravelImg from "@/public/travelBackground.jpg";
import scImage from "@/public/fifthLogo.png";

const FifthSection = () => {
  return (
    <section className="relative min-h-[33rem] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-10 px-4 md:px-8">
      <Image
        src={backgroundTravelImg}
        fill
        alt="background-image"
        className="object-cover bg-center -z-10"
      />

      <div className="flex flex-col items-center justify-center bg-white w-full sm:w-3/4 md:w-1/2 lg:w-1/4 px-6 md:px-8 py-8 lg:py-0 lg:h-full rounded-lg lg:rounded-none">
        <motion.h1
          className="text-center text-blue-900 font-semibold text-3xl pb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Cidades atendidas:
        </motion.h1>
        <motion.p
          className="text-start pb-2 text-zinc-500 font-semibold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="text-zinc-700 font-bold">Oeste</span>: Xanxerê,
          Xaxim, Vargeão, Ponte Serrada, Passos Maia, Faxinal dos Guedes, Bom
          Jesus, Abelardo Luz
        </motion.p>
        <motion.p
          className="text-start text-zinc-500 font-semibold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-zinc-700 font-bold">Litoral</span>: Bombinhas
          Itapema e Porto Belo.
        </motion.p>
      </div>

      <div className="relative w-full max-w-[32rem] h-60 sm:h-72 lg:h-80">
        <Image
          src={scImage}
          alt="imagem-sc"
          fill
          className="bg-center object-cover"
        />
      </div>
    </section>
  );
};

export default FifthSection;
