import Footer1 from "@/components/brandpetram/footer-1";
import { SetLang } from "@/components/set-lang";

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SetLang lang="es" />
      {children}
      <Footer1 />
    </>
  );
}
