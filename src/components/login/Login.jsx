import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
import Seo from "../seo/Seo";
import "./login.css";

export default function Login() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = searchParams.get("redirect");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        await register(email, password);
        toast.success("Cuenta creada con éxito");
        navigate("/" + redirect || "/");
      } else {
        await login(email, password);
        toast.success("Inicio de sesión exitoso");
        if (redirect) {
          navigate(`/${redirect}`);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="login-section">
      <Seo title={isRegister ? "Registrarse" : "Iniciar sesión"} />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">
          {isRegister ? "Registrarse" : "Iniciar sesión"}
        </h2>

        <div className="login-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="login-field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="button-square"
          aria-label={isRegister ? "Crear cuenta" : "Iniciar sesión"}
        >
          {isRegister ? "Crear cuenta" : "Entrar"}
        </button>

        <p className="login-toggle">
          {isRegister ? "¿Ya tenés cuenta?" : "¿No tenés cuenta?"}{" "}
          <button
            type="button"
            className="button-ghost"
            onClick={() => setIsRegister(!isRegister)}
            aria-label={isRegister ? "Ir a iniciar sesión" : "Ir a registrarse"}
          >
            {isRegister ? "Iniciar sesión" : "Registrarse"}
          </button>
        </p>
      </form>
    </section>
  );
}
