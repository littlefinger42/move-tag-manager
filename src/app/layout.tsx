import { ReactNode } from "react";
import { Inter } from "next/font/google";

import { Providers } from "@/app/providers";
import StyledComponentsRegistry from "@/app/_lib/registry";
import { Template } from "@/app/_templates/Template";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Template>{children}</Template>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
