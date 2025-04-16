'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoTipo from '../../../public/logo/1.png';
import logoHover from '../../../public/logo/2.png';
import { IoMenu } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar: React.FC = () => {
  const [logo, setLogo] = useState(logoTipo);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 md:py-6 
    bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)]">

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

      {/* Menu tradicional (somente tablet e desktop) */}
      <nav className="hidden md:flex text-terciary font-bold">
        <ul className="flex gap-6">
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

      {/* Dropdown menu (somente no celular) */}
      <div className="block md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-5xl text-terciary">
            <IoMenu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primary border-secondary mr-5 w-40 h-48 font-bold text-secondary flex flex-col items-center">
            <DropdownMenuItem className="py-2 hover:text-terciary w-full text-center ">
              <Link href="/about">Sobre</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 hover:text-terciary w-full text-center">
              <Link href="/services">Serviços</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 hover:text-terciary w-full text-center">
              <Link href="/results">Resultados</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 hover:text-terciary w-full text-center">
              <Link href="/testimonials">Depoimentos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 hover:text-terciary w-full text-center">
              <Link href="/contact">Contato</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
