import React, { Fragment } from "react";
import "../../Pages/Pages.css";

const FooterMenu = () => {
  return (
    <Fragment>
      {" "}
      {/* /.col-xl-3 */}
      <div className="col-lg-3 col-md-6 d-flex justify-content-center phoneUnvisible">
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
      <div className="col-lg-3 col-md-6 mobileFooter">
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
      <div className="col-lg-3 col-md-6 mobileFooter">
        <div className="footer-col">
          <h2>İletişim</h2>
          <h4>
            Sağlık 1 Sokak 31/12
            <br />
            Yenişehir / Ankara
          </h4>
          <ul>
            <li>
              <span>
                <i className="fa fa-envelope c1" />
                info@turturk.com.tr
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone-square c1" />
                +90(532)286-38-77
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
