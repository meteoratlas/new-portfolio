import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { BasicLayout } from "./BasicLayout";
import { motion } from "framer-motion";

const ScrollableContainer = styled.div<{ $maxHeight?: string }>`
  max-height: ${(props) => props.$maxHeight};
  overflow-y: scroll;
`;

const BackLink = styled.a`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 32px;
  font-family: "Source Serif 4", serif;
  font-weight: 900;
  font-style: italic;
  margin: 2rem;
`;

const Typography = styled.div`
  margin: 2rem;

  h2 {
    font-size: 72px;
    font-family: "Source Serif 4", serif;
    font-weight: 900;
    font-style: italic;
    margin: 0.25em 0;
    line-height: 1em;
  }

  h3 {
    font-family: "Lato", sans-serif;
    font-size: 24px;
    color: var(--main-color-dark-grey);
    /* color: var(--main-color-red); */
    /* color: red; */
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 18px;
  }
`;

const FlexContainer = styled.div<{ $direction?: string; $width?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  width: ${(props) => props.$width};
`;

export const ProjectPage = () => {
  // const { id } = useParams();
  const location = useLocation();
  const { title, category, description } = location.state;

  return (
    <BasicLayout>
      <FlexContainer $direction="row">
        <FlexContainer $direction="column" $width="40%">
          <Typography>
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
          </Typography>
        </FlexContainer>
        <ScrollableContainer $maxHeight="100vh">
          <FlexContainer $direction="column">
            <img src="https://placehold.co/800x500/orange/white" />
            <img src="https://placehold.co/800x500/blue/white" />
            <img src="https://placehold.co/800x500/purple/white" />
          </FlexContainer>
        </ScrollableContainer>
      </FlexContainer>
      <BackLink>
        <motion.div whileHover={{ scale: 1.4 }}>
          <Link to="/">Back</Link>
        </motion.div>
      </BackLink>
    </BasicLayout>
  );
};
