import { SectionHuman } from "../components/Sections/SectionHuman";

import HumanFliBg from "../assets/humanFlight/01.webp";
import Sec02 from "../assets/humanFlight/02.webp";
import Sec03 from "../assets/humanFlight/03.webp";
import Sec04 from "../assets/humanFlight/04.webp";
import Sec05 from "../assets/humanFlight/05.webp";
import ArrowGif from "../assets/humanFlight/arrowDown.gif";
import { Services } from "../components/Services";

const sectionContent = [
  {
    id: "sec01",
    title: "Missão Equipe-3",
    subtitle: "Lançamento a caminho",
    animate: { effect: "fade-up" },
    hasButton: true,
    header: true,
    image: HumanFliBg,
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

export function HumanFlight() {
  return (
    <>
      {sectionContent &&
        sectionContent.map((section) => (
          <SectionHuman key={section.id} sec={section} />
        ))}

      <Services />
    </>
  );
}
