'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

import logoTipo from '../../../public/logo/1.png';
import logoHover from '../../../public/logo/2.png';

export const Navbar: React.FC = () => {
  const [logo, setLogo] = useState(logoTipo);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Faciais", href: "#faciais" },
    { label: "Corporais", href: "#corporais" },
    { label: "Resultados", href: "#resultados" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="w-full h-20 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-40 py-2 bg-primary/90 z-50 fixed top-0 left-0">
      {/* Logo */}
      <div>
        <Image
          alt="Logotipo"
          src={logo}
          className="w-32 sm:w-40 lg:w-44 transition-all duration-300 px-2"
          onMouseEnter={() => setLogo(logoHover)}
          onMouseLeave={() => setLogo(logoTipo)}
        />
      </div>

      {/* Menu desktop */}
      <nav className="hidden md:flex text-terciary font-bold">
        <ul className="flex gap-6">
          {links.map((item) => (
            <li key={item.href} className="hover:text-secondary duration-200">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Ícone menu mobile */}
      <button onClick={handleToggle} className="block md:hidden text-4xl text-terciary z-50">
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Menu mobile fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary text-secondary flex flex-col justify-center items-center gap-6 font-bold text-xl z-40 transition-all duration-300">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleCloseMenu}
              className="hover:text-terciary duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
