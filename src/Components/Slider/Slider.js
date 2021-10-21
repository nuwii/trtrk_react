import React from "react";
import "../../Pages/Pages.css";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      id="minimal-bootstrap-carousel"
      className="carousel slide carousel-fade slider-content-style-one slider-home-one"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#minimal-bootstrap-carousel"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#minimal-bootstrap-carousel" data-slide-to={1} />
        <li data-target="#minimal-bootstrap-carousel" data-slide-to={2} />
      </ol>
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div
          className="carousel-item active slide-1"
          style={{
            backgroundImage: "url(img/bg/slider.jpg)",
            backgroundPosition: "center left",
          }}
        >
          <div className="carousel-caption">
            <div className="container">
              <div className="box valign-middle">
                <div className="content text-center">
                  <h2
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                    data-animation="animated fadeInUp "
                    className="animDe-2"
                  >
                    Filo Kiralamada
                  </h2>
                  <h2
                    data-animation="animated fadeInUp "
                    className="animDe-3"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Çözüm Ortağınız
                  </h2>
                  <Link
                    to="/iletisim"
                    data-animation="animated fadeInUp "
                    className="bg1 text-white banner-btn animDe-4"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    İLETİŞİM
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="carousel-item slide-3"
          style={{
            backgroundImage: "url(img/bg/bg-9.jpg)",
            backgroundPosition: "top center",
          }}
        >
          <div className="carousel-caption">
            <div className="container">
              <div className="box valign-middle">
                <div className="content text-center">
                  <h2
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                    data-animation="animated fadeInUp "
                    className="animDe-2"
                  >
                    Kalite,
                  </h2>
                  <h2
                    data-animation="animated fadeInUp "
                    className="animDe-3"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Konfor ve Güvenlik
                  </h2>

                  <Link
                    to="/turizm-tasimacilik"
                    data-animation="animated fadeInUp "
                    className="bg1 text-white banner-btn animDe-4"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    DETAY
                  </Link>
                  {/* /.banner-btn-box */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item slide-3"
          style={{
            backgroundImage: "url(img/bg/slider4.jpg)",
            backgroundPosition: "top center",
          }}
        >
          <div className="carousel-caption">
            <div className="container">
              <div className="box valign-middle">
                <div className="content text-center">
                  <h2
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                    data-animation="animated fadeInUp "
                    className="animDe-2"
                  >
                    Güçlü Filo,
                  </h2>
                  <h2
                    data-animation="animated fadeInUp "
                    className="animDe-3"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Güçlü Hizmet Ağı
                  </h2>

                  <Link
                    to="/kongre-toplanti-organizasyon"
                    data-animation="animated fadeInUp "
                    className="bg1 text-white banner-btn animDe-4"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    DETAY
                  </Link>
                  {/* /.banner-btn-box */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item slide-3"
          style={{
            backgroundImage: "url(img/bg/slider5.jpg)",
            backgroundPosition: "top center",
          }}
        >
          <div className="carousel-caption">
            <div className="container">
              <div className="box valign-middle">
                <div className="content text-center">
                  <h2
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                    data-animation="animated fadeInUp "
                    className="animDe-2"
                  >
                    Her Anınızda,
                  </h2>
                  <h2
                    data-animation="animated fadeInUp "
                    className="animDe-3"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    V.I.P. Hizmet Yanınızda
                  </h2>

                  <Link
                    to="/vip"
                    data-animation="animated fadeInUp "
                    className="bg1 text-white banner-btn animDe-4"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    DETAY
                  </Link>
                  {/* /.banner-btn-box */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item slide-3"
          style={{
            backgroundImage: "url(img/bg/slider6.jpg)",
            backgroundPosition: "top center",
          }}
        >
          <div className="carousel-caption">
            <div className="container">
              <div className="box valign-middle">
                <div className="content text-center">
                  <h2
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                    data-animation="animated fadeInUp "
                    className="animDe-2"
                  >
                    Sektörde
                  </h2>
                  <h2
                    data-animation="animated fadeInUp "
                    className="animDe-3"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Yenilikçi Anlayış
                  </h2>

                  <Link
                    to="/filo-kiralama"
                    data-animation="animated fadeInUp "
                    className="bg1 text-white banner-btn animDe-4"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      letterSpacing: "2px",
                    }}
                  >
                    DETAY
                  </Link>
                  {/* /.banner-btn-box */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      <a
        className="carousel-control-prev carousel-control-one-prev"
        href="#minimal-bootstrap-carousel"
        role="button"
        data-slide="prev"
      >
        <i className="fa fa-angle-left" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next carousel-control-one-next"
        href="#minimal-bootstrap-carousel"
        role="button"
        data-slide="next"
      >
        <i className="fa fa-angle-right" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
export default Slider;
