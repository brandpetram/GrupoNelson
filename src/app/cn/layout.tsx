import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "纳尔逊集团 - 墨西卡利工业园区",
  description: "拥有60多年经验的工业开发",
};

export default function CnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
