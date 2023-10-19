import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { devices, deviceSizes } from "@/app/_constants/device";

const StyledContainer = styled.div`
  margin: 0 auto;

  @media ${devices.mobileS} {
    max-width: ${deviceSizes.mobileS};
  }
  @media ${devices.mobileM} {
    max-width: ${deviceSizes.mobileM};
  }
  @media ${devices.mobileL} {
    max-width: ${deviceSizes.mobileL};
  }
  @media ${devices.tablet} {
    max-width: ${deviceSizes.tablet};
  }
  @media ${devices.laptop} {
    max-width: ${deviceSizes.laptop};
  }
  @media ${devices.laptopL} {
    max-width: ${deviceSizes.laptopL};
  }
`;

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
