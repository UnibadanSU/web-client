import Navigation from "../Navigation/Navigation";
import Footer from "../Navigation/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
