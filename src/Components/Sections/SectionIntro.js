import React from "react";

const SectionIntro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-xl-5 text-xl-left text-center">
            <div className="thm-header">
              <p className="c1 pb-10">Kurumsal Çözümlerde Öncü Kuruluş</p>

              <h1 className="c3">2007 Yılından Bugüne Aynı Hizmet Anlayışı</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.col-12 */}
          <div className="col-xl-6">
            <figure className="text-xl-left text-center my-xl-0 my-3">
              <img src="img/intro-1.jpg" alt="Intro" />
            </figure>
          </div>
          {/* /.col-xl-6 */}
          <div className="col-xl-6">
            <section className="pt-xl-0 pt-3">
              <p>
                "Kalite, Konfor ve Güvenlik" ilkelerimizden ödün vermeden birçok
                Kurum ve Kuruluş'a hizmet vermeye devam etmekteyiz. Yıllar
                içinde atmış olduğumuz kararlı adımlar sayesinde her geçen gün
                hizmet ağını ve kalitesini geliştirmeye devam eden TurTürk,
                Türkiye'nin her noktasına aynı kalite ve özen ile hizmet
                vermektedir.
              </p>
              <p>"Önceliğimiz Güvenliğiniz"</p>
              <p>
                Tüm araçlarımız ve personellerimiz üzerinde sürekli
                gerçekleştirdiğimiz denetimler ve kontroller sayesinde seyahat
                ve organizasyonlarınızın güven içinde geçmesi için
                çalışmalarımızı sürdürüyoruz. Sağlıkla ve memnuniyetle
                tamamlanan her seyahat bizlerin herzaman önceliğidir.
              </p>
              <p>
                TurTürk olarak başarımızın temelinde "Hizmet Odaklı" anlayışımız
                ve gelişime verdiğimiz önem yatmaktadır.
              </p>
            </section>
            <div className="facts text-white text-xl-left text-center">
              <div className="d-flex justify-content-between flex-sm-row flex-column">
                <div className="single-fact">
                  <h1 className="counter">"Kalite & Konfor & Güvenlik"</h1>
                </div>
                {/* /.single-fact */}

                {/* /.single-fact */}
              </div>
              {/* /.d-flex */}
            </div>
            {/* /.facts */}
          </div>
          {/* /.col-xl-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default SectionIntro;
