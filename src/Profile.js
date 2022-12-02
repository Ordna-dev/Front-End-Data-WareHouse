import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';
import axios from 'axios';

export var isAdmin = false;

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ data, setData ] = useState({});

  /*
  useEffect(() => {
    fetch(`https://dev-8t3jo8f5sl3mvcwq.us.auth0.com/api/v2/users/1/roles`)
    .then((response) => response.json())
    .then((actualData) => console.log(actualData));
  }, []);
  
  */
  /*

  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://dev-8t3jo8f5sl3mvcwq.us.auth0.com/api/v2/users/1/roles',
    headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InY0Z0VLeUxzZU1QMWYzendOamxyTiJ9.eyJpc3MiOiJodHRwczovL2Rldi04dDNqbzhmNXNsM212Y3dxLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI2WXpVS3N3Mzd0Z2xMblNiMFpha3hVRHpJQlpNMkN5ZkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtOHQzam84ZjVzbDNtdmN3cS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY2OTc2ODQ5MywiZXhwIjoxNjY5ODU0ODkzLCJhenAiOiI2WXpVS3N3Mzd0Z2xMblNiMFpha3hVRHpJQlpNMkN5ZiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.VbJx3CDCXRILEikSebDDwHHEnRmLsyHrL00DtnSiFcHhmkpD1K89WqE7IfTQe8be6t8Lk30SwRKC_PSCU-lNTHxwYBrAIrvOCgEC8bArAX6lDAcew6Ago0n6bo1RTngRLXymJGzaCBRe-QLxehvWSMkX112T7Cvf9mH94vwmCFaVZjLoPnU_PGmPfdY-cNsMCtzSUXyLDIbqyrobcbFZdVimKEq8nMtLrDL79mjjdfNO3C4hq82CuB29aWN0oEjmdVDbPB4_mzvDAFX9yAutSQlic-eXJZN9bUETpwYlnWzBGZClAKuo0b2PiwTPzWEQDB9gEQWbyMhGWsAriAcrQg'}
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);*/

  var rol = "t"
  var role = "Gerente"

  const setUserRole = () => {
    rol = user.sub;
  };

  var options = {
    method: 'GET',
    url: 'https://dev-8t3jo8f5sl3mvcwq.us.auth0.com/api/v2/users/'+ user.sub +'/roles',
    headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InY0Z0VLeUxzZU1QMWYzendOamxyTiJ9.eyJpc3MiOiJodHRwczovL2Rldi04dDNqbzhmNXNsM212Y3dxLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJad3pmS2FhWE5OdWxqNXpvZlNFcWUzWVNUaWVUbXBidkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtOHQzam84ZjVzbDNtdmN3cS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY2OTc3MTIwNywiZXhwIjoxNjcyMzYzMjA2LCJhenAiOiJad3pmS2FhWE5OdWxqNXpvZlNFcWUzWVNUaWVUbXBidiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.r5mBjN-VhCMSFTMBv23opTvAZd8-F2K7hHQZuLcndd_lfck_4Hu58BcuM_FlwLR9ZlNkt6ZUB3fO3zdPi4yuKDp9mYP_cNq1BYVz-KTX6xsW5Jn3WbDHVb5geXCFkGvOeROMT7FaAfD59z5tvJ7gY08xyBDzXr4UFanA-HludhlyvT6g05rMfPWzZ0k9Nj92U_94WhC0EUHXoRex7XysAqqiY3r7nrB6TxeZftk2Ac4xW5US3ZvLWo0Gv1jT-Mk0Op0PMcPybQvmK3cFCnJ8x6kTOm-OSu0VqPjJdk-Rt6m8MIWQeYCLOgqN-UJalzEMre4zyBSR3WIjKpolLdTDAA'}
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const showUserRole = () => {
    if(Object.keys(data).length === 0){
      isAdmin = false;
      role = "Gerente";
    } else {
      if(data[0].name == 'Administrador'){
        role = data[0].name;
        isAdmin = true;
      } else {
        role = data[0].name;
        isAdmin = false;
      }
      
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //Rol: {data[0].name}
  return (
    isAuthenticated && (
      <div align="center">
        {setUserRole()}
        <img src={user.picture} />
        <h2>Usuario: {user.name}</h2>
        {showUserRole()}
        <h2>Rol: {role}</h2>
      </div>
    )
  );
};