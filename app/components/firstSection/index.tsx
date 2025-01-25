import Image from 'next/image'
import React from 'react'

import background1 from '@/public/background1.png'
import firstLogo from '@/public/$fm3uhubz5ce.png'

const FirstSection = () => {
  return (
    <section className='w-full h-[42rem] relative flex justify-center items-center bg-fixed'
>
      <Image src={background1} fill className='object-cover bg-center -z-10 bg-fixed'  alt='imagem-fundo'/>

      <div className='flex gap-10'>

        <div className='flex flex-col gap-3'>

        <div className='relative w-[32rem] h-64 rounded-lg'>
        <Image src={firstLogo} fill className='object-cover bg-center rounded-lg' alt='imagem-logo'/>
        </div>
        <h1 className='text-4xl text-white font-semibold pl-4'>A internet que você precisa <br /> com os melhores preços!</h1>
        </div>

        <div>

          <h1 className='text-center text-white text-lg'>Preencha os dados abaixo e nós ligaremos 
            <br /> para você em até 10 minutos <br /> 
            (Horário comercial).
          </h1>

        <form action="" className='flex flex-col gap-3'>
          <label htmlFor="" className='w-full'>
            <h1 className='text-zinc-400'>Nome*</h1>  
          <input type="text" className='w-full h-8'/>
          </label>
          <label htmlFor="" className='w-full'>
            <h1 className='text-zinc-400'>Celular*</h1>
          <input type="tel" className='w-full h-8 '/>
          </label>
          <label htmlFor="" className='w-full'>
            <h1 className='text-zinc-400'>Email*</h1>
          <input type="email" className='w-full h-8'/>
          </label>
          <label htmlFor="" className='w-full'>
            <h1 className='text-zinc-400'>Qual sua cidade?*</h1>
          <input type="text" className='w-full h-8'/>
          </label>
          <label htmlFor="" className='w-full'>
            <h1 className='text-zinc-400'>1 + 9 = ?</h1>
          <input type="text" className='w-full h-8'/>
          </label>

          <button className='w-full h-14 rounded-full bg-green-600 text-white text-xl font-medium mt-2'>EU QUERO</button>
        </form>
        </div>


      </div>
    </section>
  )
}

export default FirstSection