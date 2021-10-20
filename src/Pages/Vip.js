import React from "react";
import Layout from "../Layouts/LayoutOne";
import { Fragment } from "react";
import SideBar from "../Components/SideBar/SideBar";

const Vip = () => {
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
                <li className="c1">V.I.P.</li>
              </ul>
              <h1 className="c3">V.I.P.</h1>
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
                      <img src="img/vip/vip2.jpg" alt="Service Thumb" />
                    </figure>
                    <div className="service-body">
                      <h2>V.I.P. Kiralama</h2>
                      <p>
                        Tüm özellikleri ile sizlerin konforuna ve ihtiyaçlarına
                        göre tasarlanmış olan geniş ve prestijli özel
                        araçlarımız ile dilediğiniz destinasyona eğitimli
                        personelimizle hizmet veriyoruz.
                      </p>
                      <div className="row flex-md-row flex-column align-items-center">
                        <div className="col-sm-6">
                          <img src="img/vip/vip1.jpg" alt="Service Image" />
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6">
                          <img src="img/vip/vip3.jpg" alt="Service Image" />
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.d-flex */}
                      <ul className="mt-5">
                        <li>
                          Standart lüks araçlar, ticari veya lüks minibüs
                          araçlar.
                        </li>
                        <li>
                          Deneyimli ve kalifiye şoförlerimiz yolculuğunuzu
                          güvenli ve konforlu hale getirecektir.
                        </li>
                        <li>
                          VIP hizmetini kullanırken büyük etkinliklere hizmet
                          vermek için benzer tip ve modelde araç da talep
                          edebilirsiniz.
                        </li>
                        <li>
                          Uzman personelimiz, seyahatiniz süresince resmi olarak
                          giyinir ve her koşula göre uygun görüneceklerdir.
                        </li>
                      </ul>
                      <p>
                        VIP hizmetimizi; tüm kurum ve kuruluşlara hizmet
                        verdiğimiz gibi bireysel olarak da talep edebilirsiniz.
                      </p>
                    </div>
                  </article>
                </div>
                {/* /.col-lg-8 */}
                <SideBar />
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.service */}
        </div>
      </Layout>
    </Fragment>
  );
};
export default Vip;
