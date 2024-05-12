import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  // Signup form validation

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [newpassword, setNewpassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/login");
    }
  }, []);

  const collectData = async () => {
    if (!name || !email || !phone || !newpassword || !confirmpassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter valid phone number. Phone Number length must be 10");
      return;
    } else if (phone.length > 10) {
      alert("Phone number length exceed 10");
      return;
    }

    if (newpassword.length > 8) {
      alert("Password length must be 8 characters or less.");
      return;
    }

    if (newpassword !== confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    let result = await fetch("http://localhost:4500/register", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        phone,
        newpassword,
        confirmpassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
    alert("You are signup successfully");
  };

  return (
    <>
      <section className="section section-contact section-signup">
        <div className="overlay"></div>
        <header className="header signup-header">
          <div className="logo">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i>&nbsp; Edusity
            </h2>
          </div>
          <div className="signup-head-data">
            <ul>
              <li>
                <Link className="navlink" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <div className="container">
          <div className="contact-content signup-content grid grid-two-columns">
            <div className="contact-data signup-data">
              <h2 className="main-head">
                <i className="fa-solid fa-user-graduate"></i>&nbsp; Edusity
              </h2>
              <p>
                Edusity, a dynamic online platform, revolutionizes education.
                Offering diverse courses, it fosters interactive learning
                environments, empowering students worldwide.
              </p>
              <p>
                Unlock your potential with Edusity`s personalized learning
                experience. Explore a vast array of subjects, from business to
                technology, and master new skills at your own pace. Join our
                global community of learners and shape your future today.
              </p>
              <p>
                Edusity`s user-friendly interface enhances engagement,
                facilitating seamless access to resources. Through innovative
                teaching methodologies and comprehensive content, it cultivates
                critical thinking and lifelong learning. Join Edusity today to
                embark on a transformative educational journey.
              </p>
              <p>
                With Edusity, education knows no bounds. Accessible anytime,
                anywhere, our platform empowers learners worldwide.
              </p>
            </div>
            <div className="contact-form-part signup-form-part">
              <div className="form">
                <h2>
                  Create Your Account&nbsp; <i className="fa-solid fa-user"></i>
                </h2>
                <div className="line"></div>
                <div>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    className="input-here"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                    type="phone"
                    name="Phone"
                    id="phone"
                    className="input-here"
                    placeholder="Your Valid Phone Number"
                    required
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="New Password"
                    id="password1"
                    className="input-here"
                    placeholder="Create New Password"
                    required
                    autoComplete="off"
                    value={newpassword}
                    onChange={(e) => setNewpassword(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="Confirm New Password"
                    id="password2"
                    className="input-here"
                    placeholder="Confirm Password"
                    required
                    autoComplete="off"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn submit-btn"
                    onClick={collectData}
                  >
                    Signup Now
                  </button>
                </div>
              </div>
            </div>
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

export default SignUp;
