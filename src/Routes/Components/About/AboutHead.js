import React from "react";
import styled from "styled-components";
import { deviceSize } from "./Assets/responsive";
import { useTranslation } from "react-i18next";

import AOS from 'aos';
import 'aos/dist/aos.css';

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  justify-content: center;
  margin: 4rem 3rem 1rem;
  padding: 1rem 0;
`;

const HeadContent = styled.div`
  width: 60%;
  color: #000639;
  background-color: #fff;
  padding: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 90%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: 2rem;
    width: 100%;
  }
`;
const HeadHeading = styled.h1`
  font-size: 2.3rem;
  font-weight: 600;
  letter-spacing: .06px;
  line-height: 110%;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1.5rem;
  }
`;

const HeadingSpan = styled.span`
  color: #2a9d8f;
`;

const HeadText = styled.p`
  font-size: 1.2rem;
  color: #000639!important;
  line-height: 32px;
  margin-bottom: 25px;
`;

const Line = styled.span`
  width: 7%;
  display: block;
  background-color: #2a9d8f;
  padding: 1px;
`;

function AboutHead () {
  const { t } = useTranslation();

  AOS.init({
    offset: 300,
    duration: 1000
  })

  return(
    <HeadContainer >
      <HeadContent data-aos="fade-down">
        <Line />
        <HeadHeading> {t("Hello_eksi")}</HeadHeading>
        <HeadText>{t("Hello_eksi_paragraph")}</HeadText>
      </HeadContent>
    </HeadContainer>
  )
}

export default AboutHead;
