import React from "react";

const SectionWhyUs = () => {
  return (
    <div className="whyus f1 mb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <section>
              <span>
                <i className="carevan-icon-handshake" />
              </span>
              <h2 className="fw-3 c3">Filo Kiralama</h2>
              <p className="fw-4">
                12-24-36 Ay uzun dönem araç kiralama şeçeneklerimiz ile
                kuruluşunuza en uygun araçlar için çözüm ortağınız{" "}
                <strong>TurTürk.</strong>
              </p>
            </section>
          </div>
          {/* /.col-xl-3 */}
          <div className="col-xl-9">
            <div className="feature-area">
              <h2 className="fw-3 text-white bg1">
                Size Özel Esnek Filo Kiralama Seçenekleri
              </h2>
              <figure>
                <img src="img/filo-3.jpg" alt="Feature" />
              </figure>
            </div>
            {/* /.feature-area */}
          </div>
          {/* /.col-xl-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};
export default SectionWhyUs;
