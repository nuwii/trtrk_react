import React, { Fragment } from "react";
import LayoutOne from "../Layouts/LayoutOne";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <LayoutOne>
        <div className="error-area pt-40 pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 text-center">
                <div className="error">
                  <h1
                    style={{
                      color: "#DCE2E3",
                      fontSize: "15em",
                      marginTop: "0.5em",
                    }}
                  >
                    404
                  </h1>
                  <h2
                    style={{
                      color: "#ca1f26",
                      fontSize: "4em",
                      marginBottom: "3em",
                    }}
                  >
                    OPPS! <br />
                    Sayfa Bulunamadı...
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default NotFound;
