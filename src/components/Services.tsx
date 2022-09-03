export function Services() {
  return (
    <section className="services">
      <p data-aos="fade-left" data-aos-duration="1200" className="text-center">
        Para mais informações sobre os serviçoes entre em contato com{" "}
        <a href="mailto:onebitcode@gmail.com">
          <span>onebitcode@gmail.com</span>
        </a>
      </p>
      <div className="d-flex flex-column gap-md-0 gap-3 flex-md-row mt-5">
        <button
          type="button"
          data-aos="flip-left"
          data-aos-duration="1500"
          className="d-block btn me-md-1 btn-outline-light py-3"
        >
          BAIXAR GUIA DO USUÁRIO
        </button>
        <button
          type="button"
          data-aos="flip-up"
          data-aos-duration="1500"
          className="d-block ms-md-1 btn btn-outline-light py-3"
        >
          CAPACIDADES E SERVIÇOS
        </button>
      </div>
    </section>
  );
}
