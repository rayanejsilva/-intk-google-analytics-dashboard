 import logo from "../assets/intk-logo.svg";
 import Logout from "./Logout";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__header">
            <img
              src={logo}
              alt="intk's logo"
              className="navbar__img--logo"
            />
          <div className="navbar__btn">
          <Logout/>
        </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;