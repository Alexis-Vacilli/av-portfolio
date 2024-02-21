import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import ThemeToggler from "@/components/ThemeToggler";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
        <Hero />
        <Services />
        <Skills />
        <Resume />
        <Work />
        <Blog />
        <Contact />
    </main>
  )
}
