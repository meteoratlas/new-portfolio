import { Link, redirect, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { BasicLayout } from "./BasicLayout";
import { motion } from "framer-motion";

const ScrollableContainer = styled.div<{ $maxHeight?: string }>`
  max-height: ${(props) => props.$maxHeight};
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const BackLink = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 32px;
  font-family: "Source Serif 4", serif;
  font-weight: 900;
  font-style: italic;

  background-color: var(--color-white);
  padding: 0.5em 1em;

  svg {
    position: absolute;
    left: -35px;
    top: 9px;
  }

  @media (min-width: 768px) {
    position: absolute;
    background-color: transparent;
    padding: 0;
    margin: 2rem 3rem;
  }
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
    font-size: 20px;
    color: var(--color-dark-grey);
    /* color: var(--color-red); */
    /* color: red; */
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 18px;
  }
`;

const FlexContainer = styled.div<{ $direction?: string; $width?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: ${(props) => props.$direction};
    width: ${(props) => props.$width};
  }
`;

export const ProjectPage = () => {
  // const { id } = useParams();
  const location = useLocation();
  // console.log(location);
  // if (!location.state) {
  //   console.log("redirecting...");
  //   return redirect("/");
  // }
  // console.log("shouldnt see this");
  const { title, category, description, imageGallery } = location.state;
  console.log(imageGallery);
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
            {/* <img src="https://placehold.co/800x500/orange/white" />
            <img src="https://placehold.co/800x500/blue/white" />
            <img src="https://placehold.co/800x500/purple/white" /> */}
            {imageGallery
              ? imageGallery.map((img: string) => {
                  return <img key={img} src={`/images/${img}`} />;
                })
              : null}
          </FlexContainer>
        </ScrollableContainer>
      </FlexContainer>
      <BackLink>
        <motion.div whileHover={{ scale: 1.25 }}>
          <Link to="/">
            <IoMdArrowBack />
            Back
          </Link>
        </motion.div>
      </BackLink>
    </BasicLayout>
  );
};
