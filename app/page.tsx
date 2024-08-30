import Image from "next/image";
import Loading from "./loading";
import Trx from "../app/Trx/page";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      {/* <Loading/> */}
      <Trx />
    </main>
  );
}
