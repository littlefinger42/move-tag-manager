import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: inherit;
  border-radius: 0.25rem;
  background-color: var(--color-gray-dark);
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: var(--color-gray-light);
    transition: 0.3s ease-in-out;
  }
`;

interface ButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
  type,
}) => {
  return (
    <StyledButton onClick={onClick} className={className} type={type}>
      {children}
    </StyledButton>
  );
};
