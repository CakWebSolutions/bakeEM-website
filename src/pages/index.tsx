import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Process from "./Process";
import Cakes from "./Cakes";
import Contact from "./Contact";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Process />
      <Cakes />
      <Contact />
      <Footer />
    </div>
  );
}
