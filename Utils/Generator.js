import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
const authHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});
const autHtoken = () => {
  SecureStore.getItemAsync("Token").then((data) => {
    authHeader(data);
  });
};
useEffect(() => {
  autHtoken();
}, []);
export { authHeader };
