import "./RegisterPage.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import ErrorDisplay from "../../components/ErrorDisplay";
import type { UserData } from "../../types/userData";
import { useAuth } from "../../utils/context/AuthContext";

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
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const { loggedIn } = useAuth();

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
  function dataValidation(data: FormValueInterface): boolean | undefined {
    if (
      data.username.length === 0 ||
      data.email.length === 0 ||
      data.password.length === 0 ||
      data.confirmPassword.length === 0
    ) {
      // handle 1 field not long enough
      setErrorMessage("Un champ est manquant");
      return false;
    }
    if (!data.acceptedConditions) {
      // handle conditions not accepted
      setErrorMessage("Veuillez accepter les conditions d'utilisation");
      return false;
    }
    if (data.password !== data.confirmPassword) {
      // handle password !== confirm password
      setErrorMessage("Les deux mot de passe ne sont pas identiques");
      return false;
    }
    if (
      (data.username.length ||
        data.email.length ||
        data.password.length ||
        data.confirmPassword.length) &&
      data.acceptedConditions &&
      data.password === data.confirmPassword
    ) {
      setErrorMessage(null);
      return true;
    }
  }

  function doUserExist(arr: UserData[], username: string) {
    return arr.filter((acc) => acc.username === username).length;
  }

  function handleSubmit() {
    let usersData = localStorage.getItem("super-secured-database-users");
    if (!usersData) {
      localStorage.setItem("super-secured-database-users", "[]");
      usersData = "[]";
    }
    if (dataValidation(formValues)) {
      const usersDataJSON = JSON.parse(usersData);
      if (doUserExist(usersDataJSON, formValues.username)) {
        // handle existing user
        setErrorMessage(
          "Oups.. Il semblerait que ce nom d'utilisateur soit déjà pris !",
        );
      } else {
        // handle create user
        const newUser = {
          username: formValues.username,
          password: formValues.password,
          email: formValues.email,
          likedCoffees: [],
        };
        usersDataJSON.push(newUser);
        const newUsers = JSON.stringify(usersDataJSON);
        localStorage.setItem("super-secured-database-users", newUsers);
      }
    }
  }

  if (loggedIn) return <Navigate to="/profile" />;
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
            type="email"
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
            type="password"
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
            type="password"
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
      {errorMessage && <ErrorDisplay message={errorMessage} />}
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
