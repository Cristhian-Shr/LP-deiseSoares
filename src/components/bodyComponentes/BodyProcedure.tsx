'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Procedure = {
  title: string
  description: string
  image: string
}

const bodyProcedures: Procedure[] = [
  {
    title: 'Harmonização Glútea',
    description: 'Melhora o contorno, volume e trata celulite e flacidez nos glúteos com preenchedores e bioestimuladores.',
    image: '/procedimentos/20.png',
  },
  {
    title: 'Lipo Enzimática',
    description: 'Reduz gordura localizada com enzimas que quebram células de gordura, promovendo contorno corporal.',
    image: '/procedimentos/21.png',
  },
  {
    title: 'PEIM',
    description: 'Tratamento injetável para microvasos e varizes, melhorando a aparência das pernas.',
    image: '/procedimentos/22.png',
  },
  {
    title: 'Tratamentos para Celulite',
    description: 'Mesoterapia, bioestimuladores e ultrassom para reduzir inflamação e flacidez, promovendo pele lisa.',
    image: '/procedimentos/23.png',
  },
  {
    title: 'Bioestimulador de Colágeno Corporal',
    description: 'Estimula a produção de colágeno, ajudando a combater a flacidez e melhorar a textura da pele. Utilizado em regiões como abdômen, braços, interno de coxas, culotes e glúteos.',
    image: '/procedimentos/34.jpg',
  },
]

export default function BodyProcedures() {
  const [showAll, setShowAll] = useState(false)

  const proceduresToShow = showAll ? bodyProcedures : bodyProcedures.slice(0, 3)

  return (
    <section className="py-12 px-4 md:px-10 lg:px-10 justify-center xl:px-40 items-center" id="corporais">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Procedimentos Corporais</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
        {proceduresToShow.map((item, index) => {
          const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o procedimento: ${item.title}`)
          const whatsappLink = `https://wa.me/5551998097108?text=${message}`

          return (
            <div key={index} className="bg-primary/90 rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col items-center text-center mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                 width={400}
                height={300}
                className="rounded-xl object-cover h-60 mb-4 mx-auto max-w-[90%]"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h3>
              <p className="text-sm md:text-base mb-4 text-terciary">{item.description}</p>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto font-bold bg-terciary text-primary px-4 py-2 rounded-full hover:bg-terciary/80 transition"
              >
                Quero saber mais!
              </Link>
            </div>
          )
        })}
      </div>

      {/* Botão Mostrar Mais / Mostrar Menos */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-bold bg-secondary text-white px-6 py-3 rounded-full hover:bg-secondary/80 transition"
        >
          {showAll ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      </div>
    </section>
  )
}
