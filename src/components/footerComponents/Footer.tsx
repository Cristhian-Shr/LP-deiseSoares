import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo/1.png';
import { SocialMedia } from './SocialMedia';

const Footer = () => {
    return (
        <footer className="bg-primary text-terciary py-6">
            <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-32">
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 text-center md:text-left">
                    
                    {/* Logo */}
                    <div className="w-full md:w-auto">
                        <Image src={logo} width={160} alt="Logo" className="mx-auto md:mx-0" />
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h3 className="text-lg font-bold mb-1">Redes Sociais</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <SocialMedia />
                        </div>
                    </div>

                    {/* Serviços */}
                    <div className='flex flex-col'>
                        <h3 className="text-lg font-bold mb-1">Serviços</h3>
                       <Link href='#corporais' className='hover:text-secondary font-semibold'>Corporais</Link>
                       <Link href='#faciais' className='hover:text-secondary font-semibold'>Faciais</Link>
                        
                    </div>

                    {/* Links */}
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-1">Links</h3>
                        <Link href='' className='font-semibold hover:text-secondary'>Política de Privacidade</Link>
                        <Link href='' className='font-semibold hover:text-secondary'>FAQ</Link>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-1">Contato</h3>
                        <p className='font-bold hover:text-secondary'>Email: contato@exemplo.com</p>
                        <p className='font-bold hover:text-secondary'>Telefone: 51 99809-7108</p>
                    </div>
                </div>

                <div className='border border-secondary mt-5'></div>

                {/* Linha final */}
                <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm pt-4 text-center'>
                    <p className="font-bold">© 2025 Todos os direitos reservados.</p>
                    <p className='font-bold'>|</p>
                    <Link href="https://www.dinamizasolucaodigital.com.br/" className='hover:text-blue-500 hover:italic font-bold'>
                        Dinamiza - Soluções Digitais
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
