import { Link, redirect, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { BasicLayout } from "./BasicLayout";
import { animate, motion, stagger } from "framer-motion";
import { useEffect } from "react";

const ScrollableContainer = styled.div<{ $maxHeight?: string }>`
  max-height: ${(props) => props.$maxHeight};
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  .no-shrink {
    flex-shrink: 0;
  }

  .image-animation {
    width: 100%;

    img {
      width: 100%;
    }
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

    @media (max-width: 1350px) {
      h2 {
        font-size: 4vw;
      }
    }
  }

  h3 {
    font-family: "Lato", sans-serif;
    font-size: 20px;
    color: var(--color-dark-grey);
  }

  p {
    font-family: "Lato", sans-serif;
    font-size: 18px;
  }
`;

const FlexContainer = styled.div<{
  $direction?: string;
  $width?: string;
  $shrink?: string;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  flex-shrink: ${(props) => props.$shrink};

  @media (min-width: 768px) {
    flex-direction: ${(props) => props.$direction};
    width: ${(props) => props.$width};
  }
`;

export const ProjectPage = () => {
  const location = useLocation();
  const { title, category, description, imageGallery } = location.state;

  useEffect(() => {
    animate("img", { y: [200, 0] }, { delay: stagger(0.35) });
    animate(".copy-item", { opacity: [0, 1] }, { delay: stagger(0.1) });
  }, []);

  return (
    <BasicLayout>
      <FlexContainer $direction="row">
        <FlexContainer $direction="column" $width="40%" $shrink="0">
          <Typography lang="en">
            <h2 className="copy-item">{title}</h2>
            <h3 className="copy-item">{category}</h3>
            <p className="copy-item">{description}</p>
          </Typography>
        </FlexContainer>
        <ScrollableContainer $maxHeight="100vh">
          <FlexContainer $direction="column">
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
