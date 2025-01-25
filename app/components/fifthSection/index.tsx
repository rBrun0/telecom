import Image from 'next/image'
import React from 'react'
import backgroundTravelImg from "@/public/travelBackground.jpg"
import scImage from "@/public/fifthLogo.png"

const FifthSection = () => {
  return (
    <section className='relative h-[33rem] flex items-center justify-center gap-16'>
        <Image src={backgroundTravelImg} fill  alt='background-image'
        className='object-cover bg-center -z-10'
        />

        <div className='flex flex-col items-center justify-center h-full bg-white w-1/4 px-8'> 
            <h1 className='text-center text-blue-900 font-semibold text-3xl pb-6'>Cidades atendidas:</h1>
            <p className='text-start pb-2 text-zinc-500 font-semibold'><span className='text-zinc-700 font-bold'>Oeste</span>: Xanxerê, Xaxim, Vargeão, Ponte Serrada, Passos Maia, Faxinal dos Guedes, Bom Jesus, Abelardo Luz</p>
            <p className='text-start text-zinc-500 font-semibold'><span className='text-zinc-700 font-bold'>Litoral</span>: Bombinhas Itapema e Porto Belo.</p>
        </div>

        <div className='relative w-[32rem] h-80'>
            <Image src={scImage} alt='imagem-sc' fill className='bg-center object-cover'/>
        </div>

    </section>
  )
}

export default FifthSection