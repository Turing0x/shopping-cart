import "./Resgister.css";

export function Register() {
  return (
    <main>
      <header>Crea tu cuenta en nuestra tienda</header>
      <br />

      <form action="">
        <input id="name" type="text" placeholder="Escribe tu usuario" />
        <input id="pass" type="password" placeholder="Escribe tu contraseña" />

        <button onClick={createAccount}>Crear Cuenta</button>
      </form>

      <br />
      <a href="/">Iniciar Sesión</a>
    </main>
  );
}

function createAccount() {
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;

  const data = {
    username: name,
    password: pass,
  };

  window.localStorage.setItem(data["username"], JSON.stringify(data));

  alert("Usuario creado con éxito");
}
