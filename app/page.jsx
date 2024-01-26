import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
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
    </main>
  )
}
