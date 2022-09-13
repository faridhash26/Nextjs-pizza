import { FC } from "react";

import Footer from "./Footer";
import Navbbar from "./Navbbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
