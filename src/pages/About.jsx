import React from "react";
import { FaJava, FaNode, FaGitAlt, FaSlack, FaGithub } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiMongodb, SiIntellijidea, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

function About() {
  return (
    <>
      <main className="text-white">
      <section className="section-1 h-screen px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-8">
  <div className="left w-full md:w-[60%] px-6 text-xl flex flex-col gap-6">
    <h1 className="text-3xl sm:text-4xl font-semibold text-center">
      Know Who <span className="text-purple-500">I'm</span>
    </h1>

    <h2 className="text-lg sm:text-xl">
      Hi Everyone, I am{" "}
      <span className="text-purple-500 font-semibold">Chirag Tank</span> from Gujarat, India. I am currently pursuing{" "}
      <span className="text-purple-500 font-semibold">
        Full Stack Web Development
      </span>{" "}
      on <span className="text-green-400">Geekster</span>. I have completed{" "}
      <span className="text-purple-500 font-semibold">B.Pharm</span>{" "}
      from A-One Pharmacy College in 2021.
    </h2>

    <h2 className="text-lg sm:text-xl">
      <span className="text-purple-500">Apart</span> from coding, some
      other <span className="text-purple-500">activities</span> that I
      love to do!
    </h2>
    <ul className="px-8 text-lg">
      <li className="list-['🔍'] px-2">Playing Football</li>
      <li className="list-['🔍'] px-2">Reading Books</li>
      <li className="list-['🔍'] px-2">Exploring New Places</li>
    </ul>

    <p className="italic text-center text-xl mt-4 text-purple-400 font-medium">
      "When I commit, I conquer." <br />– C.S.Tank
    </p>
  </div>

  <div className="right w-full md:w-[30%]">
    <img
      src="/logo.webp"
      alt="About Chirag Tank"
      className="w-full object-contain bg-white rounded-2xl"
    />
  </div>
</section>

{/* Section 2 - Skills */}
<section className="section-2 py-12 flex flex-col gap-12 items-center">
  <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center">
    Professional <span className="text-purple-500">Skillset</span>
  </h2>
  <div className="skills px-8 flex flex-wrap justify-center items-center gap-8 text-4xl sm:text-5xl md:text-6xl">
    {[FaJava, RiJavascriptFill, FaHtml5, FaCss3Alt, RiTailwindCssFill, RiReactjsLine, FaNode, SiMongodb, FaGitAlt].map((Icon, i) => (
      <div
        key={i}
        className="skill w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] md:w-[180px] md:h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200"
      >
        <Icon className="text-purple-500" />
      </div>
    ))}
  </div>
</section>

{/* Section 3 - Tools */}
<section className="section-3 py-12 flex flex-col gap-12 items-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
    <span className="text-purple-500">Tools</span> I Use the Most
  </h2>
  <div className="tools px-8 flex flex-wrap justify-center items-center gap-8 text-4xl sm:text-5xl md:text-6xl">
    {[VscVscode, SiIntellijidea, SiPostman, IoLogoVercel, FaSlack, FaGithub].map((Icon, i) => (
      <div
        key={i}
        className="tool w-[120px] h-[80px] sm:w-[150px] sm:h-[100px] md:w-[180px] md:h-[120px] rounded-md border-2 border-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-center items-center hover:scale-110 transition-all duration-200"
      >
        <Icon className="text-purple-500" />
      </div>
    ))}
  </div>
</section>

{/* Section 4 - GitHub */}
<section className="section-4 p-6 md:p-12">
  <div className="flex flex-col gap-8">
    <h1 className="text-2xl sm:text-3xl text-center font-semibold">
      Ongoing{" "}
      <span className="text-green-500">GitHub Contributions</span>
    </h1>
    <img
      src="/github.png"
      alt="GitHub Contribution Graph"
      className="w-full object-contain"
    />
  </div>
</section>
      </main>
    </>
  );
}

export default About;
