import React from "react";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Connexion</h2>
      <form>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Mot de passe" /><br /><br />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
