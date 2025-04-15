'use client'
import Image from 'next/image'

type Procedure = {
  title: string
  description: string
  image: string
}

const facialProcedures: Procedure[] = [
  {
    title: 'Harmonização Facial',
    description: 'Conjunto de procedimentos estéticos não invasivos que melhoram a simetria e o equilíbrio do rosto, como preenchimentos, toxina botulínica e fios de PDO.',
    image: '/images/faciais/harmonizacao.jpg',
  },
  {
    title: 'Toxina Botulínica',
    description: 'Suaviza linhas de expressão e rugas relaxando os músculos faciais. Ideal para testa, olhos e sobrancelhas.',
    image: '/images/faciais/botox.jpg',
  },
  {
    title: 'Preenchimento com Ácido Hialurônico',
    description: 'Restaura volume no rosto e lábios, suaviza linhas finas e hidrata a pele.',
    image: '/images/faciais/preenchimento.jpg',
  },
  {
    title: 'Bioestimulador de Colágeno',
    description: 'Estimula a produção de colágeno, tratando flacidez e melhorando textura da pele.',
    image: '/images/faciais/bioestimulador.jpg',
  },
  {
    title: 'Microagulhamento',
    description: 'Cria microperfurações na pele para estimular colágeno, indicado para cicatrizes, manchas e poros dilatados.',
    image: '/images/faciais/microagulhamento.jpg',
  },
  {
    title: 'Peelings Químicos',
    description: 'Renovação celular com tratamento para manchas, acne, rugas e textura da pele.',
    image: '/images/faciais/peeling.jpg',
  },
  {
    title: 'Fios de PDO',
    description: 'Fios absorvíveis que promovem efeito lifting natural e estimulação de colágeno.',
    image: '/images/faciais/fios.jpg',
  },
  {
    title: 'Skinbooster',
    description: 'Microinjeções de ácido hialurônico que hidratam profundamente e rejuvenescem a pele.',
    image: '/images/faciais/skinbooster.jpg',
  },
  {
    title: 'Ultraformer III',
    description: 'Ultrassom para lifting facial e combate à flacidez com estimulação de colágeno.',
    image: '/images/faciais/ultraformer.jpg',
  },
  {
    title: 'Laser Lavieen',
    description: 'Laser fracionado para manchas, flacidez e textura irregular, com efeito “BB glow”.',
    image: '/images/faciais/laser.jpg',
  },
]

export default function FacialProcedures() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)] items-center">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Procedimentos Faciais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {facialProcedures.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow p-4 hover:shadow-lg transition flex flex-col items-center text-center"
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
