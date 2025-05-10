import { BsWhatsapp } from "react-icons/bs";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-primary to-primary/90 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985301/pexels-photo-3985301.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-terciary mb-6">
          Transforme sua Autoestima
        </h2>
        <p className="text-lg md:text-xl text-terciary/90 max-w-2xl mx-auto mb-10">
          Agende sua consulta e descubra como podemos realçar sua beleza natural com procedimentos personalizados e seguros.
        </p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <BsWhatsapp className="w-6 h-6" />
          Agende sua Consulta
        </a>
      </div>
    </section>
  );
};

export default CallToAction;