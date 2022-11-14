import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import styled from "styled-components";

import Logo from "./images/Logo.png";
import UA from "./images/ua.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TelegramEmbed from "react-telegram-embed";

import FooterPatreon from "./images/heart.svg";
import FooterAnimations from "./images/instagram.svg";
import FooterArtworks from "./images/picture.svg";
import FooterHome from "./images/home.svg";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Wrapper = styled.div`
  font-family: "Mona Sans";

  height: 100vh;
  width: 960px;
  margin: auto;

  color: white;

  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Content = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .mainText {
    display: flex;
    flex-direction: column;
  }
  @keyframes slideInFromLeft {
    0% {
      font-weight: 900;
      font-stretch: 125%;
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
      font-weight: 200;
      font-stretch: 20%;
    }
    100% {
      font-weight: 900;
      font-stretch: 125%;
    }
  }
  .nameflag {
    animation: 1s ease-in-out 0s 1 slideInFromLeft;
    display: flex;
    align-items: center;
    justify-content: left;
    transition: 300ms;
    font-weight: 900;
    font-stretch: 125%;
    gap: 30px;
    font-variation-settings: "ital" 0;
  }
  .nameflag:hover {
    font-weight: 256;
    font-stretch: 90%;
    font-variation-settings: "ital" 10;
  }
  .UA {
    width: 80px;
    height: 80px;
  }
  h1 {
    font-weight: 700;
    font-size: 80px;
  }
  p {
    font-size: 32px;
  }
  h1,
  p {
    margin: 0;
  }

  @media screen and (max-width: 960px) {
    align-items: center;
    width: 90vw;
    max-width: 100%;

    .mainText {
      align-items: center;
      gap: 4vw;
    }
    .description {
      text-align: center;
    }
    .UA {
      width: 10vw;
      height: 10vw;
    }
    h1 {
      font-size: 10vw;
    }

    p {
      max-width: 80vw;
      font-size: 5vw;
    }
  }
`;

const FUCK = styled.div`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      transform: scale(3);
    }
    100% {
      transform: scale(1);
      transform: rotate(360deg);
    }
  }
  perspective: 1px;
  .gradient {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    position: absolute;
    margin-left: 0%;
    --size: 10px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

    width: var(--size);
    height: var(--size);
    right: 20vw;
    top: 25vh;
    filter: blur(calc(var(--size) / 5));
    animation: rotate 5s var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  @media (min-width: 720px) {
    .gradient {
      --size: 500px;
    }
  }

  body {
    background-color: #222;
    position: absolute;
    inset: 0;
    display: flex;
    place-content: center;
    align-items: center;
    overflow: hidden;
  }

  /* This is just to transition when you change the viewport size. */
  * {
    transition: all 0.25s ease-out;
  }
`;

const WrapperSecondary = styled.div`
  font-family: "Mona Sans";
  margin: auto;
  color: white;
  display: flex;
  transform: translateY(-30vh);
  flex-direction: column;
  padding: 0 25px;
  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100%);
    }
    50% {
      transform: translateY(100%);
    }
    75% {
      transform: translateY(-40vh);
    }
    100% {
      transform: translateY(-30vh);
    }
  }
  animation: 4s ease-in-out 0s 1 slideInFromBottom;
  h1 {
    margin-top: 96px;
    font-size: 26px;
    transition: 300ms;
  }
  .telegramFeed:hover h1 {
    font-weight: 900;
    font-stretch: 125%;
    transition: 300ms;
  }
  .shit {
    width: 400px;
    margin: 25px 0;
  }
  .telegramFeed {
    gap: 25px;
  }
  @media all and (max-width: 960px) {
    align-items: start;
  }
`;
const DoubleWrapper = styled.div`
  display: flex;
  max-width: 960px;
  flex-wrap: wrap;

  @media all and (max-width: 960px) {
    flex-direction: column;
    padding-bottom: 20vw;
    h1 {
      margin-top: 96px;
      font-size: 6vw;
    }
  }
`;
const SecondShittyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  p {
    max-width: 70vw;
    margin-top: 70px;
    padding: 30px;
    width: 500px;
    white-space: pre-line;
    border: solid;
    font-weight: 500;
    border-color: white;
    border-width: 2px;
    color: white;
    background-color: #00000000;
  }
