"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GithubIcon from "../../../public/github.svg";
import FacebookIcon from "../../../public/facebook.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    const response = await fetch(endpoint, option);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Liên hệ với tôi</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Nếu bạn có bất kỳ câu hỏi, ý kiến hoặc đơn giản chỉ muốn kết nối, tôi
          rất vui lòng nhận được tin nhắn từ bạn. Dưới đây là các cách liên hệ
          với tôi. Tôi sẽ rất vui lòng nhận được các tin nhắn và phản hồi từ
          cộng đồng trên trang Facebook hoặc email của tôi. Nếu bạn có đề xuất,
          báo cáo lỗi hoặc muốn tham gia đóng góp vào dự án của chúng tôi, hãy
          truy cập trang GitHub để xem chi tiết và thực hiện các thao tác cần
          thiết.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/SonBeoDeveloper"}>
            <Image className="w-10" src={GithubIcon} alt="Github icon" />
          </Link>
          <Link href={"https://www.facebook.com/hoaison8a1"}>
            <Image className="w-10" src={FacebookIcon} alt="Facebook icon" />
          </Link>
        </div>
      </div>
      <div className="">
        <form action="flex flex-cols" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              required
              placeholder="your-email@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              required
              placeholder="just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <input
              type="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              required
              placeholder="just saying hi"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email gửi thành công</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
