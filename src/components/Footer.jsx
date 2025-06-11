import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaNpm,
  FaChrome,
  FaPaypal,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto del Footer */}
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; 2025{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.urianviera.com"
                className="text-white text-decoration-none"
              >
                Isabel Cristina Bedoya Bustamante
              </a>{" "}
              || Todos los derechos reservados.
            </p>
          </div>
          {/* Íconos Sociales */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="social-icons d-inline-flex justify-content-center">
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaYoutube />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaNpm />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white me-3"
              >
                <FaChrome />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href=""
                className="text-white"
              >
                <FaPaypal />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
