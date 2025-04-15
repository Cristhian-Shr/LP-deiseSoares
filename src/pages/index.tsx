import { AboutSection } from "@/components/bodyComponentes/AboutSection";
import { Navbar } from "../components/componentsHeader/Navbar";
import PhotoAlbum from "@/components/bodyComponentes/AlbumPhotos";
import Footer from "@/components/footerComponents/Footer";
import WhatsAppButton from "@/components/bodyComponentes/WhatsAppButton";
import ProcedurePresentation from "@/components/bodyComponentes/ProcedurePresentation";
import ProcedurePresentation2 from "@/components/bodyComponentes/ProcedurePresentation2";
import ProcedurePresentation3 from "@/components/bodyComponentes/ProcedurePresentation3";


export default function Home() {
  return (
    <div className="w-full h-screen bg-terciary">
      <Navbar />
      <WhatsAppButton />
      <AboutSection />
      <ProcedurePresentation />
      <ProcedurePresentation2 />
      <ProcedurePresentation3 />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}
