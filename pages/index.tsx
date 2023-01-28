import { Inter } from "@next/font/google";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import LayoutFormat from "../layout/format";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <LayoutFormat>
      <Section1></Section1>
      <Section2></Section2>
    </LayoutFormat>
  );
}
