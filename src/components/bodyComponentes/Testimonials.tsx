'use client'

import Image from 'next/image'
import { FC } from 'react'

type Testimonial = {
  name: string
  role: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Denise Soares',
    role: 'Aposentada',
    text: 'Tenho orgulho de dizer que fui a primeira paciente da Dra Deise. Faço meus tratamentos estéticos com ela há mais de 12 anos e agradeço o carinho e cuidado em cada procedimento, sempre respeitando meu momento e minha individualidade. Indico de olhos fechados o seu excelente trabalho.',
    image: '/depoimentos/depoimento01.jpg',
  },
  {
    name: 'Mariely Gaesky',
    role: 'Consultora de Marketing Digital',
    text: 'Dra Deise! Quero te agradecer pelo cuidado e carinho em cada detalhe. A naturalidade do resultado final ficou maravilhosa, tudo do jeitinho que eu queria! Eu, que morria de medo de agulha, agora não vivo mais sem. Obrigada pelo seu cuidado e paciência de sempre.',
    image: '/depoimentos/depoimento02.jpg',
  },
  {
    name: 'Verônica Villar',
    role: 'Empresária',
    text: 'Confio no trabalho da Dra. Deise desde meus 24 anos, onde ela cuida do meu rosto desde meu processo de emagrecimento. Estava sentindo meu rosto derretendo e ela como um toque de mágica transformou meu rosto! Faço botox regularmente, preenchedores e bioestimuladores e eu simplesmente confio de olhos fechados e indico para todas as minhas clientes!',
    image: '/depoimentos/depoimento03.jpg',
  },
]

const Testimonials: FC = () => {
  return (
    <main className="bg-terciary px-4 py-20" id='depoimentos'>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary rounded-3xl shadow-lg p-8 transition hover:shadow-xl duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  width={64}
                  height={64}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div>
                  <p className="text-lg font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-terciary italic">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-terciary italic leading-relaxed">
                “{testimonial.text}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Testimonials
