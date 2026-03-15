import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab 30 - Prisma ORM & Testing",
  description: "A simple demo for Prisma ORM and Automated Testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <h1>Lab 30 - Prisma ORM with Automated Testing</h1>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/tasks">Tasks</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
