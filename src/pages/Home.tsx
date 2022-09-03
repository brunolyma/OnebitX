import { SectionHome } from "../components/Sections/SectionHome";

import HomeBg from "../assets/home/01.webp";
import Sec02 from "../assets/home/02.gif";
import Sec03 from "../assets/home/03.webp";
import Sec04 from "../assets/home/04.webp";
import ArrowGif from "../assets/home/arrowDown.gif";

const sectionContent = [
  {
    id: "sec01",
    isHeader: true,
    image: HomeBg,
    header: {
      title: "Missão Equipe-3",
      subtitle: "Lançamento a caminho",
      animate: { effect: "fade-up" },
      hasButton: true,
      gif: ArrowGif,
    },
  },
  {
    id: "sec02",
    isHeader: false,
    image: Sec02,
    header: {
      title: "Missão Equipe-2 retornou para a Terra",
      subtitle: "Missão concluída",
      animate: { effect: "fade-right" },
      hasButton: true,
    },
  },
  {
    id: "sec03",
    isHeader: false,
    image: Sec03,
    header: {
      title: "Dragon retornou para a Terra",
      subtitle: "Missão concluída",
      animate: { effect: "fade-down" },
      hasButton: true,
    },
  },
  {
    id: "sec04",
    isHeader: false,
    image: Sec04,
    header: {
      title: "Starship pousa astronautas da NASA na Lua",
      animate: { effect: "fade-down-right" },
      hasButton: true,
    },
  },
];

export function Home() {
  return (
    <main>
      {sectionContent &&
        sectionContent.map((section) => (
          <SectionHome key={section.id} sec={section} />
        ))}
    </main>
  );
}
