import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div align="center">
          <button class="button button1" onClick={() => loginWithRedirect()}>Registro / Login</button>
        </div>
};