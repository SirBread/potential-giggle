import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { UserButton } from "@clerk/nextjs";
import { Knappar } from "~/components/Knappar";

const Home: NextPage = () => {

  return (
    <>
    <header className="sticky flex justify-center top-0 z-10 border-b-2 border-b-fuchsia-600 bg-white mb-8">
      <h1 className="mb-2 px-4 text-lg">Dina Stats</h1>

    </header>
    <div className="flex justify-center">
      <Knappar />
    </div>
    </>
  )

};

export default Home;