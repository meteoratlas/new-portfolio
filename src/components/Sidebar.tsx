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
import { useEffect } from "react";
import { animate, stagger } from "framer-motion";

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

  @media (min-width: 768px) {
    height: 100vh;
    width: 28%;
    /* max-width: 350px; */
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
    display: inline-block;
  }
  span:first-child {
    top: 0;
    left: 0;
  }
`;

const LinkOut = styled.a`
  display: flex;
  align-items: center;

  span {
    margin-left: 1em;
    font-size: 1.1em;
    padding-bottom: 4px;
  }
`;

export function Sidebar() {
  useEffect(() => {
    animate(
      ".copy-item",
      { y: ["100%", 0], opacity: [0, 1] },
      { delay: stagger(0.1) }
    );
  }, []);

  return (
    <SidebarContainer>
      <p className="copy-item">Hi, I'm</p>
      <Name className="copy-item">
        <h1>Kelly</h1>
        <h1>Horan</h1>
      </Name>
      <p className="copy-item">
        a web and application developer specializing in front end development.
        Here are a few of the projects I've worked on over my many years as a
        developer, from things I've done at work to personal projects.
      </p>
      <div className="links copy-item">
        <LinkOut href="https://www.linkedin.com/in/kellyhoran2/">
          <FaLinkedinIn /> <span>Linkedin</span>
        </LinkOut>
        <LinkOut href="https://github.com/meteoratlas">
          <FaGithub /> <span>Github</span>
        </LinkOut>
        <LinkOut href="#">
          <MdEmail /> <span>Email</span>
        </LinkOut>
      </div>
    </SidebarContainer>
  );
}
