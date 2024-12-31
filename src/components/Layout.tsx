import { Footer, Navbar } from "@/components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="container flex-grow py-5">{children}</main>
      <Footer />
    </div>
  );
};
