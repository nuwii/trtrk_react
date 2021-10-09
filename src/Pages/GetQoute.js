import React, { Fragment } from "react";
import LayoutOne from "../Layouts/LayoutOne";

export const GetQoute = () => {
  return (
    <Fragment>
      <LayoutOne>
        <div>
          <div className="op-header">
            <div className="thm-header text-center">
              <ul className="pb-10">
                <li>
                  <a href="/" className="c1">
                    ANASAYFA
                  </a>
                </li>
                <li className="c1">TEKLİF AL</li>
              </ul>
              <h1 className="c3">TEKLİF AL</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.op-header */}
          <div className="quote-area">
            <div className="container-fluid">
              <div className="row no-gutters">
                <div className="col-xl-4 bg1 d-flex">
                  <div className="content-box my-auto">
                    <div className="text-white text-center">
                      <h2 className="f1">
                        Sizlere en uygun araçlarımız için teklif almak
                        istiyorsanız yanda bulunan formu doldurmanız yeterli!
                        Satış temsilcilerimiz en kısa sürede size ulaşacaktır.
                      </h2>
                      <div className="call-us text-center bg-white">
                        <p className="fw-7 c1 text-uppercase">BİZE ULAŞIN</p>
                        <h1 className="fw-3 c3">
                          <a
                            style={{ color: "black", textDecoration: "none" }}
                            href="tel:05555555555"
                          >
                            0(555)555-55-55
                          </a>
                        </h1>
                      </div>
                      {/* /.call-us */}
                    </div>
                  </div>
                  {/* /.content-box */}
                </div>
                {/* /.col-lg-4 */}
                <div className="col-xl-8 quote-form-wrapper">
                  <div className="row justify-content-xl-end justify-content-center">
                    <div className="col-xl-11 pl-30 pr-0">
                      <div className="quote-form">
                        <div className="thm-header text-center">
                          <p className="c1 pb-10">TALEP FORMU</p>
                          <h1 className="c3">
                            Formu Doldurun <br /> Size Ulaşalım
                          </h1>
                        </div>
                        {/* /.thm-header */}
                        <form className="clearfix text-center">
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Ad Soyad" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Eposta Adresiniz" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Telefon Numaranız"
                            />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Firma Ünvanı" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Firmanızın Bulunduğu Şehir"
                            />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="Bulunduğunuz Şehir"
                            />
                          </div>
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Vergi Dairesi" />
                          </div>
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Vergi Numarası" />
                          </div>
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Araç Sayısı" />
                          </div>
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Yıllık Kilometre" />
                          </div>
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Kiralama Süresi" />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="İlgilendiğiniz Araç"
                            />
                          </div>
                          {/* /.quote-block */}
                          {/* <div className="quote-block float-right">
                            <input
                              type="radio"
                              className="d-none"
                              id="repair"
                              name="caravan"
                            />
                            <label htmlFor="repair">Şahıs Şirketi</label>
                            <input
                              type="radio"
                              className="d-none"
                              id="service"
                              name="caravan"
                            />
                            <label htmlFor="service">Tüzel Şirket</label>
                          </div> */}
                          {/* /.quote-block */}
                          <div className="clr" />
                          {/* /.clr */}
                          <textarea
                            placeholder="Ekstra Talepleriniz..."
                            defaultValue={""}
                          />
                          <button type="submit">Gönder</button>
                        </form>
                      </div>
                      {/* /.quote-form */}
                    </div>
                    {/* /.col-11 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.col-lg-8 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          <div className="googleMap">
            <div
              className="google-map"
              id="map"
              data-map-lat="40.712028"
              data-map-lng="-74.095667"
              data-map-title="Advotis"
              data-icon-path="img/map-marker.png"
              data-map-zoom={12}
              data-markers='{
                         "marker-1": [40.712028, -74.095667, "<h4>Carivon</h4><p>1430 Jersey City, USA</p>"]
                         }'
            ></div>
          </div>
          {/* /.googleMap */}
          {/* /.page-wrapper */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};
export default GetQoute;
