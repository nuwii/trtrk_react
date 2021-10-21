import React, { Fragment, useRef } from "react";
import LayoutOne from "../Layouts/LayoutOne";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetQoute = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iaxmnw2",
        "template_luscnza",
        form.current,
        "user_YJkusy5AJ3KRaX7ZSxU0O"
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("Teklif formunuz gönderildi.");
        } else {
          toast.error("Teklif formunuz gönderilemedi.");
        }
      })
      .catch((err) => {
        toast.error("Teklif formunuz gönderilemedi.");
      });
  };

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
                            href="tel:905322863877"
                          >
                            (532)286-38-77
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

                        <form
                          ref={form}
                          onSubmit={sendEmail}
                          className="clearfix text-center"
                        >
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Ad Soyad"
                              name="ad_soyad"
                            />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input
                              type="email"
                              placeholder="Eposta Adresiniz"
                              name="e_posta"
                            />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input
                              type="number"
                              placeholder="Telefon Numaranız"
                              name="telefon_no"
                            />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="Firma Ünvanı"
                              name="firma_unvan"
                            />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Firmanızın Bulunduğu Şehir"
                              name="firma_sehir"
                            />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="Bulunduğunuz Şehir"
                              name="kisi_sehir"
                            />
                          </div>
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Vergi Dairesi"
                              name="vergi_dairesi"
                            />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="number"
                              placeholder="Vergi Numarası"
                              name="vergi_numarasi"
                            />
                          </div>
                          <div className="quote-block float-left">
                            <input
                              type="number"
                              placeholder="Araç Sayısı"
                              name="arac_sayisi"
                            />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="Yıllık Kilometre"
                              name="yillik_kilometre"
                            />
                          </div>
                          <div className="quote-block float-left">
                            <input
                              type="text"
                              placeholder="Kiralama Süresi"
                              name="kiralama_suresi"
                            />
                          </div>
                          <div className="quote-block float-right">
                            <input
                              type="text"
                              placeholder="İlgilendiğiniz Araç"
                              name="ilgilenilen_arac"
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
                            name="message"
                            placeholder="Ekstra Talepleriniz..."
                            defaultValue={""}
                          />
                          <button type="submit" value="Send">
                            Gönder
                          </button>
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
          <div style={{ height: "4rem", backgroundColor: "#f3f5f9" }}></div>

          {/* /.googleMap */}
          {/* /.page-wrapper */}
        </div>
        <ToastContainer position="bottom-left" />
      </LayoutOne>
    </Fragment>
  );
};
export default GetQoute;
