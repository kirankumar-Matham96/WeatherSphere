import Sidenav from "@/app/ui/weather/sidenav";

const Layout = ({ children }) => (
  <main className="w-full px-4 flex h-screen">
    <nav className="w-1/4 h-full">
      <Sidenav />
    </nav>
    <section>{children}</section>
  </main>
);
export default Layout;
