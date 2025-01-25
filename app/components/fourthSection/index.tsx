import Image from 'next/image'
import React from 'react'

import pet1 from '@/public/secondLogo.jpg'
import pet2 from '@/public/thirdLogo.jpg'
import pet3 from '@/public/fourthLogo.jpg'

const FourthSection = () => {
  return (
   <section className='py-8'>
    <h1 className='text-4xl text-center font-bold text-blue-800 pb-8'>Planos acessíveis e transparentes</h1>

    <p className='text-center text-xl text-zinc-600 '>
    Nós oferecemos preços acessíveis e transparentes, sem taxas extras ou surpresas na fatura. <br />
    você pode escolher o plano que mais combina com você e com o seu bolso, veja abaixo:
    </p>

    <div className='w-full flex gap-8 justify-center pt-12'>

        <div className='relative w-80 h-80'>
            <Image src={pet1} fill alt='imagem' className='bg-center object-cover rounded-3xl'/>
        </div>

        <div className='relative w-80 h-80'>
            <Image src={pet2} fill alt='imagem' className='bg-center object-cover rounded-3xl'/>
        </div>

        <div className='relative w-80 h-80'>
            <Image src={pet3} fill alt='imagem' className='bg-center object-cover rounded-3xl'/>
        </div>

    </div>

    <h1 className='text-zinc-600 text-xl text-center pt-16'>
    Todos os planos contam com roteador wi-fi incluso e suporte premium 24 horas por dia, 7 dias por <br /> semana.
     Você não vai perder essa oportunidade, vai? Sejá rápido!
     Clique no botão abaixo e faça o seu <br /> cadastro, ligaremos para você em até 10 mintos.
    </h1>

    <button className=' min-w-56 h-14 px-10 mt-10 rounded-full bg-green-500 text-white font-semibold flex flex-nowrap justify-center items-center mx-auto'>
    QUERO A ALTA VELOCIDADE
    </button>

   </section>
  )
}

export default FourthSection