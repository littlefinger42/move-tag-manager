"use client";

import { FC, useState } from "react";
import styled from "styled-components";

import { Button } from "@/app/_components/atoms/Button";
import { useTagContext } from "@/app/_context/tagsContext";

const PositionedButton = styled(Button)`
  margin-right: 1rem;
`;

export const AddTagForm: FC = () => {
  const [tagInput, setTagInput] = useState<string>("");
  const { addTag } = useTagContext();

  return (
    <>
      <PositionedButton onClick={() => addTag(tagInput)}>
        Add tag
      </PositionedButton>
      <input
        type="text"
        onChange={(e) => setTagInput(e.target.value)}
        value={tagInput}
      />
    </>
  );
};
