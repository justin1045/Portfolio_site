import React from "react";
import styles from "./home.module.css";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <main className="min-h-screen">
      {/* Section 1: Intro */}
      <section className="section-1 h-[600px] sm:h-[700px] flex flex-col sm:flex-row justify-center items-center fade-in">
        <section className="left w-full sm:w-1/2 text-white p-6 sm:p-12">
          <h1 className="text-3xl text-semibold">
            Hi There, <span className={styles.wave}>👋</span>
          </h1>
          <h2 className="text-[3rem] sm:text-4xl md:text-5xl text-cyan-400">
            I am{" "}
          </h2>

          <div className={styles["wave-container"]}>
            <h1 className={styles["wave-text"]}>
              <span>C</span>
              <span>H</span>
              <span>I</span>
              <span>R</span>
              <span>A</span>
              <span>G</span>
            </h1>
          </div>

          {/* Info > Interests */}
          <div className={styles["dropping-texts"]}>
            <div>Developer</div>
            <div>Designer</div>
            <div>Coder</div>
          </div>
        </section>

        <section className="right w-full sm:w-1/3">
          {/* Adjusting the image size for better mobile view */}
          <img
            src="/info.png"
            alt="Developer Workspace"
            className="w-[80%] sm:w-[60%] md:w-[50%] h-auto object-cover bg-none items-center rounded-2xl"
          />
        </section>
      </section>

      {/* Section 2: About */}
      <section className="section-2 h-auto sm:h-screen flex items-center px-6 sm:px-12 py-20 text-white text-2xl fade-in">
        <div className="left w-full sm:w-[80%] flex flex-col gap-12">
          <h1 className="text-4xl font-semibold text-center py-6">
            LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
          </h1>

          <h2>
            I enjoy crafting clean and efficient logic with JavaScript and
            React.js, though I prefer keeping things simple and practical… 😅
          </h2>
          <h2>
            I'm skilled in foundational technologies like{" "}
            <span className="text-purple-500 font-semibold">Java</span> and{" "}
            <span className="text-purple-500 font-semibold">JavaScript</span>
          </h2>
          <h2>
            My field of interest is in{" "}
            <span className="text-purple-500 font-semibold">
              building new Web Technologies and Products.
            </span>
          </h2>
          <h2>
            I thrive on building modern, user-friendly solutions using
            JavaScript frameworks like{" "}
            <span className="text-purple-500 font-semibold">React.js</span>
          </h2>
        </div>
      </section>

      {/* Section 3: Social Media Links */}
      <section className="section-3 py-12 flex flex-col justify-center gap-4 items-center text-white fade-in">
        <h1 className="text-2xl font-semibold">FIND ME ON</h1>
        <p>
          Feel free to <span className="text-purple-500">connect</span> with me
        </p>
        <div className="handles flex gap-4 justify-center mt-6">
          <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
            <a href="https://github.com/justin1045" target="_blank">
              <FaGithub className="text-purple-700" />
            </a>
          </div>
          <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
            <a href="https://x.com/mikewilson4268" target="_blank">
              <FaTwitter className="text-purple-700" />
            </a>
          </div>
          <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
            <a
              href="https://www.linkedin.com/in/chiragtank-developer/"
              target="_blank"
            >
              <FaLinkedin className="text-purple-700" />
            </a>
          </div>
          <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
            <a href="https://www.instagram.com/c.s.tank/" target="_blank">
              <FaInstagram className="text-purple-700" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
