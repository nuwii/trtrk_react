import React from "react";
import { Fragment } from "react";
import Layout from "../Layouts/LayoutOne";

const TourismTransportation = () => {
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
                <li className="c1">TURİZM TAŞIMACILIK</li>
              </ul>
              <h1 className="c3">TURİZM TAŞIMACILIK</h1>
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
                      <img
                        src="img/single-service-1-1.jpg"
                        alt="Service Thumb"
                      />
                    </figure>
                    <div className="service-body">
                      <h2>General Repairs</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the rinting and
                        typesetting industry has been the ndustry standard dummy
                        text ever sincer they llam id condimentum purus In non
                        ex at ligula fringilla bortis. Ut et mauris auctor,
                        aliquet nulla sed, aliquam mauris. Vestibulum sed
                        malesuada dolor. Integer fringilla odio a dolor aliquet,
                        eu euismod lectus porttitor. Proin et libero nec eros
                        eleifend commodo Phasellus sodales des volutpat diam, id
                        sagittis purus egestas dapibus. Donec bibendum est quis
                        mi commodo blandit.
                      </p>
                      <div className="row flex-md-row flex-column align-items-center">
                        <div className="col-sm-6">
                          <img
                            src="img/single-service-1-2.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                        <div className="col-sm-6">
                          <img
                            src="img/single-service-1-3.jpg"
                            alt="Service Image"
                          />
                        </div>
                        {/* /.col-sm-6 */}
                      </div>
                      {/* /.d-flex */}
                      <h3>General Repair &amp; Service Included:</h3>
                      <ul>
                        <li>Additional add on”s</li>
                        <li>Wind up Systems</li>
                        <li>Appliance – Servicing or replace</li>
                        <li>Tow ball weight</li>
                        <li>Brakes and Bearing</li>
                        <li>Safety Checks</li>
                        <li>Modification</li>
                        <li>Towing set-up</li>
                        <li>Replacement – Repair awnings</li>
                        <li>12v- &amp; 240V repairs</li>
                        <li>Roadworthy and Gas Cert</li>
                      </ul>
                      <p>
                        Check and inspect brakes and bearings tyres springs and
                        shackles for wear, outriggers, chassis rails,
                        cross-members and a-frames checked for damage/fatigue.
                        Jockey wheel and jack’s lubricated for ease of operation
                        external lights, wiring, and connections plumbing and
                        hoses inspected for integrity and protection hand brake
                        adjustment plumbing silicon integrity pre inspection
                        reports before you buy are important at caravan repair
                        service we can assist you in making the right choice.
                      </p>
                    </div>
                    {/* /.service-body */}
                    <div className="quote-form">
                      <h2>Get a Free Quote</h2>
                      <form className="clearfix">
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
                  </article>
                </div>
                {/* /.col-lg-8 */}
                <div className="col-lg-4">
                  <div className="service-sidebar">
                    <div className="service-widget">
                      <h2>All Services</h2>
                      <ul>
                        <li>
                          <a href="#">Insurance Repairs</a>
                        </li>
                        <li>
                          <a href="#">General Repairs</a>
                        </li>
                        <li>
                          <a href="#">Warranty Repairs</a>
                        </li>
                        <li>
                          <a href="#">Installation &amp; Modification</a>
                        </li>
                        <li>
                          <a href="#">Servicing &amp; Maintenance</a>
                        </li>
                        <li>
                          <a href="#">Bodywork Repairs</a>
                        </li>
                      </ul>
                    </div>
                    {/* /.service-widget */}
                    <div className="call-us text-center">
                      <p className="fw-7 c1 text-uppercase">call us today</p>
                      <h1 className="fw-3 c3">666 888 0000</h1>
                    </div>
                    {/* /.call-us */}
                  </div>
                  {/* /.service-sidebar */}
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
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
          {/* /.service */}
        </div>
      </Layout>
    </Fragment>
  );
};
export default TourismTransportation;
