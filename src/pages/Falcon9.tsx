import { Section } from "../components/Section/Section";

import FalconBg from "../assets/falcon9/01.webp";
import Sec02 from "../assets/falcon9/02.webp";
import Sec03 from "../assets/falcon9/03.webp";
import Sec04 from "../assets/falcon9/04.webp";
import Sec05 from "../assets/falcon9/05.webp";
import Sec06 from "../assets/falcon9/06.webp";
import Sec07 from "../assets/falcon9/07.webp";
import Sec08 from "../assets/falcon9/08.webp";
import Sec09 from "../assets/falcon9/09.webp";
import Sec10 from "../assets/falcon9/10.webp";
import Sec11 from "../assets/falcon9/11.webp";
import Sec12 from "../assets/falcon9/12.webp";
import Sec13 from "../assets/falcon9/13.webp";
import Sec14 from "../assets/falcon9/14.webp";

const sectionContent = [
  {
    id: "sec01",
    title: "Missão Equipe-3",
    subtitle: "Lançamento a caminho",
    animate: { effect: "fade-up" },
    hasButton: true,
    header: true,
    image: FalconBg,
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

export function Falcon9() {
  return (
    <>
      {sectionContent &&
        sectionContent.map((section) => (
          <Section key={section.id} sec={section} />
        ))}
    </>
  );
}
