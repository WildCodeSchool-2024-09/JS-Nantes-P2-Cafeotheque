import { useState } from "react";
import "./LoginPage.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import ErrorDisplay from "../../components/ErrorDisplay";
import type { UserData } from "../../types/userData";
import { useAuth } from "../../utils/context/AuthContext";

function LoginPage() {
  const location = useLocation();
  const [formError, setFormError] = useState<string | null>(() => {
    if (location.state) return location.state.message;
    return null;
  });
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const { loggedIn, toggleLogin, setUserData } = useAuth();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // retreive users data from localstorager
    const usersDataString = localStorage.getItem(
      "super-secured-database-users",
    );

    // Handle empty localstorage
    if (!usersDataString) {
      return setFormError("Oups on dirait qu'il y a une erreur quelque part..");
    }

    const usersDataJSON: UserData[] = JSON.parse(usersDataString);
    const userData: UserData = usersDataJSON.filter(
      (userdata) => userdata.username === formValues.username,
    )[0];

    if (userData) {
      // Handle username found
      if (userData.password === formValues.password) {
        // Handle connection
        setUserData(userData);
        setFormError(null);
        toggleLogin(formValues.username);
        localStorage.setItem("connected-user", formValues.username);
      } else {
        setFormError("Oups on dirait qu'il y a une erreur quelque part..");
        // Handle wrong password
      }
    } else {
      // Handle username not found
      setFormError("Oups on dirait qu'il y a une erreur quelque part..");
    }
  }

  if (loggedIn) return <Navigate to="/profile" />;
  return (
    <main id="login-container">
      <h2>Connexion</h2>
      <form id="login-form">
        <div className="login-field">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            autoComplete="username"
            value={formValues.username}
            onChange={handleChange}
            name="username"
            id="username"
          />
        </div>
        <div className="login-field">
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
      </form>
      {formError && <ErrorDisplay message={formError} />}
      <div id="button-login-container">
        <Link to="/register">S'inscrire</Link>
        <button onClick={handleSubmit} type="submit" form="login-form">
          Se connecter
        </button>
      </div>
    </main>
  );
}

export default LoginPage;
