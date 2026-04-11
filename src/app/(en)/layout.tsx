import Footer1 from "@/components/brandpetram/footer-1";
import { SetLang } from "@/components/set-lang";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SetLang lang="en" />
      {children}
      <Footer1 lang="en" />
    </>
  );
}