`;

const NewNavBar = styled.div`
  .navbar {
    position: fixed;
    transition: 300ms;
    transition: 600ms ease;
    z-index: 9999;
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    transition: 300ms;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .nav-item {
    width: 100%;
    border-radius: 0 100px 100px 0;
    margin-top: 30px;
    transition: 300ms;
    background: white;
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    text-decoration: none;
    transition: 300ms;
    font-stretch: 100%;
    font-weight: 600;
    filter: grayscale(100%) opacity(0.7);
    border-radius: 0 100px 100px 0;
  }

  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    font-weight: 900;
    font-stretch: 125%;
    transition: 300ms;
    background: #ffffff99;
    color: #090979;
  }

  @media screen and (min-width: 960px) {
    .nav-link:last-of-type:hover {
      background-size: 300% 300%;
      clip-path: inset(0px -150px 0px 0px);
    }
  }
  @media screen and (max-width: 960px) {
    .nav-link {
      border-radius: 100px 0 0 0px;
    }
    .nav-item {
      border-radius: 0px;
    }
  }
  .link-text {
    display: none;
    margin-left: 1rem;
  }

  .nav-link svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
    transition: 300ms;
    transform: translateX(-10px);
  }

  .fa-primary {
    color: #ff7eee;
  }

  .fa-secondary {
    color: #090979;
  }

  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;
  }

  .logo svg {
    transform: rotate(0deg);
    transition: var(--transition-speed);
  }

  .logo-text {
    display: inline;
    position: absolute;
    left: -999px;
    transition: var(--transition-speed);
  }

  .navbar:hover .logo svg {
    opacity: 0;
  }

  /* Small screens */
  @media only screen and (max-width: 960px) {
    .navbar {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }

    main {
      margin: 0;
    }
  }

  /* Large screens */
  @media only screen and (min-width: 1080px) {
    .navbar {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
    }

    .navbar:hover .nav-link svg {
      transition: 300ms;
      transform: translateX(0px);
    }

    .navbar:hover .logo-text {
      left: 0px;
    }
  }

  .dark {
    --text-primary: #b6b6b6;
    --text-secondary: #ececec;
    --bg-primary: #23232e;
    --bg-secondary: #141418;
  }

  .theme-icon {
    display: none;
  }

  .dark #darkIcon {
    display: block;
  }

  .light #lightIcon {
    display: block;
  }

  .solar #solarIcon {
    display: block;
  }
