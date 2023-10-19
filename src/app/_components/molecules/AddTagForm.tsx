"use client";

import { FC, FormEvent, useState } from "react";
import styled from "styled-components";

import { Button } from "@/app/_components/atoms/Button";
import { TextInput } from "@/app/_components/atoms/TextInput";
import { useTagContext } from "@/app/_context/tagsContext";

const PositionedButton = styled(Button)`
  margin-right: 1rem;
`;

const Form = styled.form`
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTag(tagInput);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <PositionedButton type="submit">Add tag</PositionedButton>
        <TextInput
          onChange={(e) => setTagInput(e.target.value)}
          value={tagInput}
          required
        />
      </Form>

      <PositionedButton onClick={handleSyncTags}>Sync Tags</PositionedButton>
      {statusMessage}
    </>
  );
};
