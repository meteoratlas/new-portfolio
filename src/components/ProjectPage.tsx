import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowBack } from "react-icons/io";
import { BasicLayout } from "./BasicLayout";
import { animate, motion, stagger } from "framer-motion";
import { useContext, useEffect } from "react";
import { CardCTA } from "../types/CardData";
import useReducedMotion from "../hooks/useReducedMotion";
import { AppStateContext } from "../context/AppState";

interface ProjectImage {
  image: string;
  altText: string;
}

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

const BackLink = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 32px;
  font-family: "Source Serif 4", serif;
  font-weight: 900;
  font-style: italic;
  border-top: 2px solid var(--color-black);
  border-right: 2px solid var(--color-black);

  background-color: var(--color-white);
  padding: 0.5em 1em;

  a,
  a:visited {
    color: var(--color-black);
  }

  svg {
    position: absolute;
    left: -35px;
    top: 9px;
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    padding: 0;
    margin: 2rem 3rem;
    border: none;
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

  .cta-container {
    margin-top: 32px;
    display: flex;
    /* flex-direction: column;

    @media (max-width: 1350px) {
      flex-direction: row;
    } */
  }

  .cta {
    padding: 0.5em;
    text-decoration: none;
    transition: background-color 0.4s;
    font-family: "Lato", sans-serif;
    font-size: 22px;
    margin-top: 4px;
    margin-right: 8px;
    border: 2px solid var(--color-dark-grey);
  }

  .cta:hover {
    background-color: var(--color-black);
    color: var(--color-white);
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
  const context = useContext(AppStateContext);
  const reducedMotion = useReducedMotion(context);

  useEffect(() => {
    if (!reducedMotion) {
      animate("img", { y: [200, 0] }, { delay: stagger(0.35) });
      animate(".copy-item", { opacity: [0, 1] }, { delay: stagger(0.1) });
    }
  }, []);

  const pageEntry = context.data.entries.find(
    (i) => i.id === location.pathname.substring(1)
  );
  const { title, category, description, imageGallery, ctas } = pageEntry;

  return (
    <BasicLayout>
      <FlexContainer $direction="row">
        <FlexContainer $direction="column" $width="40%" $shrink="0">
          <Typography lang="en">
            <h2 className="copy-item">{title}</h2>
            <h3 className="copy-item">{category}</h3>
            <p className="copy-item">{description}</p>
            <div className="cta-container">
              {ctas
                ? ctas.map((cta: CardCTA) => {
                    return (
                      <a
                        className="cta"
                        href={cta.URL}
                        key={cta.URL}
                        target="_blank"
                      >
                        {cta.label}
                      </a>
                    );
                  })
                : null}
            </div>
          </Typography>
        </FlexContainer>
        <ScrollableContainer $maxHeight="100vh" tabIndex={0} role="group">
          <FlexContainer $direction="column">
            {imageGallery
              ? imageGallery.map((entry: ProjectImage) => {
                  return (
                    <img
                      key={entry.image}
                      alt={entry.altText}
                      src={`/images/${entry.image}`}
                    />
                  );
                })
              : null}
          </FlexContainer>
        </ScrollableContainer>
      </FlexContainer>
      <BackLink>
        <motion.div whileHover={{ scale: reducedMotion ? 1 : 1.25 }}>
          <Link to="/">
            <IoMdArrowBack />
            Back
          </Link>
        </motion.div>
      </BackLink>
    </BasicLayout>
  );
};
