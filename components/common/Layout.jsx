import Navigation from "../Navigation/Navigation";
import Footer from "../Navigation/Footer";
import Seo from "../seo";

const Layout = ({ children, seo }) => {
  return (
    <div>
      <Seo seo={seo} />
      <Navigation />
      <div className="relative top-14">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
