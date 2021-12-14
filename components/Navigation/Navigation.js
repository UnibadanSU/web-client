import {useState} from "react";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false);
  
  const openNavigationMenu = () => setNavOpen(true);

  const closeNavigationMenu = () => setNavOpen(false);

  return (
    <div>
      <Header openNavMenu={openNavigationMenu} />
      <NavigationMenu shouldOpen={navOpen} closeNavMenu={closeNavigationMenu} />
    </div>
  );
}
