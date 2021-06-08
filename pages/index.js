import Head from "next/head";
import Image from "next/image";
import Bottom from "../components/main/Bottom";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import Live from "../components/main/Live";
import Nav from "../components/main/Nav";
import Topsellers from "../components/main/Topsellers";

export default function Home() {
  return (
    <div>
    <Nav />
      <Header />
      <Live />
      <Topsellers />
      <Bottom />
      <Footer />
    </div>
  );
}
