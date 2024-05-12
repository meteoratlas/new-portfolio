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

// const List = (/*{ match, history }*/) => (
//   <div className="card-list">
//     {data.entries.map((card) => (
//       <Link to={"pages/" + card.id}>
//         <Card
//           key={card.id}
//           // isSelected={match.params.id === card.id}
//           // history={history}
//           // {...card}
//         />
//       </Link>
//     ))}
//   </div>
// );

export const CardList = () => {
  const { id } = useParams();
  const p = useParams();
  console.log(p);

  const doit = () => {
    console.log("b", p);
  };

  //   setTimeout(doit, 1000);

  return (
    <>
      <div>
        <Link to={"pages/about"}>Test Link</Link>
      </div>
      {data.entries.map((card) => (
        <Link to={"pages/" + card.id} key={card.id}>
          <Card
            key={card.id}
            //   id={id}
            // isSelected={match.params.id === card.id}
            // history={history}
            // {...card}
          />
        </Link>
      ))}
      {/* <Routes>{<Route path={"pages/:id"} element={<ProjectPage />} />}</Routes> */}
    </>
  );
};
