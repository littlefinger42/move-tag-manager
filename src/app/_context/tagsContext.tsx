"use client";

import React, {
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";
import { v4 as uuidv4 } from "uuid";

import { Tag } from "@/app/_types/tag";
import { getTags, deleteTag as deleteTagApi } from "@/app/_lib/api";

type TagsContextType = {
  tags: Tag[];
  addTag: (title: string) => void;
  syncTags: () => void;
  deleteTag: (id: string) => void;
};

const tagContext = createContext<TagsContextType>({
  tags: [],
  addTag: () => {},
  syncTags: () => {},
  deleteTag: () => {},
});

const generateTag = (title: string) => ({
  title,
  createdAt: new Date().toISOString(),
  createdBy: "TODO",
  id: uuidv4(),
  synced: false,
});

export const TagContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    async function fetchData() {
      const remoteTags = await getTags();
      setTags(remoteTags);
    }

    fetchData();
  }, []);

  const addTag = (title: string) => {
    // Check if tag with same name exists
    if (tags.find((tag) => tag.title === title)) {
      // TODO: Handle duplicate tag error
    } else {
      setTags((oldTags) => [...oldTags, generateTag(title)]);
    }
  };

  const deleteTag = async (id: string) => {
    try {
      await deleteTagApi(id);
      setTags((oldTags) => oldTags.filter((tag) => tag.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const syncTags = () => {};

  return (
    <tagContext.Provider
      value={{
        tags,
        addTag,
        syncTags,
        deleteTag,
      }}
    >
      {children}
    </tagContext.Provider>
  );
};

export function useTagContext() {
  const context = useContext(tagContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
