import { Navigation } from "lucide-react";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionButton from "./action-button";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between
      px-10 border-b-8
      ">
        <Logo />
        <NavigationBar />
        <ActionButton />
      </div>
    </>
  );
};

export default Navbar;
