import Navigation from "../Navigation/Navigation";
import Footer from "../Navigation/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div className="relative top-14">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
