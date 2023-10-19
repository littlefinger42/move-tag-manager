import type { Metadata } from "next";

import { TagsList } from "@/app/_components/molecules/TagsList";
import { Typography } from "@/app/_components/atoms/Typography";
import { AddTagForm } from "@/app/_components/molecules/AddTagForm";

export const metadata: Metadata = {
  title: "Move Tag Manager",
  description: "Coding challenge by Move",
};

export default function Home() {
  return (
    <main>
      <Typography>Move Tag Manager</Typography>
      <TagsList />
      <AddTagForm />
    </main>
  );
}
