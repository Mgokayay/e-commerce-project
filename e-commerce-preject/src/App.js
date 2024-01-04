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
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchProducts, fetchRoles } from "./api/appApi";
import gravatar from "gravatar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginData } from "./Reducers&Actions/actions/userAction";
import { AxiosInstance } from "./api/api";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem("token");

  // console.log("localde token var mi ?", hasToken);
  const getGravatar = (email) => {
    return gravatar.url(email, { s: "30", r: "x", d: "monsterid" }, true);
  };
  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);
  const verifyHandler = async () => {
    try {
      await AxiosInstance.get("/verify")
        .then((res) => {
          const gravatar = getGravatar(res.data.email);
          toast.success("Succesfully Logged In !");
          dispatch(
            loginData({
              name: res.data.name,
              email: res.data.email,
              role: res.data.role_id,
              loggedIn: true,
              photo: gravatar,
              token: res.data.token,
            })
          );
        })
        .catch((err) => {
          toast.error("An error occurs on verify process");
          localStorage.removeItem("token");
        });
    } catch {}
  };

  useEffect(() => {
    const fetchData = async () => {
      if (hasToken == null) {
      } else {
        await verifyHandler();
      }
    };
    fetchData();
  }, []);
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

      <ToastContainer />
    </div>
  );
}

export default App;
