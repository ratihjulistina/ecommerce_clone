import Image from "next/image";
import React from "react";

function Carousel() {
  return (
    <div className="mt-[100px] carousel bg-[#D7E2E7] carousel-center max-w-screen flex m-auto h-[304px]">
      <div id="slide1" className="carousel-item relative py-3">
        <Image
          src="/carousel/carousel1.webp"
          alt="Carousel"
          width={1000}
          height={290}
          className="rounded-xl object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative py-3 ">
        <Image
          src="/carousel/carousel2.webp"
          alt="Carousel"
          width={1000}
          height={290}
          className="object-contain rounded-xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative py-3">
        <Image
          src="/carousel/carousel3.webp"
          alt="Carousel"
          width={1000}
          height={290}
          className="rounded-xl object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative py-3">
        <Image
          src="/carousel/carousel4.webp"
          alt="Carousel"
          width={1000}
          height={290}
          className="rounded-xl object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative py-3">
        <Image
          src="/carousel/carousel5.webp"
          alt="Carousel"
          width={1000}
          height={290}
          className="rounded-xl object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
