import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Recipes from "../recipes/add_recipes/recipes";
import AllRecipes from "../recipes/all_recipes/allRecipes";
import Tests from "../tests/tests";

export const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/all-recipes" element={<AllRecipes />} />
    </Routes>
  );
};

export const Navbar = (props) => {
  return (
    <nav className="home-nav-bar">
      <div className="logo">
        <Link to="/">
          <h1>RECETTE</h1>
        </Link>
      </div>
      <ul className="flex-row">
        <li>
          <Link to="/all-recipes">
            <i className="fa-solid fa-magnifying-glass"></i> FIND RECIPES
          </Link>
        </li>
        {/* <li>
          <Link to="/tests">TEST SITE</Link>
        </li> */}
        <li>
          <Link to="recipes">POST RECIPE</Link>
        </li>
      </ul>
      <div className="auth-div">
        <button className="btn" onClick={props.loginViewMethod}>LOG IN</button>
      </div>
      <div className="menu-bar">
        <button className="menu-btn" onClick={props.clickFunction}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export const SideNav = (props) => {
  return (
    <div
      className="sidenav"
      style={props.toggle ? { left: "0%" } : { left: "100%" }}
    >
      <div className="links-list">
        {props.links.map((item, index) => {
          return (
            <Link key={index} to={item.url} onClick={props.clickFunction}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="mobile-auth-div">
        <button className="btn" onClick={props.loginViewMethod}>LOG IN</button>
      </div>
    </div>
  );
};
