import './MainComponant.css';
import React from 'react';

const MainComponant = () => {
  return (
    <>
    <section className="glarry ">
      {" "}
      {/*slider*/}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/lifeblood-of-australia-header-1580x490_0.jpg.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block ">
              <h1>Blood </h1>
              <p>
                When you give blood, you’re more than <br />
                just a donor. You’re the Lifeblood of
                <br /> Egypt
              </p>
              <button type="button" className="btn btn-outline-danger  btn-lg">
                Donate Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/happy-male-donor-primary-hero-1580x490.jpg.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>
                save a live.
                <br />
                Donate Blood
              </h1>
              <p>One Pint of Blood can save The Live</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/mm4.webp" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Become a Blood Donor</h1>
              <p>All types of blood are needed to help patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="noting">
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
      </div>
    </section>
    <section className="woman m-5 ">
      <div className="container ">
        <div className="row">
          <div className="col-lg-6">
            <div className="any-name1">
              <img className="img-fluid " src="images/woman.jpg" />
            </div>
          </div>
          <div className="col-lg-6">
            <h5>Celebrate the women who give.</h5>
            <h1 className="pt-3">
              Donate blood between
              <br /> 6 March–2 April for a Jenny Kee bandage.
            </h1>
            <p className="pt-4">
              In support of International Women’s Day on 8 March, we’ve teamed-up
              with Aussie fashion icon Jenny Kee to celebrate all the women who
              change lives through Lifeblood.
            </p>
            <button
              className="custom-btn 
                     btn-3 "
            >
              <span>Donets Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="photo_text">
      {" "}
      {/*two raw for text and images*/}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            {" "}
            {/*first photo*/}
            <div className="photo-text-background">
              <img
                className="img-fluid rounded "
                src="images/m1.webp"
                width="600px"
              />
              <div className="caption p-5">
                <h5>Can I donate blood?</h5>
                <p>
                  See if you are eligible to donate blood today,
                  <br />
                  or find answers to frequently aske questions.
                </p>
                <div className="center1">
                  <button
                    className=" custom-btn-
                     btn-3"
                  >
                    <span>Check your eligibility </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="photo-text-background">
              {" "}
              {/*secand photo*/}
              <img
                className="img-fluid rounded "
                src="images/m2.webp"
                width="600px"
              />
              <div className="caption p-5">
                <h5>Making your donation</h5>
                <p>
                  Discover how you can give blood, plasma or
                  <br />
                  platelets, and book your next donation.
                </p>
                <button
                  className="custom-btn 
                      btn-3"
                >
                  <span>Know how to donate </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="photo-text-background">
              {" "}
              {/*-threed  photo*/}
              <img
                className="img-fluid rounded "
                src="images/m3.webp"
                width="600px"
              />
              <div className="caption p-5 ">
                <h5>Find a blood donor centre</h5>
                <p>
                  There are donor centres all across the <br />
                  country. Find one that's closest to you.
                </p>
                <button
                  className="custom-btn-
                      btn-3"
                >
                  <span>Find a donor centre</span>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* the first row end */}
        <div className="row">
          {" "}
          {/*second row  start*/}
          <div className="col-lg-4">
            <div className="photo-text-background">
              {" "}
              {/*forth images */}
              <img
                className="img-fluid rounded "
                src="images/m4.webp"
                width="600px"
              />
              <div className="caption p-5">
                <h5>Learn about blood</h5>
                <p>
                  Know the fine details about blood, like <br />
                  what’s in it, who needs it, and where it goes <br />
                  after you give it.
                </p>
                <button
                  className="custom-btn 
                     btn-3"
                >
                  <span>See the details </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            {/*-fifth  images */}
            <div className="photo-text-background">
              <img
                className="img-fluid rounded "
                src="images/m5.webp"
                width="600px"
              />
              <div className="caption p-5">
                <h5>Blood testing and safety</h5>
                <p>
                  Australia has one of the safest blood <br />
                  supplies in the world. Find out what we test, <br />
                  and how.
                </p>
                <button
                  className="custom-btn 
                      btn-3"
                >
                  <span>Learn about safety </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {" "}
            {/*sixth images */}
            <div className="photo-text-background">
              <img
                className="img-fluid rounded "
                src="images/m6.webp"
                width="600px"
              />
              <div className="caption p-5">
                <h5>Donate as a group</h5>
                <p>
                  Be part of our group donation program, <br />
                  Lifeblood Teams. It’s about friendship,
                  <br />
                  community and making a bigger difference together.
                </p>
                <button
                  className="custom-btn-
                      btn-3"
                >
                  <span>Join Lifeblood Teams </span>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/*    the second row end */}
      </div>
    </section>
    <section className="quswstion">
      <div className="container-fluid">
        <div className="row ">
          <div className="tex col-lg-12">
            <h2>Your most asked questions</h2>
          </div>
          <div className=" row">
            <div className="col-lg-6">
              <a href="">
                If I've been diagnosed with COVID-19, when can I donate blood?
              </a>
              <div className="ques-icon">
                <i
                  className="fa-regular fa-heart fa-beat fa-lg"
                  style={{ color: "#e7081f" }}
                />
              </div>
              <hr />
              <a href="">
                I lived in the UK for six months between 1980-96. When will I be
                able to donate?
              </a>
              <div className="ques-icon">
                <i
                  className="fa-regular fa-heart fa-beat fa-lg"
                  style={{ color: "#e7081f" }}
                />
              </div>
              <hr />
              <a href="">
                I have low iron. Can I donate blood?
                <div className="ques-icon">
                  <i
                    className="fa-regular fa-heart fa-beat fa-lg"
                    style={{ color: "#e7081f" }}
                  />
                </div>
                <hr />
              </a>
            </div>
            <a href=""></a>
            <div className="col-lg-6">
              <a href=""></a>
              <a href="">I have a tattoo. Can I donate blood?</a>
              <div className="ques-icon">
                <i
                  className="fa-regular fa-heart fa-beat fa-lg"
                  style={{ color: "#e7081f" }}
                />
              </div>
              <hr />
              <a href="">
                What medications will prevent me from donating?
                <div className="ques-icon">
                  <i
                    className="fa-regular fa-heart fa-beat fa-lg"
                    style={{ color: "#e7081f" }}
                  />
                </div>
                <hr />
              </a>
              <a href="">All frequently asked questions</a>
              <div className="ques-icon">
                <i
                  className="fa-regular fa-heart fa-beat fa-lg"
                  style={{ color: "#e7081f" }}
                />
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="end text-center p-4 m-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>How are we doing?</h1>
            <p>
              Before you go, how would you rate your experience on the website
              today?
            </p>
            <select className="form-select " aria-label="Default select example">
              <option selected="">select </option>
              <option value={1}>Brilliant,Thanks</option>
              <option value={2}>Good</option>
              <option value={3}>it`S oK</option>
              <option value={3}>Not Good</option>
              <option value={3}>Terrible Sorry</option>
            </select>
            <div className="form-floating hidden">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: 100 }}
                defaultValue={""}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </>
  
  );
}

export default MainComponant;
