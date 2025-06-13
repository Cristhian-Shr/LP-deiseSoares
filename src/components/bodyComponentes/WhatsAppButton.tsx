import Link from 'next/link';
import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = '5551998097108'; 
  const message = 'Olá! Gostaria de mais informações.'; 
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-20 bg-green-600 text-white rounded-full p-3 shadow-lg hover:bg-green-700 transition duration-300 z-50"
    >
      <BsWhatsapp className='w-8 h-8' />
    </Link>
  );
};

export default WhatsAppButton;