import React from "react";

const SectionIntro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-xl-5 text-xl-left text-center">
            <div className="thm-header">
              <p className="c1 pb-10">We repair all caravans &amp; Motorhome</p>
              <h1 className="c3">Book Professional Repairmen in Few Seconds</h1>
            </div>
            {/* /.thm-header */}
          </div>
          {/* /.col-12 */}
          <div className="col-xl-6">
            <figure className="text-xl-left text-center my-xl-0 my-3">
              <img src="img/about-1-1.jpg" alt="Intro" />
            </figure>
          </div>
          {/* /.col-xl-6 */}
          <div className="col-xl-6">
            <section className="pt-xl-0 pt-3">
              <p>
                Caravan Repair Service Centre takes pride in all our work, our
                qualified staff are highly trained in all areas so your piece of
                mind is assured. We use the latest equipment, genuine parts and
                quality materials so having your caravan repaired to its
                original condition is our promise to you.
              </p>
              <p>
                A Regular service is very important for you and your caravan.
                Have your caravan professionally and regularly serviced by
                Caravan Repair Service Centre and take the hassle away for your
                next journey.
              </p>
            </section>
            <div className="facts text-white text-xl-left text-center">
              <div className="d-flex justify-content-between flex-sm-row flex-column">
                <div className="single-fact">
                  <i className="carevan-icon-caravan" />
                  <h1 className="counter">6800</h1>
                  <p className="f1 fw-6">Caravan Repairs</p>
                </div>
                {/* /.single-fact */}
                <div className="single-fact">
                  <i className="carevan-icon-disc-brake" />
                  <h1 className="counter">4607</h1>
                  <p className="f1 fw-6">Used Auto Parts</p>
                </div>
                {/* /.single-fact */}
                <div className="single-fact">
                  <i className="carevan-icon-heart" />
                  <h1 className="counter">8940</h1>
                  <p className="f1 fw-6">Satisfied Clients</p>
                </div>
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
