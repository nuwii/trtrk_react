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
            <p>© copyright 2019 by Layerdrops.com</p>
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
