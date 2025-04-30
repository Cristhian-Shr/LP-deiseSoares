'use client'
import Image from 'next/image'

type Procedure = {
  title: string
  description: string
  image: string
}

const bodyProcedures: Procedure[] = [
  {
    title: 'Harmonização Glútea',
    description: 'Melhora o contorno, volume e trata celulite e flacidez nos glúteos com preenchedores e bioestimuladores.',
    image: '/images/corporais/glutea.jpg',
  },
  {
    title: 'Lipo Enzimática',
    description: 'Reduz gordura localizada com enzimas que quebram células de gordura, promovendo contorno corporal.',
    image: '/images/corporais/lipo.jpg',
  },
  {
    title: 'PEIM',
    description: 'Tratamento injetável para microvasos e varizes, melhorando a aparência das pernas.',
    image: '/images/corporais/peim.jpg',
  },
  {
    title: 'Tratamentos para Celulite',
    description: 'Mesoterapia, bioestimuladores e ultrassom para reduzir inflamação e flacidez, promovendo pele lisa.',
    image: '/images/corporais/celulite.jpg',
  },
]

export default function BodyProcedures() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-40 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)]">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Procedimentos Corporais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bodyProcedures.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="rounded-xl object-cover w-full h-60 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
