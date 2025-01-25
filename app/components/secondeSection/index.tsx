import React from 'react'

import checkImage from '@/public/check.png'
import Image from 'next/image'

const SecondSection = () => {
  return (
    <section className='flex flex-col items-center py-10 text-4xl px-72'>
        <h1 className='text-center px-7 text-blue-900'>Além de ter a melhor internet da sua região, você ainda conta com vários 
            <span className='text-blue-950 font-bold'> benefícios</span> ao assinar a 
            <span className='text-blue-950 font-bold'> P4 Telecom:</span>
        </h1>

        <div className='flex flex-col items-center pt-28 gap-14'>

            <div className='flex gap-4'>

            <div className='relative w-24 h-24'>
                <Image src={checkImage} fill alt='image-check' className='object-contain'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Velocidade de conexão de alta qualidade sem interrupções.</h1>
                <p className='text-lg text-zinc-700'>Com planos de 500 mega, 700 mega e 1 giga, você tem a internet rápida para trabalhar,
                     estudar, assistir aos seus filmes e séries favoritas ou jogar online sem lag.</p>
            </div>
            </div>

            <div className='flex gap-4'>

            <div className='relative w-24 h-24'>
                <Image src={checkImage} fill alt='image-check' className='object-contain'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Suporte técnico premium</h1>
                <p className='text-lg text-zinc-700'>Oferecemos suporte técnico em conjunto com atendimento premium via telefone ou Whatsapp 24 horas por dia, 7 dias por semana, para garantir que você nunca fique desconectado.</p>
            </div>
            </div>

            <div className='flex gap-4'>

            <div className='relative w-24 h-24'>
                <Image src={checkImage} fill alt='image-check' className='object-contain'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Roteador Incluso</h1>
                <p className='text-lg text-zinc-700'>Não precisa se preocupar em comprar um roteador para ter Wi-Fi em sua casa,
                 o seu plano da P4 conta com um roteador de alta qualidade e potência incluso na assinatura.</p>
            </div>
            </div>

            <div className='flex gap-4'>

            <div className='relative w-24 h-24'>
                <Image src={checkImage} fill alt='image-check' className='object-contain'/>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-lg font-semibold'>Instalação rápida e sem burocracia</h1>
                <p className='text-lg text-zinc-700'>Você não precisa esperar semanas para ter a sua internet instalada na sua casa.
                     Nós fazemos a instalação em até 5 dias após a confirmação do seu pedido.</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SecondSection