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

type TagsContextType = {
  tags: Tag[];
  addTag: (title: string) => void;
};

const tagContext = createContext<TagsContextType>({
  tags: [],
  addTag: () => {},
});

const generateTag = (title: string) => ({
  title,
  createdAt: new Date().toISOString(),
  createdBy: "TODO",
  id: uuidv4(),
});

export const TagContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/tags`,
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          }
        );
        if (response.ok) {
          const tags = await response.json();
          setTags(tags);
        } else {
          throw Error(`An error has occured: ${response.status}`);
        }
      } catch (e) {
        console.error(e);
      }
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

  return (
    <tagContext.Provider
      value={{
        tags,
        addTag,
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
