import React, { Fragment } from "react";

const SectionNews = () => {
  return (
    <Fragment>
      <div className="sec-blog text-center f1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="thm-header text-center">
                <p className="c1 pb-10">articles and posts</p>
                <h1 className="c3">Latest News</h1>
              </div>
              {/* /.thm-header */}
            </div>
            {/* /.col-12 */}
            <div className="col-md-6">
              <div className="blog-card">
                <figure>
                  <a href="single-news.html">
                    <img src="img/blog-1-1.jpg" alt="Blog Thumb" />
                  </a>
                  <figcaption>
                    <span>18</span>
                    <span>SEP</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <div className="blog-card-body">
                  <h2>
                    <a href="single-news.html">
                      Custom modification &amp; fabrications
                    </a>
                  </h2>
                  <p>
                    Need something changed or is there something not quite
                    working the way you envisaged? Is your van a little old and
                    tired and need refreshing?{" "}
                  </p>
                  <a href="single-news.html">Read More</a>
                </div>
                {/* /.blog-card-body */}
              </div>
              {/* /.blog-card */}
            </div>
            {/* /.col-md-6 */}
            <div className="col-md-6">
              <div className="blog-card">
                <figure>
                  <a href="single-news.html">
                    <img src="img/blog-1-2.jpg" alt="Blog Thumb" />
                  </a>
                  <figcaption>
                    <span>12</span>
                    <span>SEP</span>
                    <span>2019</span>
                  </figcaption>
                </figure>
                <div className="blog-card-body">
                  <h2>
                    <a href="single-news.html">
                      A dedicated caravan and motorhome service
                    </a>
                  </h2>
                  <p>
                    Need something changed or is there something not quite
                    working the way you envisaged? Is your van a little old and
                    tired and need refreshing?{" "}
                  </p>
                  <a href="single-news.html">Read More</a>
                </div>
                {/* /.blog-card-body */}
              </div>
              {/* /.blog-card */}
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    </Fragment>
  );
};
export default SectionNews;
