import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledTag = styled.span`
  display: inline-block;
  border-radius: 0.25rem;
  background-color: pink;
  padding: 0.5rem 1rem;
`;

export const Tag: FC<PropsWithChildren> = ({ children }) => (
  <StyledTag>{children}</StyledTag>
);
