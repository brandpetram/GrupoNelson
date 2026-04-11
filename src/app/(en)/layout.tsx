import Footer1 from "@/components/brandpetram/footer-1";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer1 lang="en" />
    </>
  );
}
