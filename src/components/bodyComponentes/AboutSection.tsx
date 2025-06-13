import Image from 'next/image';
import photoAbout from '../../../public/fotos/deiseSemFundo2.png';

export const AboutSection: React.FC = () => {
    return (
        <div id='sobre' className="w-full lg:h-screen flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 lg:px-20 xl:px-40 gap-10 lg:gap-20 lg:py-10 pt-28 md:pt-28">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-center text-center lg:text-left font-bold">
                <h1 className="font-bold text-primary text-3xl sm:text-4xl mt-10 md:mt-0">Dra. Deise Soares</h1>
                <span className="px-4 text-secondary italic text-sm font-bold rounded-full bg-terciary">
                    Biomédica Esteta | Especialista em Harmonização Facial e Corporal
                </span>
                <div className="flex flex-col gap-4 text-primary text-base sm:text-lg">
                    <p className="indent-8">
                        Minha missão é realçar a beleza natural dos meus pacientes, elevando sua autoestima e proporcionando um bem-estar duradouro.
                        Acredito que a verdadeira estética vai além da aparência; ela transforma, empodera e traz felicidade. É isso que me motiva a
                        seguir meu propósito todos os dias.
                    </p>
                    <p className="indent-8">
                        Minha jornada na estética começou há muitos anos, quando atuei como Instrumentadora de Cirurgias Plásticas.
                        Durante esse período, percebi que era nesse universo de transformação e cuidado que eu queria construir minha carreira.
                    </p>
                    <p className="indent-8">
                        Em 2010, conclui minha graduação em Biomedicina e, desde então, busquei me aprofundar cada vez mais na área estética.
                        Me especializei em Biomedicina Estética, Hemoterapia e Hematologia, e, ao longo da minha trajetória, já realizei mais de
                        20 cursos de especialização nas áreas da saúde e estética.
                    </p>
                    <p className="indent-8">
                        Cada paciente que tenho o privilégio de atender fortalece ainda mais a minha certeza de que estou no caminho certo.
                        Sou apaixonada pelo que faço, e a cada atendimento, me sinto mais realizada em poder oferecer o melhor cuidado, com excelência e naturalidade.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    alt="Foto Deise"
                    src={photoAbout}
                    className="xl:w-[700px] xl:pt-44 lg:h-auto object-contain"
                    priority
                />
            </div>
        </div>
    );
};
