import Image from "next/image";
import Link from "next/link";
import BLogo from "@/public/assets/Logo2.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-gradient-to-r from-primary-50 via-primary-200 to-primary-300 justify-between items-center relative z-10">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={BLogo} alt="Blockfuse Labs Logo" className="w-24" />
          <h1 className="font-bold text-white text-xl ml-0">BLOCKFUSE LABS</h1>
        </div>
      </Link>
        <div className="mr-8">
          <input type="text" placeholder="Search" className="rounded-md px-2 py-2 w-60" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
