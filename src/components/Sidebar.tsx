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

const SidebarContainer = styled.div`
  width: 90%;
  padding: 0 1rem;
  font-family: "Lato", sans-serif;
  /* background-color: slateblue; */

  .links {
    margin-top: 1em;
  }

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 25%;
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
    /* color: transparent; */
    /* position: relative; */
    overflow: visible;
  }
  span {
    /* position: absolute; */
    display: inline-block;
  }
  span:first-child {
    top: 0;
    left: 0;
  }
  /* span:nth-child(2) {
    top: 72px;
    left: 42px;
    transform: translate(-50px, -50px); 
  }*/
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
  return (
    <SidebarContainer>
      <p>Hi, I'm</p>
      <Name>
        <h1>Kelly</h1>
        <h1>Horan</h1>
      </Name>
      <p>a web and application developer currently based in Calgary.</p>
      <div className="links">
        <LinkOut href="#">
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
