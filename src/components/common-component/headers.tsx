import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { ShoppingCart,CircleUserRound,Search  } from "lucide-react";
import Image from "next/image";
export const Header = () => {
  return (
    <div className=" bg-black ">
      <div className="flex items-center justify-center  text-white h-[38px] mx-auto w-[95%] 2xl:w-[1450px] relative ">
        <div className="flex justify-center gap-1">
          <h1>Sign up and get 20% off to your first order.</h1>
          <Link href={"/"}>Sign Up Now</Link>
        </div>
        <p className="absolute right-0">
          <RxCross2 size={24} />
        </p>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <div>
      <div className="flex items-center gap-6 justify-between  mx-auto w-[95%] 2xl:w-[1450px] ">
        <div className=" text-black text-[32px] font-bold my-5">SHOP.CO</div>

        <ul className="flex  gap-4  my-5">
          <li className="flex items-center ">
            Shop
            <GoChevronDown />{" "}
          </li>
          <li> On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        <div className="flex bg-[#F0F0F0] rounded-full h-[48px] w-[40%] text-gray-400 items-center px-3 gap-2">
          <Search />
          <input
            className="text-black bg-[#F0F0F0] 
        h-[41px]     outline-none"
            type="text"
            id="search"
            name="searh"
            placeholder="Search for Products"
          />
        
        </div>
        <div className="flex gap-2 justify-between">
        <ShoppingCart />
        <CircleUserRound/>

        </div>

      </div>
    </div>
  );
};
