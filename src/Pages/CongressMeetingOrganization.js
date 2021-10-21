import React from "react";
import { Fragment } from "react";
import Layout from "../Layouts/LayoutOne";
import SideBar from "../Components/SideBar/SideBar";

const CongressMeetingOrganization = () => {
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
                <li className="c1">KONGRE TOPLANTI ORGANİZASYON</li>
              </ul>
              <h1 className="c3">KONGRE, TOPLANTI VE ORGANİZASYON</h1>
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
                      <img src="img/kongre5.jpg" alt="Service Thumb" />
                    </figure>
                    <div className="service-body">
                      <h2>Kongre, Toplantı ve Organizasyon</h2>
                      <p>
                        Kongre, Toplantı ve Organizasyon ihtiyaçlarınızda en iyi
                        çözüm ortağınız olarak hizmet vermeye devam eden
                        TurTürk, katılımcıların transfer, gıda ve konaklama
                        ihtiyaçlarını konforlu hizmet anlayışıyla sunmaktadır.
                        <br />
                        Ayrıca TurTürk olarak gezi, eğitim, kültür-sanat,
                        eğlence ve tüm bu etkinliklere yönelik ulaşım, transfer
                        ihtiyaçlarınızı size özel programlarla
                        gerçekleştiriyoruz.
                        <br />
                      </p>
                      <div className="row flex-md-row flex-column align-items-center">
                        <div className="col-sm-6 mb-5">
                          <img
                            src="img/kongre/kongre1.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6 mb-5">
                          <img
                            src="img/yemekliseminer.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.d-flex */}
                    </div>

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
export default CongressMeetingOrganization;
