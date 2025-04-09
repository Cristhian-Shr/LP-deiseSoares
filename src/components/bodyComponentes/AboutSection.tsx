import Image from 'next/image';
import photoAbout from '../../../public/fotos/ensaio_casav-113.jpeg';

export const AboutSection: React.FC = () => {
    return (
        <div className='w-full flex h-screen bg-[linear-gradient(to_right,#c1c3b7,#a1a696,#808b77,#405740,#405740)] px-40'>
            <div className='flex-1 flex flex-col gap-2 items-center justify-center'>
                <h1 className='font-bold text-primary text-4xl text-end'> Dra. Deise Soares</h1>
                <span className='py-2 text-secondary italic text-sm font-bold rounded-full bg-terciary transition-opacity duration-300 px-2'>Biomédica Esteta | Especialista em Harmonização Facial e Corporal</span>
                <div className=' pt-2 flex flex-col gap-4'>
                    <p className='text-primary text-lg'>
                        Minha missão é realçar a beleza natural dos meus pacientes, elevando sua autoestima e proporcionando um bem-estar duradouro.
                        Acredito que a verdadeira estética vai além da aparência; ela transforma, empodera e traz felicidade. É isso que me motiva a
                        seguir meu propósito todos os dias.
                    </p>
                    <p className='text-primary text-lg'>
                        Minha jornada na estética começou há muitos anos, quando atuei como Instrumentadora de Cirurgias Plásticas.
                        Durante esse período, percebi que era nesse universo de transformação e cuidado que eu queria construir minha carreira.
                    </p>
                    <p className='text-primary text-lg'>
                        Em 2010, conclui minha graduação em Biomedicina e, desde então, busquei me aprofundar cada vez mais na área estética.
                        Me especializei em Biomedicina Estética, Hemoterapia e Hematologia, e, ao longo da minha trajetória, já realizei mais de
                        20 cursos de especialização nas áreas da saúde e estética.
                    </p>
                    <p className='text-primary text-lg'>
                        Cada paciente que tenho o privilégio de atender fortalece ainda mais a minha certeza de que estou no caminho certo.
                        Sou apaixonada pelo que faço, e a cada atendimento, me sinto mais realizada em poder oferecer o melhor cuidado, com excelência e naturalidade.
                    </p>
                </div>
            </div>
            {/* Imagem com Hover */}
            <div className="flex-1 flex items-center justify-center pl-2">
                <Image
                    alt="Foto Deise"
                    src={photoAbout}
                    className="h-[900px]"
                />
                {/* <div className="absolute inset-0 rounded-full bg-white opacity-10 transition-opacity duration-300 hover:opacity-0"></div> */}
            </div>
        </div>
    )
}
