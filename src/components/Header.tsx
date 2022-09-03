type PropsHeader = {
  id?: string;
  header: {
    title: string;
    subtitle?: string;
    animate: { effect: string; ease?: string; duraction?: string };
    hasButton: boolean;
    gif?: JSX.Element | string;
  };
};

export function Header({ id, header }: PropsHeader) {
  return (
    <header
      id={id}
      data-aos={header.animate.effect}
      data-aos-easing={header.animate.ease}
      data-aos-duration="800"
      className="header wrapper container-lg"
    >
      <h5>{header.subtitle?.toUpperCase()}</h5>
      <h2>{header.title.toUpperCase()}</h2>
      {header?.hasButton ? (
        <button type="button" className="btn btn-outline-light btn-lg mt-4">
          SAIBA MAIS
        </button>
      ) : (
        ""
      )}
      {header.gif ? (
        <div className="arrowDown d-none d-md-block">
          <a href="#sec02">
            <img src={`${header.gif}`} alt="seta para baixo" />
          </a>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
