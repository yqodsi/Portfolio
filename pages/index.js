import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import itachi from "../public/itachi.png";
import SP from "../components/spline/index";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
