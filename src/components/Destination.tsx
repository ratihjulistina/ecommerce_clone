import Image from "next/image";
import Link from "next/link";
import React from "react";

function Destination() {
  return (
    <div className="max-w-[1200px] flex items-center justify-center my-5 h-[100px]">
      <Link href={"#"} className="h-full">
        <Image
          src={"/widgets/destination/bliblimart.webp"}
          alt="destination"
          width={400}
          height={200}
          className="h-full object-contain"
        />
      </Link>
      <Link href={"#"} className="h-full">
        <Image
          src={"/widgets/destination/Elektronik.webp"}
          alt="elektronik"
          width={400}
          height={200}
          className="h-full object-contain"
        />
      </Link>
      <Link href={"#"} className="h-full">
        <Image
          src={"/widgets/destination/Fashion.webp"}
          alt="fashion"
          width={400}
          height={200}
          className="h-full object-contain"
        />
      </Link>
      <Link href={"#"} className="h-full">
        <Image
          src={"/widgets/destination/Travel.webp"}
          alt="travel"
          width={400}
          height={200}
          className="h-full object-contain"
        />
      </Link>
    </div>
  );
}

export default Destination;
