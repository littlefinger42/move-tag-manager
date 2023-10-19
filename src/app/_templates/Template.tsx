import { FC, PropsWithChildren } from "react";

import { Container } from "@/app/_components/atoms/Container";

export const Template: FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};
