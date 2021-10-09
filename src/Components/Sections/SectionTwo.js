import React, { Fragment } from "react";

const SectionTwo = () => {
  return (
    <Fragment>
      <div className="sec-service">
        <div className="container">
          <div className="row">
            <div className="col-12">{/* /.thm-header */}</div>
            {/* /.col-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      ;{/* /.sec-service */}
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
                    href="www.osireklamajansi.com"
                    className="pager-item active"
                    data-slide-index={0}
                  >
                    <div className="testi-thumb">
                      <img src="img/testi-1-1.jpg" alt="rating" title />
                    </div>
                  </a>
                  <a
                    href="www.osireklamajansi.com"
                    className="pager-item"
                    data-slide-index={1}
                  >
                    <div className="testi-thumb">
                      <img src="img/testi-1-2.jpg" alt="rating" title />
                    </div>
                  </a>
                  <a
                    href="www.osireklamajansi.com"
                    className="pager-item"
                    data-slide-index={2}
                  >
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
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch.
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
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch.
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
                        This is due to their excellent service, competitive
                        pricing and customer support. It’s throughly refresing
                        to get such a personal touch.
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
    </Fragment>
  );
};
export default SectionTwo;
