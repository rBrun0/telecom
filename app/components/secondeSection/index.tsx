"use client";

import React from "react";
import { motion } from "framer-motion";

import checkImage from "@/public/check.png";
import Image from "next/image";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const SecondSection = () => {
  const benefits = [
    {
      title: "Velocidade de conexão de alta qualidade sem interrupções.",
      description:
        "Com planos de 500 mega, 700 mega e 1 giga, você tem a internet rápida para trabalhar, estudar, assistir aos seus filmes e séries favoritas ou jogar online sem lag.",
      boldClass: "font-bold",
    },
    {
      title: "Suporte técnico premium",
      description:
        "Oferecemos suporte técnico em conjunto com atendimento premium via telefone ou Whatsapp 24 horas por dia, 7 dias por semana, para garantir que você nunca fique desconectado.",
      boldClass: "font-bold",
    },
    {
      title: "Roteador Incluso",
      description:
        "Não precisa se preocupar em comprar um roteador para ter Wi-Fi em sua casa, o seu plano da P4 conta com um roteador de alta qualidade e potência incluso na assinatura.",
      boldClass: "font-bold",
    },
    {
      title: "Instalação rápida e sem burocracia",
      description:
        "Você não precisa esperar semanas para ter a sua internet instalada na sua casa. Nós fazemos a instalação em até 5 dias após a confirmação do seu pedido.",
      boldClass: "font-semibold",
    },
  ];

  return (
    <section className="flex flex-col items-center py-10 text-4xl px-6 md:px-16 lg:px-36 xl:px-72">
      <motion.h1
        className="text-center px-4 md:px-7 text-blue-900 text-2xl sm:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Além de ter a melhor internet da sua região, você ainda conta com vários
        <span className="text-blue-950 font-bold"> benefícios</span> ao assinar
        a<span className="text-blue-950 font-bold"> P4 Telecom:</span>
      </motion.h1>

      <div className="flex flex-col items-center pt-12 md:pt-28 gap-10 md:gap-14">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            className="flex gap-4"
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
              <Image
                src={checkImage}
                fill
                alt="image-check"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-4">
              <h1 className={`text-lg ${benefit.boldClass}`}>
                {benefit.title}
              </h1>
              <p className="text-lg text-zinc-700">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
