import React, { Fragment } from "react";
import LayoutOne from "../Layouts/LayoutOne";

const AboutUs = () => {
  return (
    <Fragment>
      <LayoutOne>
        <div>
          <div className="op-header">
            <div className="thm-header text-center">
              <ul className="pb-10">
                <li>
                  <a href="/about" className="c1">
                    ANASAYFA
                  </a>
                </li>
                <li className="c1">HAKKIMIZDA</li>
              </ul>
              <h1 className="c3">HAKKIMIZDA</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.op-header */}
          <div className="about-page f1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <header>
                    <figure>
                      <img src="img/about-3-1.jpg" alt="About us" />
                      <figcaption>
                        <p className="f1 fw-3">
                          Caravan Repair Service Centre takes pride in all our
                          work, our qualified staff are highly trained in all
                          areas so your piece of mind is assured. We use the
                          latest equipment, genuine parts and quality materials
                          so having your caravan repaired to its original
                          condition is our promise to you.
                        </p>
                      </figcaption>
                    </figure>
                  </header>
                </div>
                {/* /.col-12 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <div className="faqs">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="thm-header text-center">
                      <p className="c1 pb-10">faqs</p>
                      <h1 className="c3">Questions Answers</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}
                  <div className="col-xl-6 text-xl-left text-center mb-xl-0 mb-3">
                    <img
                      src="img/faq-1-1.jpg"
                      alt="Frequently Asked Questions"
                    />
                  </div>
                  {/* /.col-lg-6 */}
                  <div className="col-xl-6">
                    <div className="accordion faq-blocks f1" id="FAQs">
                      <div className="card border-0">
                        <div className="card-header border-0" id="faqh-1">
                          <h2>
                            <button
                              type="button"
                              data-toggle="collapse"
                              data-target="#faq-1"
                              aria-expanded="false"
                              aria-controls="faq-1"
                            >
                              All auto &amp; caravan electrical repairs?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="faq-1"
                          className="collapse"
                          aria-labelledby="faqh-1"
                          data-parent="#FAQs"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of not the print
                              typesetting industry has been the industrys
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* /.card */}
                      <div className="card border-0">
                        <div className="card-header border-0" id="faqh-2">
                          <h2>
                            <button
                              type="button"
                              data-toggle="collapse"
                              data-target="#faq-2"
                              aria-expanded="true"
                              aria-controls="faq-2"
                            >
                              How to claim caravan warranty?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="faq-2"
                          className="collapse show"
                          aria-labelledby="faqh-2"
                          data-parent="#FAQs"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of not the print
                              typesetting industry has been the industrys
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* /.card */}
                      <div className="card border-0">
                        <div className="card-header border-0" id="faqh-3">
                          <h2>
                            <button
                              type="button"
                              data-toggle="collapse"
                              data-target="#faq-3"
                              aria-expanded="false"
                              aria-controls="faq-3"
                            >
                              How do i submit a caravan details?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="faq-3"
                          className="collapse"
                          aria-labelledby="faqh-3"
                          data-parent="#FAQs"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of not the print
                              typesetting industry has been the industrys
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* /.card */}
                      <div className="card border-0">
                        <div className="card-header border-0" id="faqh-4">
                          <h2>
                            <button
                              type="button"
                              data-toggle="collapse"
                              data-target="#faq-4"
                              aria-expanded="false"
                              aria-controls="faq-4"
                            >
                              If your caravan or motorhome needs repairs?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="faq-4"
                          className="collapse"
                          aria-labelledby="faqh-4"
                          data-parent="#FAQs"
                        >
                          <div className="card-body">
                            <p>
                              Lorem Ipsum is simply dummy text of not the print
                              typesetting industry has been the industrys
                              standard dummy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.col-lg-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.faqs */}
            <div className="testimony text-white text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="thm-header text-center text-white">
                      <p className="pb-10">our feedbacks</p>
                      <h1>What People Say</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}
                  <div className="col-xl-8 col-lg-8 col-md-10">
                    <div className="rating-area">
                      <div
                        className="testi-pager d-flex justify-content-center align-items-end mb-55"
                        id="testi-pager"
                      >
                        <a
                          href="#"
                          className="pager-item active"
                          data-slide-index={0}
                        >
                          <div className="testi-thumb">
                            <img src="img/testi-1-1.jpg" alt="rating" title />
                          </div>
                        </a>
                        <a href="#" className="pager-item" data-slide-index={1}>
                          <div className="testi-thumb">
                            <img src="img/testi-1-2.jpg" alt="rating" title />
                          </div>
                        </a>
                        <a href="#" className="pager-item" data-slide-index={2}>
                          <div className="testi-thumb">
                            <img src="img/testi-1-3.jpg" alt="rating" title />
                          </div>
                        </a>
                      </div>
                      {/*Slider*/}
                      <ul className="rating-slider f1">
                        <li className="slide-item">
                          <div className="slide-text">
                            <p>
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                            </p>
                            <h4 className="mt-30">Mike Hardson</h4>
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            {/* /.rating */}
                          </div>
                        </li>
                        <li className="slide-item">
                          <div className="slide-text">
                            <p>
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                            </p>
                            <h4 className="mt-30">Mike Hardson</h4>
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            {/* /.rating */}
                          </div>
                        </li>
                        <li className="slide-item">
                          <div className="slide-text">
                            <p>
                              This is due to their excellent service,
                              competitive pricing and customer support. It’s
                              throughly refresing to get such a personal touch.
                            </p>
                            <h4 className="mt-30">Mike Hardson</h4>
                            <div className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            {/* /.rating */}
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* /.rating-area */}
                  </div>
                  {/* /.col-xl-6 col-lg-8 col-md-10 offset-xl-3 offset-lg-2 offset-md-1 offset-sm-0 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.testimony */}
            <div className="sec-team text-center clearfix">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="thm-header text-center">
                      <p className="c1 pb-10">team members</p>
                      <h1 className="c3">Meet Our Experts</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}
                  <div className="col-md-4">
                    <div className="member-card bg-white">
                      <figure>
                        <div className="text-md-right text-center">
                          <img src="img/team-1-1.jpg" alt="Team Member" />
                        </div>
                        <figcaption>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-youtube-play" />
                              </a>
                            </li>
                          </ul>
                          <div className="member-info f1">
                            <h2 className="fw-6 c3">
                              <a href="#">Mike Hardson</a>
                            </h2>
                            <p className="fw-6">Technician</p>
                          </div>
                          {/* /.member-info */}
                        </figcaption>
                      </figure>
                    </div>
                    {/* /.member-card */}
                  </div>
                  {/* /.col-lg-4 */}
                  <div className="col-md-4">
                    <div className="member-card bg-white">
                      <figure>
                        <div className="text-md-right text-center">
                          <img src="img/team-1-2.jpg" alt="Team Member" />
                        </div>
                        <figcaption>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-youtube-play" />
                              </a>
                            </li>
                          </ul>
                          <div className="member-info f1">
                            <h2 className="fw-6 c3">
                              <a href="#">Mike Hardson</a>
                            </h2>
                            <p className="fw-6">Technician</p>
                          </div>
                          {/* /.member-info */}
                        </figcaption>
                      </figure>
                    </div>
                    {/* /.member-card */}
                  </div>
                  {/* /.col-lg-4 */}
                  <div className="col-md-4">
                    <div className="member-card bg-white">
                      <figure>
                        <div className="text-md-right text-center">
                          <img src="img/team-1-3.jpg" alt="Team Member" />
                        </div>
                        <figcaption>
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-youtube-play" />
                              </a>
                            </li>
                          </ul>
                          <div className="member-info f1">
                            <h2 className="fw-6 c3">
                              <a href="#">Mike Hardson</a>
                            </h2>
                            <p className="fw-6">Technician</p>
                          </div>
                          {/* /.member-info */}
                        </figcaption>
                      </figure>
                    </div>
                    {/* /.member-card */}
                  </div>
                  {/* /.col-lg-4 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.sec-team */}
            <div className="skills">
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 order-xl-1 order-2">
                    <div className="skill-area f1 mt-xl-0 mt-3">
                      <p className="fw-4">
                        A Regular service is very important for you and your
                        caravan. Have your caravan professionally and regularly
                        serviced by caravan repair service centre and take the
                        hassle away for your next journey.
                      </p>
                      <div className="skill-block">
                        <h3>Repairing</h3>
                        <div className="progress">
                          <span>93%</span>
                          <div
                            className="progress-bar"
                            data-wow-delay=".2s"
                            role="progressbar"
                            style={{ width: "93%" }}
                            aria-valuenow={93}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      {/* /.skill-block */}
                      <div className="skill-block">
                        <h3>Servicing</h3>
                        <div className="progress">
                          <span>62%</span>
                          <div
                            className="progress-bar"
                            data-wow-delay=".2s"
                            role="progressbar"
                            style={{ width: "62%" }}
                            aria-valuenow={62}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      {/* /.skill-block */}
                      <div className="skill-block">
                        <h3>Parts</h3>
                        <div className="progress">
                          <span>30%</span>
                          <div
                            className="progress-bar"
                            data-wow-delay=".2s"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      {/* /.skill-block */}
                    </div>
                    {/* /.skill-area */}
                  </div>
                  {/* /.col-lg-5 */}
                  <div className="col-xl-7 order-xl-2 order-1 text-xl-left text-center">
                    <figure>
                      <img src="img/progress-1-1.jpg" alt="Skills" />
                    </figure>
                  </div>
                  {/* /.col-lg-7 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.skills */}
            <div className="towit">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="thm-header text-center">
                      <p className="pb-10">caravan workshop</p>
                      <h1 className="c3">Tow it, We Can Fix it</h1>
                    </div>
                    {/* /.thm-header */}
                  </div>
                  {/* /.col-12 */}
                  <div className="pointers f1 col-12">
                    <figure>
                      <img src="img/pointers.jpg" alt="Pointers" />
                      <figcaption>
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point1"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point2"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point3"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point4"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point5"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point5"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                        <div className="dropdown pointer-block">
                          <button
                            className="pointSingle dropdown-toggle"
                            type="button"
                            id="point6"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          />
                          <div
                            className="dropdown-menu bg1 text-white"
                            aria-labelledby="point6"
                          >
                            <i className="carevan-icon-car-parts" />
                            <h2>Custom modification</h2>
                            <p className="fw-6">
                              Need something changed or is there something not
                              quite working the way you envisaged?
                            </p>
                          </div>
                        </div>
                        {/* /.pointer-block */}
                      </figcaption>
                    </figure>
                  </div>
                  {/* /.pointers */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.towit */}
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
          {/* /.about-page */}
          {/* /.page-wrapper */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};
export default AboutUs;
