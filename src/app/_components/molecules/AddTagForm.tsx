"use client";

import { FC, useState } from "react";
import styled from "styled-components";

import { Button } from "@/app/_components/atoms/Button";
import { useTagContext } from "@/app/_context/tagsContext";

const PositionedButton = styled(Button)`
  margin-right: 1rem;
`;

const FieldSet = styled.div`
  margin-bottom: 1rem;
`;

export const AddTagForm: FC = () => {
  const [tagInput, setTagInput] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const { addTag, syncTags } = useTagContext();

  const handleSyncTags = async () => {
    try {
      setStatusMessage("Loading...");
      const response = await syncTags();
      setStatusMessage("Synced!");
    } catch (e) {
      setStatusMessage("Error syncing");
    }
  };

  return (
    <>
      <FieldSet>
        <PositionedButton onClick={() => addTag(tagInput)}>
          Add tag
        </PositionedButton>
        <input
          type="text"
          onChange={(e) => setTagInput(e.target.value)}
          value={tagInput}
        />
      </FieldSet>

      <PositionedButton onClick={handleSyncTags}>Sync Tags</PositionedButton>
      {statusMessage}
    </>
  );
};
