"use client";

import { ReactNode } from "react";

import StyledComponentsRegistry from "@/app/_lib/registry";
import { Template } from "@/app/_templates/Template";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Template>{children}</Template>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
