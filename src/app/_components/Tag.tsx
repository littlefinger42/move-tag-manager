import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledTag = styled.span<{ $synced: boolean }>`
  display: inline-block;
  border-radius: 0.25rem;
  background-color: ${({ $synced }) =>
    $synced ? `var(--color-primary)` : `var(--color-secondary)`};
  padding: 0.5rem 1rem;
`;

interface TagProps extends PropsWithChildren {
  synced: boolean;
}

export const Tag: FC<TagProps> = ({ children, synced }) => {
  return <StyledTag $synced={synced}>{children}</StyledTag>;
};
