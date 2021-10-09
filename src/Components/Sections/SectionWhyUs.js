import React from "react";

const SectionWhyUs = () => {
  return (
    <div className="whyus f1">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <section>
              <span>
                <i className="carevan-icon-handshake" />
              </span>
              <h2 className="fw-3 c3">Why Choose Carivon</h2>
              <p className="fw-4">
                We have staff that care about your second home as much as you
                do. We can help maintaining your caravan and motorhome to ensure
                longevity.
              </p>
            </section>
          </div>
          {/* /.col-xl-3 */}
          <div className="col-xl-9">
            <div className="feature-area">
              <h2 className="fw-3 text-white bg1">
                Competitive prices and guaranteed work on all repairs.
              </h2>
              <figure>
                <img src="img/feature-1-1.jpg" alt="Feature" />
              </figure>
            </div>
            {/* /.feature-area */}
          </div>
          {/* /.col-xl-3 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};
export default SectionWhyUs;
