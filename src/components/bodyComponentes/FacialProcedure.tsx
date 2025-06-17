'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Procedure = {
  title: string
  description: string
  image: string
}

const facialProcedures: Procedure[] = [
  {
    title: 'Harmonização Facial',
    description: 'Conjunto de procedimentos estéticos não invasivos que melhoram a simetria e o equilíbrio do rosto, como preenchimentos, toxina botulínica e fios de PDO.',
    image: '/procedimentos/24.png',
  },
  {
    title: 'Toxina Botulínica',
    description: 'Suaviza linhas de expressão e rugas relaxando os músculos faciais. Ideal para testa, olhos e sobrancelhas.',
    image: '/procedimentos/25.png',
  },
  {
    title: 'Preenchimento com Ácido Hialurônico',
    description: 'Restaura volume no rosto e lábios, suaviza linhas finas e hidrata a pele.',
    image: '/procedimentos/26.png',
  },
  {
    title: 'Bioestimulador de Colágeno',
    description: 'Estimula a produção de colágeno, tratando flacidez e melhorando textura da pele.',
    image: '/procedimentos/27.png',
  },
  {
    title: 'Microagulhamento',
    description: 'Cria microperfurações na pele para estimular colágeno, indicado para cicatrizes, manchas e poros dilatados.',
    image: '/procedimentos/28.png',
  },
  {
    title: 'Peelings Químicos',
    description: 'Renovação celular com tratamento para manchas, acne, rugas e textura da pele.',
    image: '/procedimentos/29.png',
  },
  {
    title: 'Fios de PDO',
    description: 'Fios absorvíveis que promovem efeito lifting natural e estimulação de colágeno.',
    image: '/procedimentos/30.png',
  },
  {
    title: 'Skinbooster',
    description: 'Microinjeções de ácido hialurônico que hidratam profundamente e rejuvenescem a pele.',
    image: '/procedimentos/31.png',
  },
  {
    title: 'Ultraformer III',
    description: 'Ultrassom para lifting facial e combate à flacidez com estimulação de colágeno.',
    image: '/procedimentos/32.png',
  },
  {
    title: 'Laser Lavieen',
    description: 'Laser fracionado para manchas, flacidez e textura irregular, com efeito “BB glow”.',
    image: '/procedimentos/33.png',
  },
]

export default function FacialProcedures() {
  const [visibleCount, setVisibleCount] = useState(3)

  const handleToggle = () => {
    if (visibleCount >= facialProcedures.length) {
      setVisibleCount(3)
    } else {
      setVisibleCount((prev) => prev + 3)
    }
  }

  const isShowingAll = visibleCount >= facialProcedures.length

  return (
    <section className="py-12 md:pt-40 px-4 md:px-8 lg:px-10 xl:px-40 items-center" id='faciais'>
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Procedimentos Faciais</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facialProcedures.slice(0, visibleCount).map((item, index) => {
          const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o procedimento: ${item.title}`)
          const whatsappLink = `https://wa.me/5551998097108?text=${message}`

          return (
            <div
              key={index}
              className="bg-primary/90 rounded-2xl shadow-xl p-4 hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-xl object-cover h-60 mb-4 mx-auto max-w-[90%]"
              />
              <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
              <p className="text-terciary text-sm md:text-base mb-4">{item.description}</p>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto bg-terciary font-bold text-primary px-4 py-2 rounded-full hover:bg-terciary/90 transition"
              >
                Quero saber mais!
              </Link>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleToggle}
          className="bg-secondary text-white font-semibold px-6 py-2 rounded-full hover:bg-secondary/80 transition"
        >
          {isShowingAll ? 'Mostrar menos' : 'Mostrar mais'}
        </button>
      </div>
    </section>
  )
}
