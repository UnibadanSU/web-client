import Navigation from "../Navigation/Navigation";
import Footer from "../Navigation/Footer";
import Seo from "../seo";

const Layout = ({ children, seo }) => {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Seo seo={seo} />
      <Navigation />
      <div className="relative top-14 mb-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
