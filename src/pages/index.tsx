import { AboutSection } from "@/components/bodyComponentes/AboutSection";
import { Navbar } from "../components/componentsHeader/Navbar";
import PhotoAlbum from "@/components/bodyComponentes/AlbumPhotos";
import Footer from "@/components/footerComponents/Footer";
import WhatsAppButton from "@/components/bodyComponentes/WhatsAppButton";

export default function Home() {
  return (
    <div className="w-full h-screen bg-terciary">
      <Navbar />
      <WhatsAppButton />
      <AboutSection />
      {/* <ProcedurePresentation/> */}
      <PhotoAlbum />
      <Footer />
    </div>
  );
}
