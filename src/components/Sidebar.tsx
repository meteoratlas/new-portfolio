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
  width: 100%;
  /* background-color: slateblue; */

  @media (min-width: 768px) {
    height: 100vh;
    width: 25%;
  }
`;

const Name = styled.div`
  position: relative;
  overflow: visible;
  h1 {
    font-size: 72px;
    background: linear-gradient(#eee, #333);
    background-clip: text;
    /* color: transparent; */
    height: 200px;
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
    transform: translate(-50px, -50px); */
  }
`;

const LinkOut = styled.a`
  display: flex;
  align-items: center;

  span {
    margin-left: 1em;
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <p>Hi, I'm</p>
      <Name>
        <h1>
          <span>Kelly</span>
          <span>Horan</span>
        </h1>
      </Name>
      <p>a web and application developer currently based in Calgary.</p>
      <div>
        <LinkOut href="#">
          <FaLinkedinIn /> <span>Linkedin</span>
        </LinkOut>
        <LinkOut href="#">
          <FaGithub /> <span>Github</span>
        </LinkOut>
        <LinkOut href="#">
          <MdEmail /> <span>Email</span>
        </LinkOut>
      </div>
    </SidebarContainer>
  );
}
