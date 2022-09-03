import { Details } from "../Details";
import { Header } from "../Header";
import { Navbar } from "../Navbar/Navbar";

interface PropsHome {
  sec?: {
    id: string;
    image?: JSX.Element | string;
    isHeader: boolean;
    header: {
      title: string;
      subtitle?: string;
      animate: { effect: string; ease?: string; duraction?: string };
      hasButton: boolean;
      gif?: JSX.Element | string;
    };
    extra?: string;
  };
}

export function SectionHome({ sec }: PropsHome) {
  const bg = {
    backgroundImage: `url(${sec?.image})`,
  };

  return (
    <>
      <section style={bg} className="container-fluid wrapper">
        {sec?.isHeader ? <Navbar /> : ""}
        {sec?.header.title ? <Header id={sec?.id} header={sec?.header} /> : ""}
      </section>
      {sec?.extra ? <Details extra={sec.extra} /> : ""}
    </>
  );
}
