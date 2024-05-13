import * as React from "react";
import { Card } from "./Card/Card";
import { CardData } from "../types/CardData";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Sidebar } from "./Sidebar";
import data from "../assets/data.json";
import { ProjectPage } from "./ProjectPage";
import styled from "styled-components";

const CardContainer = styled.section``;

const List = (/*{ match, history }*/) => (
  <CardContainer>
    {data.entries.map((card) => (
      <Link to={"pages/" + card.id} key={card.id}>
        <Card key={card.id} />
      </Link>
    ))}
  </CardContainer>
);

export const CardList = () => {
  const { id } = useParams();

  return <List />;
};
