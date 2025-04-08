'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTipo from '../../../public/logo/1.png';
import logoHover from '../../../public/logo/2.png'; 

export const Navbar: React.FC = () => {
  const [logo, setLogo] = useState(logoTipo);

  return (
    <div className="flex px-20 items-center justify-between h-28 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)]">
      <div className="bg-primary rounded-full px-2">
        <Image 
          alt="logotipo" 
          src={logo} 
          className="w-52 transition-all duration-300 px-2"
          onMouseEnter={() => setLogo(logoHover)} 
          onMouseLeave={() => setLogo(logoTipo)}
        />
      </div>

      <nav className="text-terciary font-bold flex z-50">
        <ul className="flex gap-4">
          <li className="hover:text-secondary duration-200">
            <Link href="/about">Sobre</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link href="/services">Serviços</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link href="/results">Resultados</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link href="/testimonials">Depoimentos</Link>
          </li>
          <li className="hover:text-secondary duration-200">
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
