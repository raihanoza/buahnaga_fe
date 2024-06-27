import Dashboard from "layouts/dashboard";
import LandingPage from "LandingPage/LandingPage";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Detail from "Details/Detail";
import SignIn from "layouts/authentication/sign-in";

const sidenavRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
];

const routes = [
  {
    type: "collapse",
    name: "LandingPage",
    key: "LandingPage",
    route: "/landingpage",
    icon: <Shop size="12px" />,
    component: <LandingPage />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Detail",
    key: "Detail",
    route: "/detail/:id",
    icon: <Shop size="12px" />,
    component: <Detail />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "SignIn",
    key: "SignIn",
    route: "/signin",
    icon: <Shop size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
];

export { sidenavRoutes, routes };
