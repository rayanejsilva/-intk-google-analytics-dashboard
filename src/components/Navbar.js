import logo from "../assets/intk-logo.svg";

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
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
