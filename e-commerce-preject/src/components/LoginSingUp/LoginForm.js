import React, { useState } from "react";
import gravatar from "gravatar";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { AxiosInstance } from "../../api/api";
import { useForm } from "react-hook-form";
import { loggedIn } from "../../Reducers&Actions/actions/globalAction";
import { setUser } from "../../Reducers&Actions/actions/userAction";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const history = useHistory();
  const getGravatar = (email) => {
    return gravatar.url(email, { s: "30", r: "x", d: "monsterid" }, true);
  };

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log("tiklandi,", data);
    try {
      await AxiosInstance.post("/login", { ...data }).then((res) => {
        toast.success("Succesfully Logged In !");

        localStorage.setItem("token", res.data.token);
        const gravatar = getGravatar(res.data.email);
        dispatch(
          setUser({
            name: res.data.name,
            email: res.data.email,
            role: res.data.role_id,
            loggedIn: true,
            photo: gravatar,
          })
        );
        history.push("/");
      });
    } catch (error) {
      setLoginError(true);
      toast.error("Invalid User Informations");
    } finally {
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="Email"
                type="text"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
