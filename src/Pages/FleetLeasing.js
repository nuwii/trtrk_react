import React from "react";
import Layout from "../Layouts/LayoutOne";
import { Fragment } from "react";
import SideBar from "../Components/SideBar/SideBar";

const FleetLeasing = () => {
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
                <li className="c1">FİLO KİRALAMA</li>
              </ul>
              <h1 className="c3">FİLO KİRALAMA</h1>
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
                      <img src="img/filo/filo1.jpg" alt="Service Thumb" />
                    </figure>
                    <div className="service-body">
                      <h2>Filo Kiralama</h2>
                      <p>
                        TurTürk operasyonel kiralama hizmeti, ülkemizde satışı
                        gerçekleşen tüm marka ve model araçları içerecek şekilde
                        yapılandırılmış ve kurumların ihtiyaçlarına yönelik
                        şekilde sunulmuştur. Filo araç kiralamada araç sayısında
                        ve türünde limitlendirme bulunmamaktadır. Uzmanlarımız
                        tarafından kurumların ihtiyaçlarına yönelik
                        şekillendirilen araçlar fabrika çıkışı 0 km ve tam
                        donanımlı olarak sizlere sunulmaktadır.
                      </p>
                      <div className="row flex-md-row flex-column align-items-center">
                        <div className="col-sm-6">
                          <img src="img/filo/filo2.jpg" alt="Service Image" />
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6">
                          <img src="img/filo/filo3.jpg" alt="Service Image" />
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.d-flex */}
                      <ul className="my-5">
                        <li>
                          Araçları fabrika çıkışı 0 km ve eksiksiz teslim
                          ediyoruz.
                        </li>
                        <li>
                          Araç teslimatı için herhangi bir ek ücret alınmaz.
                        </li>
                        <li>
                          Araçların kiralama süresi içindeki tüm teknik bakım ve
                          periyodik bakımlar filo kiralamada düzenli olarak
                          yetkili servislerde yaptırılır ve bu işlemler için
                          ödenecek ücretler tarafımızdan karşılanır.
                        </li>
                        <li>
                          Sigorta kapsamı, kaza yada hırsızlık gibi olası
                          durumlarda TurTürk tarafından kasko poliçesi ve
                          zorunlu trafik sigortası dahilindeki tüm teminatlar
                          karşılanır.
                        </li>
                        <li>
                          Aracın servislerde 48 saatten fazla kalması gereken
                          durumlarda, mağduriyet yaşanmaması amacı ile 48 saat
                          içerisinde yerine muadil araç temin edilir ve ek ücret
                          talep edilmez.
                        </li>
                        <li>Kasko ve trafik sigorta giderleri karşılanır.</li>
                        <li>
                          Aracın satın alınması da dahil olmak üzere tüm
                          vergileri TurTürk tarafından karşılanır.
                        </li>
                        <li>
                          Kiralama süresi minimum 12 ay maksimum 36 aydır.
                        </li>
                        <li>
                          Periyodik bakımlar filo kiralamada aracın bakım
                          kılavuzuna göre tüm düzenli periyodik bakımları
                          yetkili servislerde olmak üzere, bu işlem için
                          ödenecek ücretler TurTürk tarafından karşılanır.
                        </li>
                      </ul>
                    </div>
                    {/* /.service-body */}

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
          </div>
          {/* /.service */}
        </div>
      </Layout>
    </Fragment>
  );
};
export default FleetLeasing;
