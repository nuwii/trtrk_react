import React from "react";

const FooterBottom = () => {
  return (
    <div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-sm-between justify-content-center text-sm-left text-center flex-sm-row flex-column">
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
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
            </ul>
            <p>
              <a
                target="_blank"
                style={{ color: "#b9c2ca", textDecoration: "none" }}
                href="https://www.osireklamajansi.com"
              >
                © copyright 2021 by OsiCrew
              </a>
            </p>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.footer-bottom */}
    </div>
  );
};
export default FooterBottom;
