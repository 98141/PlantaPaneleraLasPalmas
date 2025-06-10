export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container-img">
        <p className="footer__container-paragraph">
          De la caña de azúcar nace la esencia de la panela, que endulza
          nuestras vidas.
        </p>
      </div>
      <div className="footer__container">
        <div className="footer__container-information">
          <p className="footer__container-information">
            Cel: (57) 320 338 5899
          </p>
          <p className="footer__container-information">
            E-mail: palmas12am@gmail.com
          </p>
          <p className="footer__container-information">Dirección: Sandoná</p>
        </div>
        <div className="footer__container-redes">
          <p className="footer__container-information">Siguenos en:</p>
          <a href="https://www.facebook.com/trapichelaspalmas/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
      <div className="footer__container-author">
        <p className="footer__container-author-information">
          Diseño y desarrollo
        </p>
        <p className="footer__container-author-information">
          <a
            href="https://portafolio-sigma-smoky.vercel.app/
          "
            className="link"
            target="_blank"
          >
            © 2023 Armando Mora.
          </a>
        </p>
      </div>
    </footer>
  );
}
