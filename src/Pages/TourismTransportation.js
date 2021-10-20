import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layouts/LayoutOne";
import SideBar from "../Components/SideBar/SideBar";

const TourismTransportation = () => {
  return (
    <Fragment>
      <Layout>
        <div>
          <div className="op-header">
            <div className="thm-header text-center">
              <ul className="pb-10">
                <li>
                  <a href="/" className="c1">
                    ANASAYFA
                  </a>
                </li>
                <li className="c1">TURİZM TAŞIMACILIK</li>
              </ul>
              <h1 className="c3">TURİZM TAŞIMACILIK</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.op-header */}
          <div className="single-service f1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <article>
                    <figure>
                      <img src="img/turizm/turizm2.jpg" alt="Service Thumb" />
                    </figure>
                    <div className="service-body">
                      <h2>Turizm Taşımacılık</h2>
                      <p>
                        TurTürk olarak yerli ve yabancı tüm konuklarımızın
                        seyahatlerinde zamanlama, konfor ve güvenliklerini ön
                        planda tutarak, mesleğinde uzmanlaşmış yetkin
                        personellerimiz ile sizlere hizmet vermekteyiz.
                      </p>
                      <div className="row flex-md-row flex-column align-items-center">
                        <div className="col-sm-6">
                          <img
                            src="img/turizm/turizm1.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6">
                          <img
                            src="img/turizm/turizm3.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.d-flex */}
                      <h3>Seyahatlerinizde kullanılan tüm araçlarımızın;</h3>
                      <ul>
                        <li>
                          İç ve dış temizlikleri düzenli olarak yapılmaktadır.
                        </li>
                        <li>
                          Sadece seyahat öncesinde değil, seyahat esnasında da
                          temiz ve hijyenik olmasına özen gösterilmektedir.
                        </li>
                        <li>
                          Muayene ve sigorta poliçeleri ( ihtiyari mali
                          mesuliyet, kasko, trafik) eksiksiz şekilde
                          yapılmaktadır.
                        </li>
                        <li>
                          Herhangi bir kazaya sebebiyet vermemek adına kapıların
                          tümü otomatik olup, sürücü tarafından kumanda
                          edilmektedir.
                        </li>
                        <li>Tüm güvenlik kontrolleri yapılmaktadır.</li>
                      </ul>
                    </div>
                    {/* /.service-body */}

                    {/* /.quote-form */}
                  </article>
                </div>
                {/* /.col-lg-8 */}

                <SideBar />

                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}

            {/* /.partners */}
          </div>
          {/* /.service */}
        </div>
      </Layout>
    </Fragment>
  );
};
export default TourismTransportation;
