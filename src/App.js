import "./App.css";
import { useState } from "react";
import { NavLinks } from "./components/navlinks";
import { Navbar, SideNav, NavigationRoutes } from "./components/navbar";
import { LoginForm } from "./home/login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [openSideNav, setOpenSideNav] = useState(false);
  let [toggleView, setToggleView] = useState(false)
  function toggleLoginView() {
    setToggleView(!toggleView)
  }

  return (
    <AuthProvider>
      <section className="App">
        <Navbar
          clickFunction={() => {
            setOpenSideNav(!openSideNav);
          }
          }
          loginViewMethod={toggleLoginView}
        />
        <SideNav
          toggle={openSideNav}
          links={NavLinks}
          clickFunction={() => {
            setOpenSideNav(!openSideNav);
          }}
          loginViewMethod={toggleLoginView}
        />
        {toggleView && <LoginForm visibility={toggleLoginView} />}
        <NavigationRoutes />
      </section>
    </AuthProvider>
  );
}

export default App;
