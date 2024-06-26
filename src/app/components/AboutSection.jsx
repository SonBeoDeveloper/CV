"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.JS</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Javascript</li>
        <li>React</li>
        <li>React-Native</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Trường đại học Công nghệ giao thông vận tải</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/about-me.png"} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Thông tin về tôi
          </h2>
          <p className="text-base lg:text-lg">
            Tôi là một lập trình viên web full stack với đam mê tạo ra các ứng
            dụng web tương tác và phản hồi. Tôi có kinh nghiệm làm việc với
            JavaScript, NodeJS, React, React Native, Redux, MongoDB, Express,
            mySql, HTML, CSS và Git. Tôi là người học nhanh và luôn tìm cách mở
            rộng kiến thức và kỹ năng của mình.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Kỹ năng
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Học vấn
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
