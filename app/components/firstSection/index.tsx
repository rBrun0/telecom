"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import background1 from "@/public/background1.png";
import firstLogo from "@/public/$fm3uhubz5ce.png";

const FirstSection = () => {
  return (
    <section className="w-full min-h-[42rem] py-10 relative flex justify-center items-center bg-fixed px-4 md:px-8">
      <Image
        src={background1}
        fill
        className="object-cover bg-center -z-10 bg-fixed"
        alt="imagem-fundo"
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-72 sm:w-96 lg:w-[32rem] h-48 sm:h-56 lg:h-64 rounded-lg">
            <Image
              src={firstLogo}
              fill
              className="object-cover bg-center rounded-lg"
              alt="imagem-logo"
            />
          </div>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold pl-4 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A internet que você precisa <br /> com os melhores preços!
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-center text-white text-lg">
            Preencha os dados abaixo e nós ligaremos
            <br /> para você em até 10 minutos <br />
            (Horário comercial).
          </h1>

          <form action="" className="flex flex-col gap-3">
            <label htmlFor="" className="w-full">
              <h1 className="text-zinc-400">Nome*</h1>
              <input type="text" className="w-full h-8" />
            </label>
            <label htmlFor="" className="w-full">
              <h1 className="text-zinc-400">Celular*</h1>
              <input type="tel" className="w-full h-8 " />
            </label>
            <label htmlFor="" className="w-full">
              <h1 className="text-zinc-400">Email*</h1>
              <input type="email" className="w-full h-8" />
            </label>
            <label htmlFor="" className="w-full">
              <h1 className="text-zinc-400">Qual sua cidade?*</h1>
              <input type="text" className="w-full h-8" />
            </label>
            {/* <label htmlFor="" className="w-full">
              <h1 className="text-zinc-400">1 + 9 = ?</h1>
              <input type="text" className="w-full h-8" />
            </label> */}

            <motion.button
              className="w-full h-14 rounded-full bg-green-600 text-white text-xl font-medium mt-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EU QUERO
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
