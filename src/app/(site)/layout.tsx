import Footer1 from "@/components/brandpetram/footer-1";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer1 />
    </>
  );
}
