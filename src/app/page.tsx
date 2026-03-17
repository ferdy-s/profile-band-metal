import Hero from "@/components/Hero";
import About from "@/components/About";
import Members from "@/components/Members";
import Discography from "@/components/Discography";
import Tour from "@/components/Tour";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section id="hero">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        <About />
      </section>

      {/* MEMBERS */}
      <section id="members" className="relative">
        <Members />
      </section>

      {/* DISCOGRAPHY */}
      <section id="discography" className="relative">
        <Discography />
      </section>

      {/* TOUR */}
      <section id="tour" className="relative">
        <Tour />
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
