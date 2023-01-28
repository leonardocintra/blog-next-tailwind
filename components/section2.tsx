import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">
        Ultimas postagens
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">{post()}</div>
    </section>
  );
}

function post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image src={""} alt="Imagem x" width={500} height={350} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <span className="text-orange-600 hover:text-orange-800"></span>
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
          alguma coisa precisa ser escrito aqui. Mas saiba que as camisetas são
          100% algodão. Outra dica é comprar mais de uma para facilitar o frete.
          Junte uns amigos e escolham as camisetas que desejam comprar
        </p>

        PAREI EM https://www.youtube.com/watch?v=1T3GF6endl8 58:31
      </div>
    </div>
  );
}
