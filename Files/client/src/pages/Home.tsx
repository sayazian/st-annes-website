import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Newcomers from "@/components/Newcomers";
import ServiceInfo from "@/components/ServiceInfo";
import Labyrinth from "@/components/Labyrinth";
import Preschool from "@/components/Preschool";
import Events from "@/components/Events";
import Donation from "@/components/Donation";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Newcomers />
        <ServiceInfo />
        <Labyrinth />
        <Preschool />
        <Events />
        <Donation />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
