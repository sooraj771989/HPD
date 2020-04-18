import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import profile from "../img/profile.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {} = this.props;
    return (
      <nav className="bg-blue">
        <div className="px-4 py-4 w-full mx-auto">
          <div className="container mx-auto flex justify-between">
            <div className="brand flex">
              <img className="logo mr-4 mt-4 " src={logo} alt="Logo" />

              <div class="nav">
                <NavLink
                  exact
                  to="/"
                  className=" font-bold text-white py-1 px-2 mr-4"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  to="/profile"
                  className="  font-bold text-white py-1 px-2 mr-4"
                >
                  Profile
                </NavLink>
                <NavLink
                  exact
                  to="/report"
                  className=" font-bold text-white py-1 px-2"
                >
                  Report
                </NavLink>
              </div>
            </div>

            <div>
              <div className="brand flex items-center">
                <img
                  className="profile-icon mr-3"
                  src={profile}
                  alt="profile"
                />
                <p className="profile-text text-white">Dignity Health</p>
              </div>
            </div>
          </div>
        </div>

       </nav>
    );
  }
}

export default Header;
