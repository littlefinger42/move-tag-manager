"use client";

import { FC } from "react";
import styled from "styled-components";

import { useTagContext } from "@/app/_context/tagsContext";
import { Tag } from "@/app/_components/atoms/Tag";

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const TagsList: FC = () => {
  const { tags } = useTagContext();

  return (
    <UnorderedList>
      {tags.map(({ id, title, synced }) => (
        <li key={id}>
          <Tag synced={!!synced}>{title}</Tag>
        </li>
      ))}
    </UnorderedList>
  );
};
