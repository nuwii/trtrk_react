import React, { Fragment } from "react";

const FooterMenu = () => {
  return (
    <Fragment>
      {" "}
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6 d-flex justify-content-xl-center">
        <div className="footer-col">
          <h2>Kolay Erişim</h2>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li>
              <a href="/hizmetlerimiz">Hizmetlerimiz</a>
            </li>
            <li>
              <a href="/teklifAl">Teklif Al</a>
            </li>
            <li>
              <a href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6">
        <div className="footer-col">
          <h2>Sosyal Medya</h2>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Youtube</a>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6">
        <div className="footer-col">
          <h2>contact</h2>
          <h4>
            Koç İkiz Kuleleri B Blok Kat:9
            <br />
            Çankaya / ANKARA
          </h4>
          <ul>
            <li>
              <span>
                <i className="fa fa-envelope c1" />
                info@osicrew.com
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone-square c1" />
                666 888 0000
              </span>
            </li>
          </ul>
        </div>
        {/* /.footer-col */}
      </div>
      {/* /.col-xl-3 */}
    </Fragment>
  );
};
export default FooterMenu;
