import { Footer, Navbar } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-5">{children}</main>
      <Footer />
    </div>
  );
};
