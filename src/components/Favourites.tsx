import Image from "next/image";
import Link from "next/link";
import React from "react";

function Favourites() {
  return (
    <div className="carousel max-w-[1200px] h-[100px] flex m-auto">
      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2 "
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-see-all.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Lihat Semua</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/new-all-promo_4x.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Semua Promo</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Highlight-utilities.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Tagihan & Isi Ulang</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-see-all.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Chrismas Shop</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget_affiliate.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Komisi 12%</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/4x.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">PayLater</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget_mola.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Film Gratis</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Blibli-BCA.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">BCA Blibli Card</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Layanan-tradein.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Tukar Tambah</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/keuangan-icon-96px.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Keuangan</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/new-all-promo_4x.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Promo Bank</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-official-store.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Official Store</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Layanan-clickandcollect.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Click & Collect</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Belanja-ibuAnak.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Ibu & Anak</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-installment.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Cicilan 0%</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-layanan-2-jam-sampai.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">2 Jam Sampai</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/Widget-Belanja-kecantikan.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Kesehatan & Kecantikan</div>
      </Link>

      <Link
        href={"#"}
        className="carousel-item h-full w-[84px] flex flex-col items-center justify-start mt-3 gap-2"
      >
        <div className="w-[44px] h-[44px] bg-[#E1F1FF] rounded-lg relative">
          <div className="absolute bottom-[-4px] right-[-4px] ">
            <Image
              src={"/widgets/favourites/widget-bliblihome.webp"}
              alt="destination"
              width={40}
              height={40}
              className="h-full object-contain"
            />
          </div>
        </div>
        <div className="text-[12px] h-max w-full">Blibli Home</div>
      </Link>
    </div>
  );
}

export default Favourites;
