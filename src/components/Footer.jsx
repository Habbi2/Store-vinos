import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import logoCopa from "../img/logoCopa.png";
import "../assets/style/footer.scss";

import Search from "../commons/Search";
import { setLogoutRequest, setUserMeRequest } from "../state/user";

const Footer = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);

  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };

  return (
    <div>
      <footer className="footer text-center">
        <div className="container-fluid ">
          <div className="row">
            {/* <!-- Footer Contacto--> */}
            <div className="col-lg-4 mb-5 mb-lg-0 ">
              <h4 className="text-uppercase mb-4 letter">Contacto</h4>
              <p className="lead mb-0 letter">
                Teléfono(+54 911) 2040-1149
                <br />
                <a
                  href="mailto:contacto@plataforma5.la"
                  target="_blank"
                  className="letter"
                >
                  alguiendijovino@gmail.com
                </a>
              </p>
            </div>

            {/* <!-- Footer About Text--> */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4 letter">Direccion</h4>
              <p className="lead mb-0">
                <a
                  href="https://www.google.com.ar/maps/place/La+Maquinita+Co.+Palermo+Hollywood/@-34.582358,-58.4386026,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5926f3bda97:0xf5caae7598d297bd!8m2!3d-34.582358!4d-58.4364139?hl=es-419"
                  target="_blank"
                  className="letter"
                >
                  La Maquinita Co. Palermo Hollywood
                  <br />
                  Buenos Aires, Argentina
                </a>
                .
              </p>
            </div>

            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mt-4 mt-lg-0 letter">Seguinos</h4>
              <a
                className="btn btn-outline-primary btn-social mx-2"
                href="https://www.facebook.com/PlataformaCinco/"
                target="_blank"
              >
                <i className="bi bi-facebook letter"></i>
              </a>
              <a
                className="btn btn-outline-danger btn-social mx-1 instagram"
                href="#!"
              >
                <i className="bi bi-instagram letter"></i>
              </a>
              <a className="btn btn-outline-info btn-social mx-1" href="#!">
                <i className="bi bi-twitter letter"></i>
              </a>
              <a className="btn btn-outline-danger btn-social mx-1" href="#!">
                <i className="bi bi-youtube letter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Copyright Section--> */}
      </footer>
      <div className="copyright py-4 text-center text-white bg-copyright">
        <div className="container">
          <small className="letter">Copyright &copy;  
          {/* Imagen y Titulo */}
        <span className="navbar-brand fs-5">
          <img
            src={logoCopa}
            alt="Logo"
            className="d-inline-block aling-top"
            style={{ width: 30 }}
          />
          Alguien dijo Vino?
        </span></small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
