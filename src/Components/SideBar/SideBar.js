import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="col-lg-4">
      <div className="service-sidebar">
        <div className="service-widget">
          <h2>Tüm Hizmetlerimiz</h2>
          <ul>
            <li>
              <Link to="/turizm-tasimacilik">Turizm Taşımacılık</Link>
            </li>
            <li>
              <Link to="/kongre-toplanti-organizasyon">
                Kongre - Toplantı - Organizasyon
              </Link>
            </li>
            <li>
              <Link to="/filo-kiralama">Filo Kiralama</Link>
            </li>
            <li>
              <Link to="/vip">V.I.P.</Link>
            </li>
          </ul>
        </div>
        {/* /.service-widget */}
        <div className="call-us text-center">
          <p className="fw-7 c1 text-uppercase">BİZİ ARAYIN</p>
          <h1 className="fw-3 c3">
            <a
              style={{
                fontSize: "2rem",
                color: "black",
                textDecoration: "none",
              }}
              href="tel:+905322863877"
            >
              (532)286-38-77
            </a>
          </h1>
        </div>
        {/* /.call-us */}
      </div>
      {/* /.service-sidebar */}
    </div>
  );
};

export default SideBar;
