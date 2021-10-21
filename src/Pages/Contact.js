import React, { Fragment, useEffect, useState, useRef } from "react";
import LayoutOne from "../Layouts/LayoutOne";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iaxmnw2",
        "template_olskmdg",
        form.current,
        "user_YJkusy5AJ3KRaX7ZSxU0O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <LayoutOne>
        <div className="contact">
          {/* /.googleMap */}
          <div className="googleMap">
            <div
              className="google-map-dark"
              id="map"
              data-map-lat="39.92565"
              data-map-lng="32.85845"
              data-map-title="Advotis"
              data-icon-path="img/map-marker.png"
              data-map-zoom={17}
              data-markers='{
                             "marker-1": [39.92565, 32.85845, "<h4>Turtürk</h4><p>Çankaya / ANKARA</p>"]
                             }'
            ></div>
          </div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="contact-txt f1 col-12">
                <figure className="text-right">
                  <img src="img/iletisim.jpg" alt="Contac Banner" />
                  <figcaption className="text-left">
                    <div className="thm-header text-white">
                      <p className="pb-10">BİZE ULAŞIN</p>
                      <h1>Bizimle iletişime geçin.</h1>
                    </div>
                    {/* /.thm-header */}
                    <ul>
                      <li>
                        {/* <p>Destek için bizi bu numaradan arabilirsiniz</p> */}
                        <h2>
                          <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="tel:+905322863877"
                          >
                            +90(532)286-38-77
                          </a>
                        </h2>
                      </li>
                      <li>
                        {/* <p>
                          Her türlü görüş, düşünce ya da sormak istedikleriniz
                          için bu mail adresinden bizlere ulaşabilirsiniz.
                        </p> */}
                        <h2>
                          <a
                            style={{ color: "white", textDecoration: "none" }}
                            href="mailto:info@turturk.com.tr"
                          >
                            info@turturk.com.tr
                          </a>
                        </h2>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
              </div>
              {/* /.contact-txt */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          <div className="contact-form f1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="thm-header text-center">
                    <p className="c1 pb-10">BİZE ULAŞIN</p>
                    <h1 className="c3">Bize Mesaj Gönderin</h1>
                  </div>
                  {/* /.thm-header */}
                </div>
                {/* /.col-12 */}
                <div className="col-xl-8">
                  <form ref={form} onSubmit={sendEmail}>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      name="ad_soyad"
                      className="float-left"
                    />
                    <input
                      type="email"
                      placeholder="Email Adresiniz"
                      name="email"
                      className="float-right"
                    />
                    <input
                      type="number"
                      placeholder="Telefon Numaranız"
                      name="telefon"
                      className="float-left"
                    />
                    <input
                      type="text"
                      placeholder="Konu"
                      name="konu"
                      className="float-right"
                    />
                    <textarea
                      placeholder="Mesajınızı yazınız."
                      defaultValue={""}
                      name="mesaj"
                    />
                    <div className="text-center">
                      <button value="Send" type="submit">
                        GÖNDER
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.col-xl-8 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.contact-form */}

          {/* /.partners */}
        </div>
        {/* /.blog blog-1 */}
        {/* /.page-wrapper */}
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
