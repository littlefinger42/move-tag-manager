"use client";

import React, {
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
  createContext,
} from "react";

import { Tag } from "@/app/_types/tag";

type TagsContextType = {
  tags: Tag[];
};

const tagContext = createContext<TagsContextType>({ tags: [] });

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

  return (
    <tagContext.Provider
      value={{
        tags,
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
