import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo1.jpeg";

const Navbar = () => {
  return (
    <div>
      <div className="flex border-2 bg-red-700 justify-between items-center">
      <div>
        Token
      </div>
      <div className=" mr-8">
        <input type="text" placeholder="Search" className="" />
      </div>
      </div>
       
    </div>
  
      
      
  );
};

export default Navbar;
