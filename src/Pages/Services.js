import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import LayoutOne from "../Layouts/LayoutOne";

const Services = () => {
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
                <li className="c1">HİZMETLERİMİZ</li>
              </ul>
              <h1 className="c3">HİZMETLERİMİZ</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.op-header */}
          <div className="blog blog-1">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="blog-card">
                    <figure>
                      <Link to="turizm-tasimacilik">
                        <img
                          src="img/hizmetlerimiz/turizm_tasimacilik.jpg"
                          alt="Blog Thumb"
                        />
                      </Link>
                      <figcaption>
                        <span>TUR</span>
                        <span>TÜRK</span>
                      </figcaption>
                    </figure>
                    <div className="blog-card-body">
                      <h2>
                        <Link
                          style={{ textDecoration: "unset" }}
                          to="/turizm-tasimacilik"
                        >
                          Turizm Taşımacılık
                        </Link>
                      </h2>
                      {/* <p>
                        Need something changed or is there something not quite
                        working the way you envisaged? Is your van a little old
                        and tired and need refreshing?
                      </p> */}
                      <Link to="/turizm-tasimacilik">Daha Fazla</Link>
                    </div>
                    {/* /.blog-card-body */}
                  </div>
                  {/* /.blog-card */}
                </div>
                {/* /.col-md-6 */}
                <div className="col-md-6">
                  <div className="blog-card">
                    <figure>
                      <Link to="/kongre-toplanti-organizasyon">
                        <img
                          src="img/hizmetlerimiz/seminer_organizasyon.jpg"
                          alt="Blog Thumb"
                        />
                      </Link>
                      <figcaption>
                        <span>TUR</span>
                        <span>TÜRK</span>
                      </figcaption>
                    </figure>
                    <div className="blog-card-body">
                      <h2>
                        <Link
                          style={{ textDecoration: "unset" }}
                          to="/kongre-toplanti-organizasyon"
                        >
                          Kongre, Toplantı ve Organizasyon
                        </Link>
                      </h2>
                      {/* <p>
                        Need something changed or is there something not quite
                        working the way you envisaged? Is your van a little old
                        and tired and need refreshing?
                      </p> */}
                      <Link to="/kongre-toplanti-organizasyon">Daha Fazla</Link>
                    </div>
                    {/* /.blog-card-body */}
                  </div>
                  {/* /.blog-card */}
                </div>
                {/* /.col-md-6 */}
                <div className="col-md-6">
                  <div className="blog-card">
                    <figure>
                      <Link to="/filo-kiralama">
                        <img
                          src="img/hizmetlerimiz/filo_kiralama.jpg"
                          alt="Blog Thumb"
                        />
                      </Link>
                      <figcaption>
                        <span>TUR</span>
                        <span>TÜRK</span>
                      </figcaption>
                    </figure>
                    <div className="blog-card-body">
                      <h2>
                        <Link
                          style={{ textDecoration: "unset" }}
                          to="/filo-kiralama"
                        >
                          Filo Kiralama
                        </Link>
                      </h2>
                      {/* <p>
                        Need something changed or is there something not quite
                        working the way you envisaged? Is your van a little old
                        and tired and need refreshing?
                      </p> */}
                      <Link to="/filo-kiralama">Daha Fazla</Link>
                    </div>
                    {/* /.blog-card-body */}
                  </div>
                  {/* /.blog-card */}
                </div>
                {/* /.col-md-6 */}
                <div className="col-md-6">
                  <div className="blog-card">
                    <figure>
                      <Link to="/vip">
                        <img src="img/hizmetlerimiz/vip.jpg" alt="Blog Thumb" />
                      </Link>
                      <figcaption>
                        <span>TUR</span>
                        <span>TÜRK</span>
                      </figcaption>
                    </figure>
                    <div className="blog-card-body">
                      <h2>
                        <Link style={{ textDecoration: "unset" }} to="/vip">
                          V.I.P. Hizmetleri
                        </Link>
                      </h2>
                      {/* <p>
                        Need something changed or is there something not quite
                        working the way you envisaged? Is your van a little old
                        and tired and need refreshing?
                      </p> */}
                      <Link to="/vip">Daha Fazla</Link>
                    </div>
                    {/* /.blog-card-body */}
                  </div>
                  {/* /.blog-card */}
                </div>
                {/* /.col-md-6 */}

                {/* /.col-md-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}

            {/* /.partners */}
          </div>
          {/* /.blog blog-1 */}
          {/* /.page-wrapper */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Services;
