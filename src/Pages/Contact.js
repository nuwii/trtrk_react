import React, { Fragment } from "react";
import LayoutOne from "../Layouts/LayoutOne";

const Contact = () => {
  return (
    <Fragment>
      <LayoutOne>
        <div className="contact">
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
          <div className="container">
            <div className="row justify-content-end">
              <div className="contact-txt f1 col-12">
                <figure className="text-right">
                  <img src="img/contact-1-1.jpg" alt="Contac Banner" />
                  <figcaption className="text-left">
                    <div className="thm-header text-white">
                      <p className="pb-10">Get in touch with us</p>
                      <h1>
                        You’ve any question? feel free to contact with us.
                      </h1>
                    </div>
                    {/* /.thm-header */}
                    <ul>
                      <li>
                        <p>Call us today for imiditate support</p>
                        <h2>888 999 0000</h2>
                      </li>
                      <li>
                        <p>Send us email for any kind of inquiry</p>
                        <h2>needhelp@Carivon.com</h2>
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
                    <p className="c1 pb-10">Contact with us</p>
                    <h1 className="c3">Send us Message</h1>
                  </div>
                  {/* /.thm-header */}
                </div>
                {/* /.col-12 */}
                <div className="col-xl-8">
                  <form>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="float-left"
                    />
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="float-right"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="float-left"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="float-right"
                    />
                    <textarea
                      placeholder="Write your message"
                      defaultValue={""}
                    />
                    <div className="text-center">
                      <button type="submit">submit now</button>
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
          <div className="partners bg4">
            <div className="container">
              <div className="partner-carousel owl-carousel">
                <a href="#">
                  <img src="img/partners/01.png" alt="Partners" />
                </a>
                <a href="#">
                  <img src="img/partners/01.png" alt="Partners" />
                </a>
                <a href="#">
                  <img src="img/partners/01.png" alt="Partners" />
                </a>
                <a href="#">
                  <img src="img/partners/01.png" alt="Partners" />
                </a>
                <a href="#">
                  <img src="img/partners/01.png" alt="Partners" />
                </a>
              </div>
              {/* /.partner-carousel */}
            </div>
            {/* /.container */}
          </div>
          {/* /.partners */}
        </div>
        {/* /.blog blog-1 */}
        {/* /.page-wrapper */}
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
