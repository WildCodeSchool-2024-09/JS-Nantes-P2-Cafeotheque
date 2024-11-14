import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import ErrorDisplay from "../../components/ErrorDisplay";

function LoginPage() {
  const [formError, setFormError] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

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
    type UsersData = { [username: string]: { password: string } };
    const usersData: UsersData = JSON.parse(
      localStorage.getItem("super-secured-database-users") || "{}",
    );

    // set empty data if their is none
    if (!usersData) {
      localStorage.setItem("super-secured-database-users", "{}");
    }

    // Handle connection
    if (usersData[formValues.username] !== undefined) {
      // handle acc existing
      if (usersData[formValues.username].password === formValues.password) {
        // handle connection
        localStorage.setItem("connected-user", `${formValues.username}`);
        setFormError(null);
      } else {
        // handle wrong password
        setFormError("Oups on dirait qu'il y a une erreur quelque part..");
      }
    } else {
      // handle acc not existing
      setFormError("Oups on dirait qu'il y a une erreur quelque part..");
    }
  }

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
