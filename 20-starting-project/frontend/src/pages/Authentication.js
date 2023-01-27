import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const url = new URL(request.url);
  const mode = url.searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, 422);
  }

  const formData = await request.formData();

  const body = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not auth user" }, 500);
  }

  const data = await response.json();
  const token = data.token;
  const currentTime = new Date().getTime();
  const expiration = new Date(currentTime + 1 * 60 * 60 * 1000);

  localStorage.setItem("token", token);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
};
