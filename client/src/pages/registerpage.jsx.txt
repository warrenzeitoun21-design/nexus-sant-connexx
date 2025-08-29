import React from "react";

export default function RegisterPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Inscription</h2>
      <form>
        <input type="text" placeholder="Nom complet" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Mot de passe" /><br /><br />
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
}
