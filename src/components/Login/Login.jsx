import "./Login.css";
import { useLogin } from "./service";

export function Login() {
  const login = useLogin();
  return (
    <main>
      <header>Inicia sesion en nuestra tienda</header>
      <br />

      <form action="">
        <input id="name" type="text" placeholder="Escribe tu usuario" />
        <input id="pass" type="password" placeholder="Escribe tu contraseña" />

        <button onClick={login}>Iniciar Sesión</button>
      </form>

      <br />
      <a href="/register">Crear Cuenta</a>
    </main>
  );
}
