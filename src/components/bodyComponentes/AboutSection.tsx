import Image from 'next/image';
import photoAbout from '../../../public/fotos/deiseSemFundo2.png';

export const AboutSection: React.FC = () => {
    return (
        <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-20 xl:px-40 py-20 bg-gradient-to-b from-primary to-primary/90">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                <div className="space-y-2">
                    <h1 className="font-bold text-terciary text-4xl sm:text-5xl">Dra. Deise Soares</h1>
                    <span className="inline-block px-6 py-2 text-secondary italic text-sm font-bold rounded-full bg-primary/40 border border-secondary/30">
                        Biomédica Esteta | Especialista em Harmonização Facial e Corporal
                    </span>
                </div>
                <div className="flex flex-col gap-4 text-terciary/90 text-lg">
                    <p className="indent-8">
                        Minha missão é realçar a beleza natural dos meus pacientes, elevando sua autoestima e proporcionando um bem-estar duradouro.
                        Acredito que a verdadeira estética vai além da aparência; ela transforma, empodera e traz felicidade.
                    </p>
                    <p className="indent-8">
                        Minha jornada na estética começou há muitos anos, quando atuei como Instrumentadora de Cirurgias Plásticas.
                        Durante esse período, percebi que era nesse universo de transformação e cuidado que eu queria construir minha carreira.
                    </p>
                    <p className="indent-8">
                        Em 2010, conclui minha graduação em Biomedicina e, desde então, busquei me aprofundar cada vez mais na área estética.
                        Me especializei em Biomedicina Estética, Hemoterapia e Hematologia, com mais de 20 cursos de especialização.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-terciary/20 rounded-full blur-2xl"></div>
                    <Image
                        alt="Dra. Deise Soares"
                        src={photoAbout}
                        className="w-80 lg:w-[500px] relative z-10"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};