import { Header } from "@/components/Header";
import { Info } from "@/components/Info";
import { About } from "@/components/About";

import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetTouch } from "@/components/GetTouch";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-[#030712]">
      <Header />
      <Info />　
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetTouch />
      <Footer />
    </div>
  );
};

export default Home;
