import { ReactNode } from "react";

import { Providers } from "@/app/providers";
import StyledComponentsRegistry from "@/app/_lib/registry";
import { Template } from "@/app/_templates/Template";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Template>{children}</Template>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
