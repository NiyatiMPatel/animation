import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const BannerWrapper = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: cursive;
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  line-height: 1;
  margin: 1rem 0;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  span {
    display: block;
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section id="banner">
      <Container id="up">
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Elevate Your Style Journey
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            Where Trends Collide
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            Fashion Redefined, Daily
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            Scroll Into Chic Elegance
          </span>
        </BannerWrapper>
        <BannerWrapper>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            Unveil Your Inner Vogue
          </span>
        </BannerWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
