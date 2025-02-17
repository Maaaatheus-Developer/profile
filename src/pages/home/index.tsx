import { Social } from "../../components/Social/index";

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3x1 font-bold text-white mt-20">
        Matheus Minetto
      </h1>
      S<span className="text-gray-50 mb-5 mt-3">Veja meus links</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">Canal do Youtub</p>
          </a>
        </section>


    




        <footer className="flex justify-center gap-3 my-4">
          <Social url="https://www.youtube.com/">
            <FaFacebook size={35} color="#FFF" />
          </Social>

          <Social url="https://www.youtube.com/">
            <FaInstagram size={35} color="#FFF" />
          </Social>

          <Social url="https://www.youtube.com/">
            <FaGithub size={35} color="#FFF" />
          </Social>



           
        </footer>
      </main>
    </div>
  );
}
