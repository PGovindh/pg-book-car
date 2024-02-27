import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import backgroundImage from "../../assets/bg-car.jpg"

function Login() {
  const [username, setUsername] = useState("");
  const [param] = useSearchParams();
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const login = () => {
    let obj = {};
    obj.username = username;
    obj.password = password;

    axios
      .post("http://localhost:5050/auth/login", obj, {})
      .then(function (response) {
        //handle success
        localStorage.setItem("username", username);
        // localStorage.setItem('token',token)
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("isLoggedIn", true);
        let role = response.data.role;

        switch (role) {
          case "CUSTOMER":
            navigate("/user/dashboard");
            break;
          case "HOST":
            navigate("/host/dashboard");
            break;
          case "ADMIN":
            navigate("/admin/dashboard");
            break;
          default:
            break;
        }
      })
      .catch(function (error) {
        //handle error
        setMsg("Invalid Credentials");
      });
  };
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-100 "
    >
      <div className="container w-50  h-100 d-flex justify-content-center ">
        <div className="w-50">
          <div className="row">
            <div className="col ml-auto mt-5">
              <div className="card">
                <div className="card-header ">
                  <h3 className="text-center">Login</h3>
                </div>
                <div className="card-body ">
                  {msg !== "" ? (
                    <div className="alert alert-danger" role="alert">
                      {msg}
                    </div>
                  ) : null}
                  <form>
                    <div class="mb-3">
                      <label for="username" class="form-label">
                        Enter Username:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">
                        Enter Password:
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                    <select
                      class="form-select"
                      id="role"
                    >
                      <option>Select</option>
                      <option value="bgr">Bangalore</option>
                      <option value="hyd">Hyderabad</option>
                    </select>
                    <input type="date" />
                    <input type="date" />
                    </div>
                  </form>
                </div>
                <div className="card-footer text-center ">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={()=>login()}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="my-2" style={{ float: "right" }}>
                <span className="text-white ">
                  Don't you have an Account? &nbsp;
                  <a
                    class="btn btn-primary"
                    href="#"
                    role="button"
                    onClick={() => navigate("/")}
                  >
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
