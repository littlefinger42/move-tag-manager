"use client";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export enum TypographyVariant {
  P = "p",
  H1 = "h1",
  H2 = "h2",
}

interface TypographyProps extends PropsWithChildren {
  variant?: TypographyVariant;
}

const Paragraph = styled.p``;

const Header1 = styled.h1`
  font-size: 2rem;
`;

const Header2 = styled.h2`
  font-size: 1.2rem;
`;

const typographyVariants = {
  [TypographyVariant.P]: Paragraph,
  [TypographyVariant.H1]: Header1,
  [TypographyVariant.H2]: Header2,
};

export const Typography: FC<TypographyProps> = ({
  variant = TypographyVariant.P,
  children,
}) => {
  const Component = typographyVariants[variant];
  return <Component>{children}</Component>;
};
