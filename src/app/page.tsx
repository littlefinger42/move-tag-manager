import type { Metadata } from "next";

import { TagsList } from "@/app/_components/TagsList";

export const metadata: Metadata = {
  title: "Move Tag Manager",
  description: "Coding challenge by Move",
};

export default function Home() {
  return (
    <main>
      <TagsList />
    </main>
  );
}
