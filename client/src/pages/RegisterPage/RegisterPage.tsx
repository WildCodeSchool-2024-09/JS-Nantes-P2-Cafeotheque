import "./RegisterPage.css";
import { Link } from "react-router-dom";

import { useState } from "react";

function RegisterPage() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    accepteConditions: false,
  });
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;
    // console.log(name, value, type, checked);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  }

  return (
    <main id="register-container">
      <h1>Inscription</h1>
      <form id="register-form">
        <div className="register-field">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            value={formValues.username}
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="register-field">
          <label htmlFor="email">Email</label>
          <input
            value={formValues.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="register-field">
          <label htmlFor="password">Mot de passe</label>
          <input
            value={formValues.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="register-field">
          <label htmlFor="confirm-password">Confirmation du mot de passe</label>
          <input
            value={formValues.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
        <div className="register-radio">
          <input type="radio" name="newsletter-subscribe" />
          <label htmlFor="newsletter-subscribe">
            Je m'abonne à la Newsletter
          </label>
        </div>
        <div className="register-radio" id="conditions-radio">
          <input
            onChange={handleChange}
            // onClick={handleChange}
            checked={formValues.accepteConditions}
            required
            type="radio"
            name="accepteConditions"
            id="test-id"
          />
          <span className="test" />
          <label htmlFor="condition-usage">
            J’accepte les conditions d’utilisation
          </label>
        </div>
      </form>
      <div id="button-container">
        <Link to="/login">Se connecter</Link>
        <button type="submit" form="myForm">
          S'inscrire
        </button>
      </div>
    </main>
  );
}

export default RegisterPage;
