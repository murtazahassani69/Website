import React from "react";
import styled from "styled-components";
import { deviceSize } from "./responsive";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 6px 1em;
  margin-right: 1rem;
  font-size: ${({ size }) => (size ? size + "px" : "18px")};
  font-weight: 600;
  border-radius: 3px;
  background-color: #2a9d8f;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: #21867a;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${deviceSize.tablet}px){
    padding: 6px .5em;
  }
`;

export function Button(props) {
  const { size } = props;

  return (
    <ButtonWrapper size={size} className={props.className}>
      {props.children}
    </ButtonWrapper>
  );
}
