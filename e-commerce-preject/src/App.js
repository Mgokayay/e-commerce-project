import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
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
      </Switch>
    </div>
  );
}

export default App;
