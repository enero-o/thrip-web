import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import routes from "./routes";
import { Toaster } from "react-hot-toast";
import Layout from "./layouts/layout";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CopyrightInfo from "./pages/CopyrightInfo";

const paths = [
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.landing,
    element: <LandingPage />,
  },
  {
    path: routes.termsOfService,
    element: <TermsOfService />,
  },
  {
    path: routes.privacyPolicy,
    element: <PrivacyPolicy />,
  },
  {
    path: routes.copyright,
    element: <CopyrightInfo />,
  },
];

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {paths.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>

          <Route path={routes.admin} element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
