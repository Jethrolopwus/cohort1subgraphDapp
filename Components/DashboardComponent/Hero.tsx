import Image from "next/image";
import Link from "next/link";
import bnb from "@/public/assets/bnb1.png";
import trx from "@/public/assets/trx.png";
import usdt from "@/public/assets/bnb.png";

const Hero = () => {
  return (
    <div className="flex mt-8 justify-evenly">
      <Link href="/usdt" className=" border-2 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center py-5 space-y-6" >
          <Image src={bnb} alt="bnb" className="object-contain w-72" />
          <h2 className="text-xl font-semibold text-primary-200">USDT</h2>
        </div>
      </Link>
      <Link href="/bnb" className="flex flex-col justify-center items-center border-2  p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center space-y-6">
          <Image src={usdt} alt="bnb" className="object-contain w-72" />
          <h2 className="text-xl font-semibold text-primary-200">BNB</h2>
        </div>
      </Link>
      <Link href="/trx" className="flex flex-col justify-center items-center border-2p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full cursor-pointer">
        <div className="flex flex-col justify-center items-center space-y-6">
          <Image src={trx} alt="bnb" className="object-contain w-80" />
          <h2 className="text-xl font-semibold text-primary-200">TRX</h2>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
