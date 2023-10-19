import type { Metadata } from "next";

import { TagsList } from "@/app/_components/molecules/TagsList";
import { AddTagForm } from "@/app/_components/molecules/AddTagForm";

export const metadata: Metadata = {
  title: "Move Tag Manager",
  description: "Coding challenge by Move",
};

export default function Home() {
  return (
    <main>
      <h1>Move Tag Manager</h1>
      <TagsList />
      <AddTagForm />
    </main>
  );
}
