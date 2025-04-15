'use client'

import Image from 'next/image'

export default function ProcedurePresentation2() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6 gap-10 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)]">

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-white">Nome do Procedimento</h2>
        <p className="text-lg text-white/80">
          Aqui você pode descrever os benefícios do procedimento, como ele é feito,
          resultados esperados e qualquer outra informação relevante.
        </p>
      </div>

      {/* Imagem com fundo */}
      <div className="relative w-full md:w-1/2 aspect-[4/3]">
        {/* Imagem de fundo decorativa */}
        <div className="absolute -left-6 top-6 w-full h-full z-0 transform rotate-2">
          <Image
            src="/fundo-decorativo.png"
            alt="Fundo decorativo"
            fill
            className="object-cover rounded-2xl opacity-60"
          />
        </div>

        {/* Imagem principal */}
        <div className="relative w-full h-full z-10 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/procedimento.jpg"
            alt="Imagem do procedimento"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
