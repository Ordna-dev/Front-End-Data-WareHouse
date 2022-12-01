import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button class="button button2" style={{float: "right"}} onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </button>
  );
};