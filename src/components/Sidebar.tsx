// import * as React from "react";
// import styled from "styled-components";

// const SidebarAside = styled.aside`
//   width: 25%;

//   h1 {
//     font-family: "Source Serif 4", serif;
//     font-weight: 900;
//     font-size: 64px;
//     font-style: italic;
//   }
// `;

// export const Sidebar = () => (
//   <SidebarAside>
//     <h1>Kelly Horan</h1>
//     <h2>Portfolio</h2>
//   </SidebarAside>
// );

import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdGifBox } from "react-icons/md";
import { useContext, useEffect } from "react";
import { animate, stagger, useReducedMotion } from "framer-motion";
import { AppStateContext } from "../context/AppState";

const SidebarContainer = styled.div`
  width: 90%;
  padding: 0 1rem;
  font-family: "Lato", sans-serif;
  flex-shrink: 0;

  .links {
    margin-top: 1em;
  }

  p {
    margin: 0;
  }

  p:nth-child(n + 2) {
    margin-top: 16px;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 28%;
    /* max-width: 350px; */
  }

  button {
    margin-top: 4em;
    background: var(--color-white);
    z-index: 2;
    position: fixed;
    bottom: 16px;
    border: 1px solid var(--color-black);
    padding: 0.5em;
    transition: color 0.5s, background-color 0.5s;
    cursor: pointer;

    @media (max-width: 768px) {
      bottom: unset;
      top: 16px;
      right: 32px;
      margin-top: 0;
    }
  }

  button:hover {
    background-color: var(--color-dark-grey);
    color: var(--color-white);
  }
`;

const Name = styled.div`
  position: relative;
  overflow: visible;
  font-family: "Source Serif 4", serif;

  h1 {
    font-size: 72px;
    background: linear-gradient(#eee, #333);
    background-clip: text;
    font-weight: 900;
    font-style: italic;
    line-height: 1em;
    margin: 0;
    overflow: visible;
  }
  span {
    display: block;
  }
  span:first-child {
    top: 0;
    left: 0;
  }
`;

const LinkOut = styled.a`
  display: flex;
  align-items: baseline;
  position: relative;

  span {
    margin-left: 1.4em;
    font-size: 1.2em;
    padding-bottom: 10px;
  }

  svg {
    position: absolute;
    translate: 0 7px;
  }
`;

export function Sidebar() {
  const context = useContext(AppStateContext);
  const reducedMotion = useReducedMotion(context);

  useEffect(() => {
    if (!reducedMotion.noMotion) {
      animate(".copy-item", { opacity: [0, 1] }, { delay: stagger(0.1) });
    }
  }, [reducedMotion]);

  return (
    <SidebarContainer>
      <p className="copy-item">Hi, I'm</p>
      <Name className="copy-item">
        <h1>
          <span>Kelly</span>
          <span>Horan</span>
        </h1>
      </Name>
      <p className="copy-item">
        a web and application developer specializing in front end development.
      </p>
      <p className="copy-item">
        I've had an interest in the intersection between art and technology
        since I was young, and have been lucky enough to fulfill that interest
        in web dev. I currently work as a Senior Developer at Critical Mass.
      </p>
      <p className="copy-item">
        Here are a few of the projects I've worked on, from things I've done at
        work to smaller personal projects.
      </p>

      <div className="links copy-item">
        <LinkOut href="https://www.linkedin.com/in/kellyhoran2/">
          <FaLinkedinIn aria-hidden="true" role="img" /> <span>Linkedin</span>
        </LinkOut>
        <LinkOut href="https://github.com/meteoratlas">
          <FaGithub aria-hidden="true" role="img" /> <span>Github</span>
        </LinkOut>
        {/* <LinkOut href="#"> */}
        {/* <MdEmail /> <span>Email</span> */}
        {/* </LinkOut> */}
      </div>
      <button
        value={context.noMotion}
        aria-pressed={context.noMotion}
        onClick={() => {
          context.setNoMotion(!context.noMotion);
        }}
      >
        {context.noMotion ? "Enable Motion?" : "Reduce Motion?"}
      </button>
    </SidebarContainer>
  );
}
