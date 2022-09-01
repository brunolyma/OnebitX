import { Section } from "../components/Section/Section";

import HomeBg from "../assets/home/01.webp";
import Sec02 from "../assets/home/02.gif";
import Sec03 from "../assets/home/03.webp";
import Sec04 from "../assets/home/04.webp";
import ArrowGif from "../assets/home/arrowDown.gif";

const sectionContent = [
  {
    id: "sec01",
    title: "Missão Equipe-3",
    subtitle: "Lançamento a caminho",
    animate: { effect: "fade-up" },
    hasButton: true,
    header: true,
    image: HomeBg,
  },
  {
    id: "sec02",
    title: "Missão Equipe-2 retornou para a Terra",
    subtitle: "Missão concluída",
    animate: { effect: "fade-right" },
    hasButton: true,
    header: false,
    image: Sec02,
  },
  {
    id: "sec03",
    title: "Dragon retornou para a Terra",
    subtitle: "Missão concluída",
    animate: { effect: "fade-down" },
    hasButton: true,
    header: false,
    image: Sec03,
  },
  {
    id: "sec04",
    title: "Starship pousa astronautas da NASA na Lua",
    animate: { effect: "fade-down-right" },
    hasButton: true,
    header: false,
    image: Sec04,
  },
];

export function Home() {
  return (
    <>
      {sectionContent &&
        sectionContent.map((section) => (
          <Section key={section.id} sec={section} />
        ))}
    </>
  );
}
