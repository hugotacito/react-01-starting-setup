import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const expirationISO = localStorage.getItem("expiration");
  const expiration = new Date(expirationISO);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const duration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (duration < 0) {
    return "EXPIRED";
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return {};
};
