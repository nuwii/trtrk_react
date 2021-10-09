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
                  <a href="#" className="c1">
                    Home
                  </a>
                </li>
                <li className="c1">Get Qoute</li>
              </ul>
              <h1 className="c3">Request a Qoutation</h1>
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
                        If you’re looking for caravan servicing or motorhome
                        repairs, you can rely on a trained team to take <br />{" "}
                        care of it.
                      </h2>
                      <div className="call-us text-center bg-white">
                        <p className="fw-7 c1 text-uppercase">call us today</p>
                        <h1 className="fw-3 c3">666 888 0000</h1>
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
                          <p className="c1 pb-10">book online</p>
                          <h1 className="c3">Get a Free Quote</h1>
                        </div>
                        {/* /.thm-header */}
                        <form className="clearfix text-center">
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Your Name" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Email Address" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Phone Number" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input type="text" placeholder="Select Year" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-left">
                            <input type="text" placeholder="Select Model" />
                          </div>
                          {/* /.quote-block */}
                          <div className="quote-block float-right">
                            <input
                              type="radio"
                              className="d-none"
                              id="repair"
                              name="caravan"
                            />
                            <label htmlFor="repair">Repair</label>
                            <input
                              type="radio"
                              className="d-none"
                              id="service"
                              name="caravan"
                            />
                            <label htmlFor="service">Service</label>
                          </div>
                          {/* /.quote-block */}
                          <div className="clr" />
                          {/* /.clr */}
                          <textarea
                            placeholder="Tell us about the service and/or repair you require?"
                            defaultValue={""}
                          />
                          <button type="submit">
                            Book Service Appointment now
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
