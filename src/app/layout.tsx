import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dagligvarefinner",
  description: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
