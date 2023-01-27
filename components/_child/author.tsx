import Image from "next/image";
import Link from "next/link";
import Author1 from "../../public/img/author/author1.jpg";

export default function Author() {


  return (
    <div className="author flex py-5">
      <Image
        src={Author1}
        alt="Author 1"
        width={60}
        height={60}
        className="rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <h4 className="text-md font-bold text-gray-800 hover:text-gray-600">
            Ronaldo Nazario de Lima
          </h4>
          <span className="text-sm text-gray-500">Dono da poha toda</span>
        </Link>
      </div>
    </div>
  );
}
