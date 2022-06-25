import Navigation from "../Navigation/Navigation";
import Footer from "../Navigation/Footer";
import Seo from "../seo";

const Layout = ({ children, seo }) => {
  return (
    <>
      <Seo seo={seo} />
      <div className="min-h-[100vh] flex flex-col">
        <Navigation />
        <div className="flex-1 relative top-7  flex  justify-between flex-col  mb-8">
          {children}

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
