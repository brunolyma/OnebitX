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
    isHeader: true,
    header: {
      title: "HUMAN SPACEFLIGHT",
      subtitle: "FAZENDO A VIDA MULTIPLANETÁRIA",
      animate: { effect: "fade-down" },
      hasButton: false,
      gif: ArrowGif,
    },
    image: HumanFliBg,
  },
  {
    id: "sec02",
    isHeader: false,
    header: {
      title: "Orbita da Terra",
      subtitle: "EXPERIMENTE O PLANETA AZUL A 300KM DE ALTURA",
      animate: { effect: "fade-right" },
      hasButton: true,
    },
    extra:
      "SpaceX também oferece voos cormeciais para orbita terrestre e lunar. Para começar a planejar a sua jornada, por favor contate-nos por onebitcode@gmail.com",
    image: Sec02,
  },
  {
    id: "sec03",
    isHeader: false,
    header: {
      title: "ESTAÇÃO ESPACIAL",
      subtitle: "TRANSPORTANDO HUMANOS PARA O LABORATÓRIO VOADOR NO CÉU",
      animate: { effect: "fade-up" },
      hasButton: true,
    },
    image: Sec03,
  },
  {
    id: "sec04",
    isHeader: false,
    header: {
      title: "LUA",
      subtitle: "RETORNANDO HUMANOS PARA A NOSSA LUA VIZINHA",
      animate: { effect: "zoom-in-left" },
      hasButton: true,
    },
    image: Sec04,
  },
  {
    id: "sec05",
    isHeader: false,
    header: {
      title: "MARTE E ALÉM",
      subtitle: "O CAMINHO PARA TORNAR A HUMANIDADE MULTIPLANETÁRIA",
      animate: { effect: "flip-right" },
      hasButton: true,
    },
    image: Sec05,
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
