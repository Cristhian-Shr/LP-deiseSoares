import { AboutSection } from "@/components/bodyComponentes/AboutSection";
import { Navbar } from "../components/headerComponents/Navbar";
import PhotoAlbum from "@/components/bodyComponentes/AlbumPhotos";
import Footer from "@/components/footerComponents/Footer";
import WhatsAppButton from "@/components/bodyComponentes/WhatsAppButton";
import FacialProcedures from "@/components/bodyComponentes/FacialProcedure";
import BodyProcedures from "@/components/bodyComponentes/BodyProcedure";


export default function Home() {
  return (
    <div className="w-full h-full bg-terciary">
      <Navbar />
      <WhatsAppButton />
      <AboutSection />
      <FacialProcedures />
      <BodyProcedures />
      <PhotoAlbum />
      <Footer />
    </div>
  );
}
