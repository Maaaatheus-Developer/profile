import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input/index";
import { FormEvent, useState } from "react";
import { auth } from "../../services/firebaseConnetion";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Logado com sucesso ");
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao fazer login");
        console.log(error);
      });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Matheus
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            {" "}
            Minetto
          </span>
        </h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
      >
        <Input
          type="email"
          value={email}
          placeholder="Digite o seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          value={password}
          placeholder="**********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
