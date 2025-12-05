import { Header } from "@/components/Header";
import { Info } from "@/components/Info";
import { About } from "@/components/About";

import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetTouch } from "@/components/GetTouch";

const Home = () => {
  return (
    <div>
      <Header />
      <Info />　
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetTouch />
    </div>
  );
};

export default Home;
