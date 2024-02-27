import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../../assets/bg-car.jpg"

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const isSignUpDisabled = !username || !password || !role;

  const signUp = () => {
    // Basic validations
    if (!username || !password || !role) {
      setMsg("Please fill in all fields");
      return;
    }

    // Password validation
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //     setMsg("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character");
    //     return;
    // }

    let obj = {
      username: username,
      password: password,
      role: role,
    };

    axios
      .post("http://localhost:7860/user/add", obj)
      .then((response) => {
        // setManager(response.data);

        navigate("/user/dashboard");
      })
      .catch(function (error) {
        setMsg("Issue in processing in signup");
      });
  };

  return (
    <div style={{backgroundImage:`url(${backgroundImage})`}} className="h-100 ">
    <div className="container w-50  h-100 d-flex justify-content-center ">
      <div className="w-50">
        <div className="row">
          <div className="col ml-auto mt-5">
            <div className="card">
              <div className="card-header ">
                <h3 className="text-center">Sign Up</h3>
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

                  <div class="mb-3">
                    <label for="role" class="form-label">
                      Select Role:
                    </label>
                    <select
                      class="form-select"
                      id="role"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Select</option>
                      <option value="ADMIN">Admin</option>
                      <option value="CUSTOMER">User</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center ">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={signUp}
                  disabled={isSignUpDisabled}
                >
                  SignUp
                </button>
              </div>
            </div>
            <div className="my-2" style={{float:'right'}}>
              <span className="text-white ">
                Have an Account? &nbsp;
                <a
                  class="btn btn-primary"
                  href="#"
                  role="button"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
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

export default SignUp;
