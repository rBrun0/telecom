import Image from 'next/image'
import React from 'react'
import backgroundImage from '@/public/background3.jpg'

const SixthSection = () => {
  return (
    <section className='relative w-full h-96 flex flex-col items-center justify-center'>
        <Image src={backgroundImage} fill alt='imagem-fundo' className='object-cover bg-center -z-10'/>

        <h1 className='text-white text-3xl font-semibold pb-4'>
        Garanta agora mesmo a sua Internet!
        </h1>

        <p className='text-white'> 
        Clique no botão abaixo, preencha os dados e nós ligaremos para você em até <br /> 10 minutos em horário
        comercial ou no primeiro horario dentro do próximo dia útil.
        </p>

        <button className=' min-w-56 h-14 px-10 mt-6 rounded-full bg-green-500 text-white font-semibold flex flex-nowrap justify-center items-center mx-auto'>
            QUERO A ALTA VELOCIDADE
        </button>
    </section>
  )
}

export default SixthSection