import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function Header() {
  return (
    <div className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input
            className="input-text"
            type="text"
            name=""
            id=""
            placeholder="Procurar ..."
          />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"} className="font-bold uppercase text-3xl">
            Design
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <ImFacebook color="#888888"></ImFacebook>
            </Link>

            <Link href={"/"}>
              <ImTwitter color="#888888"></ImTwitter>
            </Link>

            <Link href={"/"}>
              <ImYoutube color="#888888"></ImYoutube>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
