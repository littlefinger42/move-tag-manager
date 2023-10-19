import type { Metadata } from "next";

import { TagsList } from "@/app/_components/TagsList";
import { Typography } from "@/app/_components/Typography";
import { AddTagForm } from "@/app/_components/AddTagForm";

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
