import Typewriter from "typewriter-effect";
import imgShopping from "../assets/imgs/shopping.png";

const TitleTypeWriter = () => {
  return (
    <section className="row align-items-center">
      <div className="col-12 col-md-7">
        <h1 className="display-5 titulo">
          Bienvenido a mi{" "}
          <span style={{ color: "#916ad9" }}> tienda online</span> 🛍️
        </h1>
        <h1 className="text-center">
          <Typewriter
            options={{
              strings: [" ✋ Kosmica"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50, // Velocidad de eliminación
              delay: 75, // Velocidad de escritura
            }}
          />
        </h1>
      </div>
      <div className="col-12 col-md-5 text-center">
        <img
          style={{ width: "450px", maxWidth: "100%" }}
          src={imgShopping}
          alt="Ecommerce"
          className="img-fluid text-center px-3"
        />
      </div>
    </section>
  );
};

export default TitleTypeWriter;
