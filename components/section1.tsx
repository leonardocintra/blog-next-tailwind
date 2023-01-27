import Image from "next/image";
import Link from "next/link";
import Imagem1 from "../public/img/img1.jpg";
import Author from "./_child/author";

export default function Section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trendig</h1>

        {slide()}
      </div>
    </section>
  );
}

function slide(): JSX.Element {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/teste"}>
          <Image src={Imagem1} alt="imagem" width={600} height={600} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"}>
            <span className="text-orange-600 hover:text-orange-700">
              Busines Travel
            </span>
            <span className="text-gray-808">27 de janeiro de 2023</span>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Acesse o site do Like Estampa para comprar camisetas
            </span>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
            alguma coisa precisa ser escrito aqui. Mas saiba que as camisetas são 100% algodão. Outra dica é comprar mais de uma para facilitar o frete. Junte uns amigos e escolham as camisetas que desejam comprar
        </p>
        <Author></Author>
      </div>
    </div>
  );
}
