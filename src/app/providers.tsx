"use client";

import { FC, PropsWithChildren } from "react";

import { TagContextProvider } from "@/app/_context/tagsContext";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <TagContextProvider>{children}</TagContextProvider>;
};
