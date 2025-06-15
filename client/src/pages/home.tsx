import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesBlock from "@/components/ServicesBlock";
import Calculator from "@/components/Calculator";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Certificates from "@/components/Certificates";
import Suppliers from "@/components/Suppliers";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import DesignPortfolio from "@/components/DesignPortfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Services />
        <ServicesBlock />
        <Calculator />
        <Portfolio />
        <DesignPortfolio />
        <Process />
        <Team />
        <FAQ />
        <Suppliers />
        <Partners />
        <Contact />
        <Certificates />
      </main>
      <Chat />
      <Footer />
    </div>
  );
}
