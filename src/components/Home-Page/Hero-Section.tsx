import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="bg-slate-100">
      <div className="flex text-black justify-center gap-1 mx-auto w-[95%] 2xl:w-[1450px] pt-5">
        <div className="w-[50%]">
          <h1 className="text-[64px] font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white w-[210px] h-[52px] rounded-full ">
            Shop Now
          </button>
        </div>
        <div className="flex relative">
          <Image src={"/hero.png"} alt="hero" width={500} height={500} />
          <Image src={"/hero-section/Vector (1).png"} alt="vector" width={100} height={100} className="w-[104px] h-[104px] absolute right-0"/>
          <Image src={"/hero-section/Vector (1).png"} alt="vector" width={100} height={100} className="w-[56px] h-[56px] absolute top-[203px] left-[5px]"/>
        </div>
      </div>
    </div>
  );
};
