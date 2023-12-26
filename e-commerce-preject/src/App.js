import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/productlist" exact>
          <ProductListPage />
        </Route>
        <Route path="/productpage" exact>
          <ProductPage />
        </Route>
        <Route path="/about-page" exact>
          <AboutPage />
        </Route>
        <Route path="/contact-page" exact>
          <ContactPage />
        </Route>
        <Route path="/team-page" exact>
          <TeamPage />
        </Route>
        <Route path="/signup-page" exact>
          <SignUpPage />
        </Route>
        <Route path="/login-page" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
