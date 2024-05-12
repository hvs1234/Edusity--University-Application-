import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState();
  const [newpassword, setPassword] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    let result = await fetch("http://localhost:4500/login", {
      method: "post",
      body: JSON.stringify({
        email,
        newpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };
  return (
    <>
      <section className="section section-login">
        <div className="overlay"></div>
        <header className="header login-header">
          <div className="logo">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i>&nbsp; Edusity
            </h2>
          </div>
          <div className="signup-head-data">
            <ul>
              <li>
                <Link className="navlink" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="container">
          <div className="contact-content login-content grid grid-two-columns">
            <div className="contact-data login-data">
              <h2 className="main-head">
                <i className="fa-solid fa-user-graduate"></i>&nbsp; Edusity
              </h2>
              <p>
                Edusity, a dynamic online platform, revolutionizes education.
                Offering diverse courses, it fosters interactive learning
                environments, empowering students worldwide.
              </p>
              <p>
                With Edusity, education knows no bounds. Accessible anytime,
                anywhere, our platform empowers learners worldwide.
              </p>
            </div>
            <div className="contact-form-part login-form-part">
              <div className="form">
                <h2>
                  User Login&nbsp; <i className="fa-solid fa-user"></i>
                </h2>
                <div className="line"></div>
                <div>
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    className="input-here"
                    placeholder="Your Valid Email Address"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="Password"
                    id="password"
                    className="input-here"
                    placeholder="Your Valid Password"
                    required
                    autoComplete="off"
                    value={newpassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn submit-btn"
                    onClick={handleLogin}
                  >
                    Login Here
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="login-head-data">
            <p>
              Edusity, an innovative online platform, revolutionizes education
              accessibility through its comprehensive university site. Offering
              a diverse array of courses, Edusity caters to learners worldwide,
              fostering a dynamic learning environment.
            </p>
            <p>
              Through interactive modules and multimedia resources, students
              engage deeply with their subjects, transcending geographical
              barriers. Edusity`s user-friendly interface ensures seamless
              navigation, enhancing the learning experience for students of all
              ages and backgrounds.
            </p>
            <p>
              With esteemed educators guiding the curriculum, Edusity maintains
              academic excellence, empowering learners to achieve their full
              potential. Through its commitment to quality education, Edusity
              shapes the future by equipping individuals with the knowledge and
              skills they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <section className="section-footer">
        <p>
          Copyright <i className="fa-solid fa-copyright"></i>&nbsp; Edusity.
          2024 | All right reserved
        </p>
      </section>
    </>
  );
};

export default Login;
