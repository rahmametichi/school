import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="HOME__PAGE">
      <div className="navbar FULL-HIEGTH">
        <nav className="nav__mobile"></nav>
        <div className="navbar__container">
          <div className="navbar__inner">
            <a className="navbar__logo">
              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  lettreSpacing: 1.2,
                }}
              >
                SMART SCHOOL
              </span>
            </a>
            <nav className="navbar__menu">
              <ul className="home__navbar__list">
                <li className="navbar__list__items">
                  <NavLink
                    to="/login"
                    className="navbar__link"
                    style={{
                      color: "#fff",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 18,
                      }}
                      className="links-hover"
                    >
                      Sign In
                    </span>
                  </NavLink>
                </li>
                {/* <li className="navbar__list__items">
                                    <NavLink
                                        to="/register"
                                        className="navbar__link"
                                    >
                                        <span
                                            style={{
                                                fontSize: 18,
                                            }}
                                            className="links-hover"
                                        >
                                            Sign Up
                                        </span>
                                    </NavLink>
                                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero__overlay hero__overlay--gradient"></div>
        <div className="hero__mask"></div>
        <div className="hero__inner">
          <div className="hero__header__top">
            <div className="hero__content">
              <div className="hello__container">
                <img
                  src="/assets/undraw_hello_aeia.svg"
                  className="hello__image"
                />
              </div>
              <div className="hero__content__inner" id="navConverter">
                <h1 className="hero__title">
                  Each year brings positive change
                </h1>
                <p className="hero__text">
                  Welcome back Students! We are ready to imporove the word!
                  Please know as you walk through the hallway of your school
                  that you are surrounded by people who deeply acre about you ,
                  who are guided by a passion for helping you to reach your
                  potential , and who wholeheartedly believe in you...every
                  day...always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="steps landing__section">
        <div className="landing__container">
          <h2>Who can use SmartSchool</h2>
          <p>
            Here's who we can think of, but surely creative people will surprise
            us.
          </p>
        </div>
        <div className="landing__container">
          <div className="steps__inner">
            <div className="step">
              <div className="step__media">
                <img
                  src="/assets/undraw_hello_aeia.svg"
                  className="step__image"
                />
              </div>
              <h4>Students</h4>
              <p className="step__text">
                A Student can see the history of his absence , the date of the
                exams and his average
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img
                  src="/assets/undraw_responsive.svg"
                  className="step__image"
                />
              </div>
              <h4>Administartion</h4>
              <p className="step__text">
                the administration can consult and manage all the students and
                teachers information
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img
                  src="/assets/undraw_creation.svg"
                  className="step__image"
                />
              </div>
              <h4>Teachers</h4>
              <p className="step__text">
                A teacher can see all the students he studies , list the subject
                averages , give attendance to students by departments, and can
                create exam dates for students
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded sections */}
      <div className="expanded landing__section">
        <div className="expanded__container">
          <div className="expanded__inner">
            <div className="expanded__media">
              <img
                src="/assets/undraw_browser.svg"
                className="expanded__image"
              />
            </div>
            <div className="expanded__content">
              <h2 className="expanded__title">
                Natural styling with almost nothing to learn
              </h2>
              <p className="expanded__text">
                Evie brings you the pages you'll need and the structure to
                create your own, without a learning curve. It is minimal and
                mostly styles plain elements. There are only a few classNamees
                you'll need to know but nothing to disrupt your preferred coding
                style.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="expanded landing__section">
        <div className="expanded__container">
          <div className="expanded__inner">
            <div className="expanded__media">
              <img
                src="/assets/undraw_frameworks.svg"
                className="expanded__image"
              />
            </div>
            <div className="expanded__content">
              <h2 className="expanded__title">
                Framework agnostic. Your front-end setup, your choice.
              </h2>
              <p className="expanded__text">
                Evie has zero dependencies and uses vanilla JavaScript for a few
                functions with minimal footprint. You can use React, Vue,
                Angular, jQuery or whatever you prefer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="expanded landing__section">
        <div className="expanded__container">
          <div className="expanded__inner">
            <div className="expanded__media">
              <img src="/assets/together.svg" className="expanded__image" />
            </div>
            <div className="expanded__content">
              <h2 className="expanded__title">
                Ready for production or rapid prototyping
              </h2>
              <p className="expanded__text">
                Landing, authentication and a few other pages to select from,
                despite the small size. Tested on production at unDraw with
                amazing speeds and unopinionated on how to structure your
                project. We really hope you'll find it awesome and useful!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer footer--dark">
        <div className="footer__container">
          <div className="footer__inner">
            <label className="footer__textLogo">Smart School</label>
            <div className="footer__data">
              <div className="footer__data__item">
                <div className="footer__row">
                  Created by
                  <div className="footer__link">
                    <span className="footer__span__item">Rahma Metichi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
