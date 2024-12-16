import Image from "next/image"

export const Logo = () =>{
    return(
        <div className="bg-black">
            <div className="mx-auto w-[95%] 2xl:w-[1450px] flex justify-between py-12">
                <Image
                src={"/logo/Vector.png"}
                alt="vector"
                width={166}
                height={100}
                />
                <Image
                src={"/logo/zara.png"}
                alt="v"
                width={91}
                height={100}
                />
                <Image
                src={"/logo/gucci-logo-1 1.png"}
                alt="vector"
                width={156}
                height={100}
                />
                <Image
                src={"/logo/prada-logo-1 1.png"}
                alt="vector"
                width={194}
                height={100}
                />
                 <Image
                src={"/logo/Group (1).png"}
                alt="vector"
                width={200}
                height={100}
                />


            </div>
        </div>
    )
}