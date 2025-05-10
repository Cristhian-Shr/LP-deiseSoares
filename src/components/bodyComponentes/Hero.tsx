import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/90 to-primary">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-terciary mb-6">
          Realce sua Beleza Natural
        </h1>
        <p className="text-lg md:text-xl text-terciary/90 max-w-2xl mb-8">
          Transforme sua autoestima com procedimentos estéticos personalizados,
          realizados com expertise e cuidado pela Dra. Deise Soares
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#services"
            className="px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition-colors"
          >
            Conheça nossos Serviços
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-terciary text-terciary rounded-full font-semibold hover:bg-terciary/10 transition-colors"
          >
            Agende sua Consulta
          </Link>
        </div>
      </div>
    </div>
  );
}