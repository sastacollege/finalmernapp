import { NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div className="navlinkContainer">
      <NavLink to={"/"} className={"navLinkChild"}>
        Home
      </NavLink>
      <NavLink to={"/login"} className={"navLinkChild"}>
        Login
      </NavLink>
      <NavLink to={"/register"} className={"navLinkChild"}>
        Register
      </NavLink>
    </div>
  );
}

export default MainPage;