`;

root.render(
  <StrictMode>
    <FUCK>
      <div class="gradient"></div>
    </FUCK>
    <NewNavBar>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <AnchorLink href="#animations" class="nav-link">
              <svg version="1.1" id="Layer_1" viewBox="0 0 512 512">
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      class="fa-secondary"
                      d="M501.801,26.212H10.199C4.566,26.212,0,30.778,0,36.411v439.178c0,5.633,4.566,10.199,10.199,10.199h491.602
			c5.632,0,10.199-4.566,10.199-10.199V36.411C512,30.778,507.433,26.212,501.801,26.212z M20.398,266.199h77.514v89.753H20.398
			V266.199z M491.602,245.801h-48.956c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h48.956v89.753
			h-48.956c-5.632,0-10.199,4.566-10.199,10.199c0,5.633,4.567,10.199,10.199,10.199h48.956v89.039H20.398v-89.039h77.514v66.295
			c0,5.633,4.566,10.199,10.199,10.199h295.777c5.632,0,10.199-4.566,10.199-10.199V156.048h77.514V245.801z M118.311,432.446
			V79.554h275.378v352.892H118.311z M491.602,135.649h-77.514V69.355c0-5.633-4.567-10.199-10.199-10.199H108.112
			c-5.633,0-10.199,4.566-10.199,10.199v176.446H20.398v-89.753h52.016c5.633,0,10.199-4.566,10.199-10.199
			c0-5.633-4.566-10.199-10.199-10.199H20.398V46.61h471.203V135.649z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      class="fa-secondary"
                      d="M330.334,247.752l-123.41-89.753c-3.103-2.257-7.209-2.581-10.627-0.84c-3.42,1.74-5.572,5.253-5.572,9.089v179.506
			c0,3.836,2.152,7.349,5.571,9.089c1.461,0.744,3.047,1.111,4.627,1.111c2.117,0,4.224-0.659,6-1.951l123.41-89.753
			c2.639-1.919,4.2-4.985,4.2-8.248C334.534,252.737,332.972,249.67,330.334,247.752z M211.124,325.724V186.276L306.994,256
			L211.124,325.724z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      class="fa-secondary"
                      d="M372.271,90.773c-5.632,0-10.199,4.566-10.199,10.199v86.693c0,5.633,4.567,10.199,10.199,10.199
			s10.199-4.566,10.199-10.199v-86.693C382.47,95.339,377.903,90.773,372.271,90.773z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      fill="currentColor"
                      class="fa-secondary"
                      d="M372.271,212.143c-5.632,0-10.199,4.566-10.199,10.199v13.259c0,5.633,4.567,10.199,10.199,10.199
			s10.199-4.566,10.199-10.199v-13.259C382.47,216.71,377.903,212.143,372.271,212.143z"
                    />
                  </g>
                </g>
              </svg>
              <span class="link-text">Animations</span>
            </AnchorLink>
          </li>

          <li class="nav-item">
            <AnchorLink href="#artworks" class="nav-link">
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 58 58"
              >
                <g>
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M57,6H1C0.448,6,0,6.447,0,7v44c0,0.553,0.448,1,1,1h56c0.552,0,1-0.447,1-1V7C58,6.447,57.552,6,57,6z M56,50H2V8h54V50z"
                  />
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M16,28.138c3.071,0,5.569-2.498,5.569-5.568C21.569,19.498,19.071,17,16,17s-5.569,2.498-5.569,5.569
		C10.431,25.64,12.929,28.138,16,28.138z M16,19c1.968,0,3.569,1.602,3.569,3.569S17.968,26.138,16,26.138s-3.569-1.601-3.569-3.568
		S14.032,19,16,19z"
                  />
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M7,46c0.234,0,0.47-0.082,0.66-0.249l16.313-14.362l10.302,10.301c0.391,0.391,1.023,0.391,1.414,0s0.391-1.023,0-1.414
		l-4.807-4.807l9.181-10.054l11.261,10.323c0.407,0.373,1.04,0.345,1.413-0.062c0.373-0.407,0.346-1.04-0.062-1.413l-12-11
		c-0.196-0.179-0.457-0.268-0.72-0.262c-0.265,0.012-0.515,0.129-0.694,0.325l-9.794,10.727l-4.743-4.743
		c-0.374-0.373-0.972-0.392-1.368-0.044L6.339,44.249c-0.415,0.365-0.455,0.997-0.09,1.412C6.447,45.886,6.723,46,7,46z"
                  />
                </g>
              </svg>
              <span class="link-text">Artworks</span>
            </AnchorLink>
          </li>

          <li class="nav-item">
            <a
              href="https://www.patreon.com/bePatron?u=40713749"
              class="nav-link"
              target="_blank"
            >
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 470 470"
              >
                <g>
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M123.431,225.992c-9.486-9.486-23.904-11.096-35.074-4.844v-97.677c0-4.961-1.242-9.636-3.426-13.737
		c1.315-0.391,2.69-0.596,4.093-0.596c7.903,0,14.333,6.429,14.333,14.333v72.109c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5
		v-72.109c0-16.174-13.159-29.333-29.333-29.333c-5.35,0-10.508,1.445-15.01,4.133c-4.39-2.621-9.516-4.133-14.99-4.133
		c-16.174,0-29.333,13.158-29.333,29.339l0.122,137.644c0.005,6.281,2.331,15.148,5.409,20.625c0.05,0.09,0.103,0.178,0.157,0.266
		l86.394,139.901c1.794,3.271,3.411,9.494,3.411,13.162V462.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-27.425
		c0-6.283-2.322-15.153-5.401-20.631c-0.051-0.09-0.103-0.178-0.157-0.266L48.233,274.278c-1.795-3.273-3.416-9.499-3.419-13.169
		l-0.122-137.637c0-7.903,6.43-14.333,14.333-14.333s14.333,6.429,14.333,14.333v123.262c0,0.176,0.014,0.349,0.026,0.522
		c0.129,7.336,2.979,14.633,8.565,20.219l67.177,67.176c2.929,2.929,7.678,2.929,10.606,0c2.929-2.929,2.929-7.677,0-10.606
		l-67.177-67.176c-5.588-5.588-5.588-14.681,0-20.269s14.681-5.588,20.27,0l82.656,82.656c9.226,9.226,17.021,28.044,17.021,41.092
		V462.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V360.347c0-16.982-9.406-39.691-21.415-51.699L123.431,225.992z"
                  />
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M410.976,94.139c-5.474,0-10.6,1.511-14.99,4.133c-4.501-2.688-9.66-4.133-15.01-4.133
		c-16.174,0-29.333,13.158-29.333,29.333v72.109c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-72.109
		c0-7.903,6.43-14.333,14.333-14.333c1.403,0,2.779,0.205,4.093,0.596c-2.183,4.101-3.426,8.776-3.426,13.737v97.677
		c-11.169-6.251-25.587-4.642-35.074,4.845l-82.656,82.656c-12.008,12.008-21.415,34.717-21.415,51.699V462.5
		c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V360.347c0-13.048,7.795-31.866,17.021-41.092l82.656-82.656
		c5.588-5.588,14.681-5.588,20.27,0c5.588,5.588,5.588,14.681,0,20.27l-67.177,67.176c-2.929,2.929-2.929,7.677,0,10.606
		c2.929,2.929,7.678,2.929,10.606,0l67.177-67.176c5.586-5.586,8.435-12.883,8.565-20.219c0.012-0.173,0.026-0.346,0.026-0.522
		V123.471c0-7.903,6.43-14.333,14.333-14.333s14.333,6.429,14.333,14.326l-0.122,137.644c-0.003,3.67-1.625,9.896-3.419,13.169
		l-86.393,139.901c-0.054,0.087-0.106,0.176-0.157,0.266c-3.079,5.478-5.401,14.348-5.401,20.631V462.5c0,4.142,3.358,7.5,7.5,7.5
		s7.5-3.358,7.5-7.5v-27.425c0-3.668,1.617-9.89,3.411-13.162l86.394-139.901c0.054-0.087,0.106-0.176,0.157-0.266
		c3.078-5.477,5.404-14.343,5.409-20.625l0.122-137.65C440.308,107.297,427.149,94.139,410.976,94.139z"
                  />
                  <path
                    fill="currentColor"
                    class="fa-secondary"
                    d="M352.601,66.253C352.601,29.721,322.879,0,286.348,0c-20.152,0-39.015,9.192-51.476,24.567
		C222.811,9.595,204.331,0,183.652,0c-36.532,0-66.253,29.721-66.253,66.253c0,14.55,4.631,28.361,13.393,39.94l98.227,129.832
		C230.437,237.899,232.65,239,235,239s4.563-1.101,5.981-2.975l98.227-129.832C347.969,94.614,352.601,80.803,352.601,66.253z
		 M327.246,97.143L235,219.069L142.754,97.142c-6.774-8.952-10.354-19.634-10.354-30.889c0-28.261,22.992-51.253,51.253-51.253
		c27.984,0,50.75,22.766,50.75,50.75c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5c0-9.79-2.15-19.086-6.004-27.442
		C252.82,23.847,268.966,15,286.348,15c28.261,0,51.253,22.992,51.253,51.253C337.601,77.509,334.02,88.19,327.246,97.143z"
                  />
                </g>
              </svg>
              <span class="link-text">Support</span>
            </a>
          </li>
        </ul>
      </nav>
    </NewNavBar>

    <Wrapper id="home">
      <Content>
        <div className="mainText">
          <div className="nameflag">
            <h1>BOB VOLSKIY</h1>
            {/*<img src={UA} className="UA" alt="Ukraine Flag" />*/}
          </div>
          <div className="description">
            {/*<p>Join one of the most realistic 3D NSFW Artist</p>*/}
          </div>
        </div>

        <div class="wrapper">
          <div
            class="button"
            onClick={() =>
              window.open("https://twitter.com/BobVolskiy", "_blank")
            }
          >
            <div class="icon">
              <i class="fab fa-twitter"></i>
            </div>
            <span>Twitter</span>
          </div>
          <div
            class="button"
            onClick={() => window.open("https://t.me/BobVolskiy", "_blank")}
          >
            <div class="icon">
              <i class="fab fa-telegram"></i>
            </div>
            <span>Telegram</span>
          </div>
          <div
            class="button"
            onClick={() =>
              window.open(
                "https://www.patreon.com/bePatron?u=40713749",
                "_blank"
              )
            }
          >
            <div class="icon">
              <i class="fab fa-patreon"></i>
            </div>
            <span>Patreon</span>
          </div>
        </div>
      </Content>
    </Wrapper>

    <SecondShittyWrapper>
      <DoubleWrapper>
        <WrapperSecondary id="Intro">
          <div className="telegramFeed">
            <h1>Intro</h1>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/26" />
            </div>
          </div>
        </WrapperSecondary>
      </DoubleWrapper>
    </SecondShittyWrapper>
    <SecondShittyWrapper>
      <DoubleWrapper>
        <WrapperSecondary>
          <div className="telegramFeed">
            <h1 id="animations">Animations</h1>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/30" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/25" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/28" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/3" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/27" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/23" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/20" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/17" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/16" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/15" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/11" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/7" />
            </div>
          </div>

          <div className="telegramFeed">
            <h1 id="artworks">Artworks</h1>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/4" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/24" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/22" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/21" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/19" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/12" />
            </div>
            <div className="shit">
              <TelegramEmbed src="https://t.me/aeqrtghhwrth/8" />
            </div>
            <div className="shit"></div>
          </div>
        </WrapperSecondary>
      </DoubleWrapper>
    </SecondShittyWrapper>
  </StrictMode>
);
