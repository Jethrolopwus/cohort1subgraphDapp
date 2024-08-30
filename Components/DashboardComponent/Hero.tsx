import Image from "next/image";
import bnb from "@/public/assets/bnb1.png";
import trx from "@/public/assets/trx.jpeg";
import usdt from "@/public/assets/bnb.jpeg";

const Hero = () => {
  return (
    <div className="flex justify-evenly">
      <div className=" border-2  shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full">
        <Image src={bnb} alt="bnb" />
        <h2>USDT</h2>
      </div>
      <div className=" border-2  p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full">
        <Image src={usdt} alt="bnb" />
        <h2>BNB</h2>
      </div>
      <div className=" border-2  p-4 shadow-2xl hover:scale-110 transform transition-transform duration-[1s] ease-in-out w-1/3 tablet:w-full">
        <Image src={trx} alt="bnb" />
        <h2>TRX</h2>
      </div>
    </div>
  );
};

export default Hero;
