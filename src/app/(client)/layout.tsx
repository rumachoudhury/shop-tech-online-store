import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <p>{children}</p>
      <Footer />
    </>
  );
}
