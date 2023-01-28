import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

interface LayoutFormatProps {
  children: string | JSX.Element | JSX.Element[];
}

export default function LayoutFormat({ children }: LayoutFormatProps) {
  return (
    <>
      <Head>
        <title>Blog Leonardo</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
