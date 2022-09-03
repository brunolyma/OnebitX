type PropsDetail = {
  extra?: string;
};

export function Details({ extra }: PropsDetail) {
  return (
    <>
      {extra === "falcon" ? (
        <div className="container itens">
          <div className="item">
            <h2>126</h2>
            <h5>LANÇAMENTOS TOTAIS</h5>
          </div>
          <div className="item">
            <h2>86</h2>
            <h5>DESEMBARQUES TOTAIS</h5>
          </div>
          <div className="item">
            <h2>68</h2>
            <h5>FOGUETES RECUPERADOS</h5>
          </div>
        </div>
      ) : (
        <div className="container details">
          <p>
            SpaceX também oferece voos cormeciais para orbita terrestre e lunar.
            Para começar a planejar a sua jornada, por favor contate-nos por{" "}
            <a href="mailto:onebitcode@gmail.com">
              <strong>onebitcode@gmail.com</strong>
            </a>
          </p>
        </div>
      )}
    </>
  );
}
