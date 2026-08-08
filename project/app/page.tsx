import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { MarqueeStrip } from '@/components/sections/MarqueeStrip';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { Cursor } from '@/components/ui/Cursor';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Experience />
        <FeaturedProject />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
