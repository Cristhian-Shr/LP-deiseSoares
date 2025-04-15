import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo/1.png';
import { SocialMedia } from './SocialMedia';

const Footer = () => {
    return (
        <footer className="bg-primary text-terciary py-6 h-44">
            <div className="mx-auto px-32">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <div className="mb-4 md:mb-0">
                            <Image src={logo} width={160} alt="Logo" />
                        </div>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Redes Sociais</h3>
                        <div className="flex space-x-4">
                           <SocialMedia />
                        </div>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Serviços</h3>
                        <p>Corporais</p>
                        <p>Faciais</p>
                    </div>

                    <div className="mb-4 md:mb-0 flex flex-col">
                        <h3 className="text-lg font-bold"></h3>
                        <Link href=''>Política de Privacidade</Link>
                        <Link href=''>FAQ</Link>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Contato</h3>
                        <p>Email: contato@exemplo.com</p>
                        <p>Telefone: (11) 1234-5678</p>
                    </div>
                </div>

                <div className='justify-center gap-4 flex text-sm pt-8'>
                    <p className="font-bold">© 2025 Todos os direitos reservados.</p>
                    <p className='font-bold'>|</p>
                    <Link href="#" className='hover:text-secondary hover:italic font-bold'>Dinamiza - Soluções Digitais</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;