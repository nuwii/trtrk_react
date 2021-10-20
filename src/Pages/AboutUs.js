import React, { Fragment } from "react";
import LayoutOne from "../Layouts/LayoutOne";
import "./Pages.css";

const AboutUs = () => {
  return (
    <Fragment>
      <LayoutOne>
        <div>
          <div className="op-header">
            <div className="thm-header text-center">
              <ul className="pb-10">
                <li>
                  <a href="/about" className="c1">
                    ANASAYFA
                  </a>
                </li>
                <li className="c1">HAKKIMIZDA</li>
              </ul>
              <h1 className="c3">HAKKIMIZDA</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.op-header */}
          <div className="about-page f1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <header>
                    <figure>
                      <img src="img/about-3-1.jpg" alt="About us" />
                      <figcaption>
                        <p className="f1 fw-3">
                          2007 yılında Turizm Taşımacılık,
                          Kongre-Toplantı-Organizasyon alanlarında faaliyet
                          göstermeye başlayan firmamız, sektörel olarak edinmiş
                          olduğu tecrübelerle Filo Kiralama ve Kurumlara özel
                          hizmetler sunarak sektöründe hizmet vermektedir.
                          <br />
                          Her geçen gün filosunu ve hizmet ağını güçlendirerek
                          hizmet veren TurTürk taşımacılık sektörünün önde gelen
                          firmalarından olmuştur.
                          <br />
                          Kurumsal firmaların ve kurumların taşımacılık ve
                          organizasyon hizmeti ihtiyaçlarında "Kalite, Konfor ve
                          Güvenlik" ilkelerimizden ödün vermeden
                          faaliyetlerimizi sürdürmekteyiz.
                          <br />
                          TurTürk olarak başarımızı tüm müşterilerimize eksiksiz
                          olarak sunduğumuz kalite politikamıza, hizmet odaklı
                          olmamıza, yenilikçi anlayışımıza borçluyuz.
                        </p>
                      </figcaption>
                    </figure>
                  </header>
                </div>
                {/* /.col-12 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <div className="faqs">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="thm-header text-center">
                      <p className="c1 pb-10">TUrTÜRK</p>
                      <h1 className="c3">Misyonumuz</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}
                  <div className="col-xl-6 text-xl-left text-center mb-xl-0 mb-3">
                    <img
                      src="img/faq-1-1.jpg"
                      alt="Frequently Asked Questions"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-xl-6">
                    <p className="text-about">
                      TurTürk; tüm çalışma arkadaşları ile birlikte gelişen
                      teknolojik yenilikleri takip edip, çevreye duyarlı
                      anlayışı ile kalitesinden ödün vermeden hizmet vermeye
                      devam edecektir.
                    </p>
                  </div>
                  {/* /.col-lg-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.faqs */}
            <div style={{ backgroundColor: "white" }} className="faqs">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="thm-header text-center">
                      <p className="c1 pb-10">TUrTÜRK</p>
                      <h1 className="c3">Vizyonumuz</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}

                  <div className="col-xl-6">
                    <p className="text-about">
                      Her geçen gün kararlı büyümemizi sağlayan yenilikçi
                      adımlar atarken, Türkiye'nin her ilinde kaliteli hizmetler
                      sunarak sürdürülebilir hizmet vermeye devam edeceğiz.
                    </p>
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-xl-6 text-xl-left text-center mb-xl-0 mb-3">
                    <img
                      src="img/faq-1-1.jpg"
                      alt="Frequently Asked Questions"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.faqs */}
          </div>
          {/* /.about-page */}
          {/* /.page-wrapper */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};
export default AboutUs;
