import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface FormValueInterface {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedConditions: boolean;
  subscribe: boolean;
}

function RegisterPage() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptedConditions: false,
    subscribe: false,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, type } = event.target;
    if (type === "checkbox") {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: !prevValues[name as keyof typeof formValues],
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: event.target.value,
      }));
    }
  }

  // Function parsing data
  function dataValidation(data: FormValueInterface): boolean {
    // console.log(data);
    if (
      data.username.length === 0 ||
      data.email.length === 0 ||
      data.password.length === 0 ||
      data.confirmPassword.length === 0
    ) {
      // handle 1 input not long enough
      return false;
    }
    if (!data.acceptedConditions) {
      // handle conditions not accepted
      return false;
    }
    if (data.password !== data.confirmPassword) {
      // handle password !== confirm password
      return false;
    }
    return true;
  }

  function handleSubmit() {
    let usersData = localStorage.getItem("super-secured-database-users");
    if (!usersData) {
      localStorage.setItem("super-secured-database-users", "{}");
      usersData = "{}";
    }
    if (dataValidation(formValues)) {
      const newUsers = JSON.parse(usersData);
      if (newUsers[formValues.username]) {
        // handle existing user
      } else {
        // handle create user
        const newUser = {
          username: formValues.username,
          password: formValues.password,
          email: formValues.email,
        };
        newUsers[formValues.username] = newUser;
        localStorage.setItem(
          "super-secured-database-users",
          JSON.stringify(newUsers),
        );
      }
    }
  }

  return (
    <main id="register-container">
      <h2>Inscription</h2>
      <form id="register-form">
        <div className="register-field">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            autoComplete="username"
            value={formValues.username}
            onChange={handleChange}
            name="username"
            id="username"
          />
        </div>
        <div className="register-field">
          <label htmlFor="email">Email</label>
          <input
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            name="email"
            id="email"
          />
        </div>
        <div className="register-field">
          <label htmlFor="password">Mot de passe</label>
          <input
            autoComplete="new-password"
            value={formValues.password}
            onChange={handleChange}
            name="password"
            id="password"
          />
        </div>
        <div className="register-field">
          <label htmlFor="confirm-password">Confirmation du mot de passe</label>
          <input
            autoComplete="new-password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            id="confirm-password"
          />
        </div>
        <div className="register-checkbox">
          <input
            id="newsletter-subscribe"
            type="checkbox"
            name="subscribe"
            onChange={handleChange}
            checked={formValues.subscribe}
          />
          <label htmlFor="newsletter-subscribe">
            Je m'abonne à la Newsletter
          </label>
        </div>
        <div className="register-checkbox" id="conditions-checkbox">
          <input
            type="checkbox"
            name="acceptedConditions"
            onChange={handleChange}
            checked={formValues.acceptedConditions}
            required
            id="condition-usage"
          />
          <label htmlFor="condition-usage">
            J’accepte les conditions d’utilisation
          </label>
        </div>
      </form>
      <div id="button-container">
        <Link to="/login">Se connecter</Link>
        <button onClick={handleSubmit} type="submit" form="myForm">
          S'inscrire
        </button>
      </div>
    </main>
  );
}

export default RegisterPage;
