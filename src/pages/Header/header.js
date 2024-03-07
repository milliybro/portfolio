import React, { useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.scss";

function Header() {
  const navigate = useNavigate();
  const elSocials = useRef();
  const s = gsap.utils.selector(elSocials);
  const tlMenu = useRef();
  const [checked, setChecked] = useState(false);

  const animeOne = () => {
    tlMenu.current = gsap
      .timeline()
      .fromTo(
        s(".menu-one"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".menu-two"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".menu-three"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".menu-four"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".menu-five"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      );
  };
  const animeTwo = () => {
    tlMenu.current = gsap
      .timeline()
      .fromTo(
        s(".github"),
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".linkedin"),
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".twitter"),
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      )
      .fromTo(
        s(".schedule"),
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "powerIn",
          transformOrigin: "center center",
          stagger: 0.1,
        }
      );
  };


  const check = () => {
    return (checked = !checked);
  };

  // useEffect(() => {
  //     tl.current = gsap.timeline()
  //   .to(q(".square"), {
  //     y: -15
  //   })
  //   .to(q(".square"), {
  //     duration: 1.5, ease: "bounce.out", y: 6, repeat: -1, yoyo: true
  //   });
  //   }, []);

  const nav = () => {
    return navigate("/"), window.location.reload();
  };

  return (
    <div className="header">
      <div className="logo" onClick={nav}>
        <h1>MilliyBro</h1>
      </div>

      <div className="menu-toggle">
        <input
          type="checkbox"
          className="nav__checkbox"
          id="nav-toggle"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="nav-toggle" className="nav__button">
          <span className="nav__icon">&nbsp;</span>
        </label>
        <div className="navigation" ref={elSocials}>
          <div className="large_menu">
            <a
              className="github"
              href="https://github.com/milliybro"
              target="_blank"
              rel="noreferrer"
            >
              <div className="github_box">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p>Github</p>
              </div>
            </a>

            <a
              className="linkedin"
              href="https://www.linkedin.com/in/milliybro/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="linkedin_box">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                </svg>

                <p>LinkedIn</p>
              </div>
            </a>

            <a
              className="twitter"
              href="https://t.me/MilliyBro"
              target="_blank"
              rel="noreferrer"
            >
              <div className="twitter_box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#29b6f6"
                    d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                  ></path>
                  <path
                    fill="#b0bec5"
                    d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                  ></path>
                </svg>

                <p>Telegram</p>
              </div>
            </a>

            <a
              className="schedule"
              href="https://calendly.com/edeworonyedika"
              target="_blank"
              rel="noreferrer"
            >
              <div className="schedule_box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                    cx="19.38"
                    cy="42.035"
                    r="44.899"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fd5"></stop>
                    <stop offset=".328" stop-color="#ff543f"></stop>
                    <stop offset=".348" stop-color="#fc5245"></stop>
                    <stop offset=".504" stop-color="#e64771"></stop>
                    <stop offset=".643" stop-color="#d53e91"></stop>
                    <stop offset=".761" stop-color="#cc39a4"></stop>
                    <stop offset=".841" stop-color="#c837ab"></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <radialGradient
                    id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                    cx="11.786"
                    cy="5.54"
                    r="29.813"
                    gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4168c9"></stop>
                    <stop
                      offset=".999"
                      stop-color="#4168c9"
                      stop-opacity="0"
                    ></stop>
                  </radialGradient>
                  <path
                    fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                    d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                  ></path>
                  <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                  <path
                    fill="#fff"
                    d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                  ></path>
                </svg>

                <p>Instagram</p>
              </div>
            </a>
          </div>
          <div className="small_menu">
            <ul>
              <li className="menu-one">
                <NavLink className="nav-link" onClick={check} to="/">
                  Home
                </NavLink>
              </li>
              <li className="menu-two">
                <NavLink className="nav-link" onClick={check} to="/work">
                  Work
                </NavLink>
              </li>
              <li className="menu-three">
                <a
                  className="nav-link"
                  href="https://t.me/MilliyBro"
                  target="_blank"
                  rel="noreferrer"
                >
                  Writing
                </a>
              </li>
              <li className="menu-four">
                <a
                  className="nav-link"
                  href="https://docs.google.com/document/d/15cl91iJl6KnM7y4TE-TiD-gLtpFFy77quYGhUO_zVbI/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
              <li className="menu-five">
                <a
                  className="nav-link"
                  href="mailto:shohrux-rustamov@mail.ru"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
