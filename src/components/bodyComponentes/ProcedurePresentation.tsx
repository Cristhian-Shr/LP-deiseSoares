import Image from 'next/image';
import React from 'react';

const ProcedurePresentation:React.FC = () => {
  return (
    <div className="z-50 flex items-center justify-between bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)] p-6
    shadow-lg transition-transform transform hover:scale-105">
      <div className="w-1/2">
        <Image src='' alt="Procedimento" className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="w-1/2 pl-6">
        <h2 className="text-2xl font-bold mb-4">Descrição do Procedimento</h2>
        <p className="text-gray-700"></p>
      </div>
    </div>
  );
};

export default ProcedurePresentation;