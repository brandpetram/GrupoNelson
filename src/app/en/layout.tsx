import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grupo Nelson - Industrial Parks in Mexicali",
  description: "Industrial development with over 60 years of experience",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
