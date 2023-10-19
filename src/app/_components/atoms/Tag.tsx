import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledTag = styled.button<{ $synced: boolean }>`
  border: 0;
  outline: 0;
  display: inline-block;
  border-radius: 0.25rem;
  background-color: ${({ $synced }) =>
    $synced ? `var(--color-primary)` : `var(--color-secondary)`};
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    &:after {
      content: "Delete";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-light-red);
      border-radius: 0.25rem;
    }
  }
`;

interface TagProps extends PropsWithChildren {
  synced: boolean;
  onClick: () => void;
}

export const Tag: FC<TagProps> = ({ children, synced, onClick }) => {
  return (
    <StyledTag $synced={synced} onClick={onClick} aria-label="Delete tag">
      {children}
    </StyledTag>
  );
};
