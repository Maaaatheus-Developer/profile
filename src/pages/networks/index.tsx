import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../../services/firebaseConnetion";
import { setDoc, doc, getDoc } from "firebase/firestore";

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstragram] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data()?.facebook);
          setInstragram(snapshot.data()?.instagram);
          setGithub(snapshot.data()?.github);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      github: github,
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
        alert('Link cadastrado com sucesso')
      })
      .catch((error) => {
        console.log("Erro ao salvar" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2xl font-medium mt-8 mb-4">
        Minhas redes socias
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-3">
          Link do WhatsApp
        </label>
        <Input
          placeholder="Digite a url do Facebook..."
          type="url"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-3">
          Link do Instagram
        </label>
        <Input
          placeholder="Digite a url do Instagram..."
          type="url"
          value={instagram}
          onChange={(e) => setInstragram(e.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-3">
          Link do Github
        </label>
        <Input
          placeholder="Digite a url do Github..."
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}
