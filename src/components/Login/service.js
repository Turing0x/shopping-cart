import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const login = () => {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;

    const data = window.localStorage.getItem(name);
    if (!data) alert("No existe una cuenta con ese nombre de usuario");

    const jsonData = JSON.parse(data);
    if (jsonData["password"] === pass) {
      navigate("/cart");
    }
  };

  return login;
}
