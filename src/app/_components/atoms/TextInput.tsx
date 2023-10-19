"use client";

import { FC, ChangeEvent } from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  padding: 0.5rem 1rem;
`;

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  required,
}) => {
  return (
    <StyledTextInput
      type="text"
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};
