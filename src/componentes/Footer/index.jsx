import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://web.facebook.com/Doiany/">
          <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://x.com/JorgeDoiany">
          <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/jorgedoiany/?hl=es-la">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Jorge Peguero</strong>
    </footer>
  );
};

export default Footer;
