import { Navbar } from "../Navbar/Navbar";

export interface Props {
  sec?: {
    id: string;
    title: string;
    subtitle?: string;
    animate: { effect: string; ease?: string; duraction?: string };
    hasButton: boolean;
    header: boolean;
    image?: JSX.Element | string;
  };
}

export function Section({ sec }: Props) {
  const bg = {
    backgroundImage: `url(${sec?.image})`,
  };

  return (
    <section style={bg} className="container-fluid wrapper">
      {sec?.header ? <Navbar /> : ""}
      {sec?.title ? (
        <div
          data-aos={sec.animate.effect}
          data-aos-easing={sec.animate.ease}
          data-aos-duration="800"
          className={`sec ${sec?.id} container`}
        >
          <h5>{sec.subtitle}</h5>
          <h2>{sec.title.toUpperCase()}</h2>
          {sec?.hasButton ? (
            <button type="button" className="btn btn-outline-light mt-4">
              SAIBA MAIS
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
