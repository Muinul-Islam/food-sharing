import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "Good job!",
          text: "Successfully Logged In",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Oops!",
          text: "An error occurred: " + error.message,
          icon: "error",
        });
      });
    form.reset();
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log(user);

        Swal.fire({
          title: "Good job!",
          text: "Successfully Logged In",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: "Oops!",
          text: "An error occurred: " + error.message,
          icon: "error",
        });
      });
  };
  return (
    <div>
      <div className="hero min-[80vh] py-10 my-10 bg-green-700 rounded-xl">
        <div className="hero-content flex-col w-3/4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-green-700 text-white">Login</button>
              </div>
              <div className="text-center">
                <p>
                  New Here ?{" "}
                  <Link to="/signUp" className="text-red-600">
                    Register First.
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div className="flex justify-center pb-4">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary  text-white w-3/4"
              >
                Login With
                <FcGoogle className="text-3xl"></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
