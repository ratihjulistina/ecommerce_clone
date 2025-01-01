import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full border-b-[1px] border-[#c8cbcd] text-[14px]">
      <div className="max-w-[1200px] h-[22px]  flex justify-between items-center">
        <div className="flex items-center justify-between gap-5 px-[8px]">
          <Link
            href={"#"}
            className="flex items-center gap-1 px-2 hover:text-[#0072ff] hover:bg-[#cadbf0] hover:rounded-full"
          >
            <div>
              <Image
                src={"download-icon.svg"}
                alt="download-icon"
                height={15}
                width={15}
                className="object-center"
              />
            </div>
            <div>Download Aplikasi Blibli</div>
          </Link>
          <Link
            href={"#"}
            className="flex items-center gap-1 px-2 hover:text-[#0072ff] hover:bg-[#cadbf0] hover:rounded-full"
          >
            <div>
              <Image
                src={"bantuan-icon.svg"}
                alt="bantuan-icon"
                height={15}
                width={15}
                className="object-center"
              />
            </div>
            <div>Bantuan 24/7</div>
          </Link>
        </div>
        <div className="flex justify-end gap-5 px-[8px]">
          <Link
            href={"#"}
            className="px-2 hover:text-[#0072ff] hover:bg-[#cadbf0] hover:rounded-full"
          >
            Jual di Blibli
          </Link>
          <Link
            href={"#"}
            className="px-2 hover:text-[#0072ff] hover:bg-[#cadbf0] hover:rounded-full"
          >
            Blibli Tiket Rewards
          </Link>
          <Link
            href={"#"}
            className="px-2 hover:text-[#0072ff] hover:bg-[#cadbf0] hover:rounded-full"
          >
            Cek daftar pesanan
          </Link>
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-between mt-[12px] fixed z-10 bg-white ">
        <div className="flex flex-col items-start">
          <div className="h-1/2">
            <Link href={"#"}>
              <Image src={"logo.svg"} alt="logo" width={114} height={40} />
            </Link>
          </div>
          <button className="flex items-center h-1/2 gap-2 bg-[#f1f2f2] px-2 rounded-lg mt-1">
            <div>
              <Image
                src={"path-icon.svg"}
                alt="path-icon"
                height={15}
                width={15}
                className="object-center"
              />
            </div>
            <div>Kategori</div>
          </button>
        </div>
        <div className="flex flex-col justify-center w-[65%] h-[80px] ">
          <div className="flex justify-between items-center h-1/2  border-[#c8cbcd] border-y-[1px] border-x-[1px] rounded-[8px] p-[8px]">
            <button className="px-2 h-[26px] border-r-[1px] border-[#e1e3e4] flex items-center gap-2">
              <div className="text-[rgba(25,34,42,.7)] ">Semua kategori</div>
              <div className=" pt-1">
                <Image
                  src={"arrow-icon.svg"}
                  alt="arrow-icon"
                  height={18}
                  width={18}
                  className="object-center"
                />
              </div>
            </button>
            <div className="w-[70%] text-left form-control">
              <input type="text" placeholder="Search" />
            </div>
            <button className="px-2 h-[36px] w-[36px] bg-[#0072ff]  rounded-full flex items-center">
              <Image
                src={"search-icon.svg"}
                alt="search-icon"
                width={20}
                height={20}
                className="object-center"
              />
            </button>
          </div>
          <div className="flex justify-between items-center my-auto mx-5">
            <Link
              href={"#"}
              className=" pr-2 border-r-[1.5px] border-[#c8cbcd] hover:text-[#0072ff]"
            >
              Huawei SALE 45% Off*
            </Link>
            <Link
              href={"#"}
              className=" pr-2 border-r-[1.5px] border-[#c8cbcd] hover:text-[#0072ff]"
            >
              {" "}
              My Aksa Batik x Dr Tirta{" "}
            </Link>
            <Link
              href={"#"}
              className=" pr-2 border-r-[1.5px] border-[#c8cbcd] hover:text-[#0072ff]"
            >
              {" "}
              Elektronik Expo Cashback 500rb{" "}
            </Link>
            <Link href={"#"} className="hover:text-[#0072ff]">
              Vone x Blibli CNY Collection
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center h-1/2">
            <button className="">
              <Image
                src={"cart-icon.svg"}
                alt="cart-icon"
                width={24}
                height={24}
              />
            </button>
            <div className=" h-[60%] w-[1px] bg-[#c8cbcd]"></div>
            <div className="flex gap-5 h-[80%]">
              <Link
                href={"/login"}
                className=" pb-1 w-[87px] border-[#0072ff] border-x-[0.2rem] border-y-[0.2rem] rounded-[16px] text-[#0072ff]"
              >
                Masuk
              </Link>
              <Link
                href={"/register"}
                className="w-[87px] bg-[#0072ff] rounded-[16px] text-white"
              >
                Daftar
              </Link>
            </div>
          </div>
          <button className="h-1/2 flex items-center gap-1 bg-[#f1f2f2] px-2 rounded-lg mt-1">
            <div>
              <Image
                src={"location-icon.svg"}
                alt="location-icon"
                height={15}
                width={15}
                className="object-center"
              />
            </div>
            <span className="font-semibold">Tambah alamat</span>
            <span> biar belanja lebih asyik</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
