import Image from 'next/image'
import React from 'react'

import background1 from '@/public/background1.png'
import commentsImage from '@/public/comments.png'


const ThirdSection = () => {
  return (
    <section className='relative flex flex-col items-center pt-7 pb-12 h-[calc(100vh+8rem)]'>
      <Image src={background1} fill className='object-cover bg-center -z-10' alt='imagem-fundo'/>

      <h1 className='text-4xl text-white font-bold'>Depoimentos</h1>

      <p
      className='text-xl text-white font-medium text-center pt-10 pb-4'
      >Não é só a gente que diz que a P4 Telecom é a melhor opção para você. Veja o que os nossos clientes <br /> estão falando sobre a nossa internet:</p>

      <div className="relative w-[43.9rem] h-full ">
        <Image src={commentsImage} fill alt='comentarios' className='bg-cover bg-center'/>  
      </div>    
    </section>
  )
}

export default ThirdSection