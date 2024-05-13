import * as React from "react";
import styled from "styled-components";

const SidebarAside = styled.aside`
  h1 {
    font-family: "Source Serif 4", serif;
    font-weight: 900;
    font-size: 64px;
    font-style: italic;
  }
`;

export const Sidebar = () => (
  <SidebarAside>
    <h1>Kelly Horan</h1>
    <h2>Portfolio</h2>
  </SidebarAside>
);
