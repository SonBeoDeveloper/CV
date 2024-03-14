"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Xin chào, tôi là
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Son",
                1000,
                "Javascipt Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Mục tiêu của tôi là trở thành một JavaScript developer giỏi. Sau này
            khi học hỏi từ vị trí của mình, tôi sẽ chuyển sang Project
            Management, tôi sẽ tiếp tục xây dựng trên kiến thức và kinh nghiệm
            của mình trong lĩnh vực công nghệ thông tin để áp dụng vào vai trò
            mới.
          </p>
          <div>
            <Link
              href={"/#contact"}
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Tuyển tôi
            </Link>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 border border-white">
              <a href="/CV.pdf" download="CV.pdf">
                Tải CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/hero.png"}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
