import Sidenav from "@/app/ui/weather/sidenav";

const Layout = ({ children }) => (
  <main className="w-full flex h-screen">
    <nav className="w-1/6 h-full">
      <Sidenav />
    </nav>
    <section className="w-5/6 h-full overflow-auto">{children}</section>
  </main>
);
export default Layout;
