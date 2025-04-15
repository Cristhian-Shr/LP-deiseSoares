'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTipo from '../../../public/logo/1.png';
import logoHover from '../../../public/logo/2.png'; 

export const Navbar: React.FC = () => {
  const [logo, setLogo] = useState(logoTipo);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 h-auto py-4 md:py-6 bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)]">
      
      {/* Logo */}
      <div className="bg-primary rounded-full px-2 mb-4 md:mb-0">
        <Image 
          alt="logotipo" 
          src={logo} 
          className="w-32 sm:w-40 lg:w-52 transition-all duration-300 px-2"
          onMouseEnter={() => setLogo(logoHover)} 
          onMouseLeave={() => setLogo(logoTipo)}
        />
      </div>

      {/* Menu */}
      <nav className="text-terciary font-bold flex">
        <ul className="flex flex-col md:flex-row gap-4 text-center">
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
