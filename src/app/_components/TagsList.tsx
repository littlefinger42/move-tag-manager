"use client";

import { FC } from "react";

import { useTagContext } from "@/app/_context/tagsContext";

export const TagsList: FC = () => {
  const { tags } = useTagContext();

  console.log("TAGS", tags);
  return <div>tags list</div>;
};
