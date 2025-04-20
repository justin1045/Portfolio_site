import React from "react";
import styles from "./home.module.css";
// icons
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <section className="section-1 h-screen flex justify-center items-center">
          <section className="left w-1/2 text-white p-12">
            <h1 className="text-3xl text-semibold">
              Hi There, <span className={styles.wave}>👋</span>
            </h1>
            <h2 className="text-[3rem] text-cyan-400">I am </h2>

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

            {/* info > interests */}
            <div className={styles["dropping-texts"]}>
              <div>Developer</div>
              <div>Designer</div>
              <div>Coder</div>
            </div>
          </section>

          <section className="right w-1/3 ">
            <img src="/coder.png" alt="" className="w-full h-auto" />
          </section>
        </section>

        {/* section - 2 */}
        <section className="section-2 h-screen flex items-center px-12 py-20 text-white text-2xl ">
          <div className="left w-[80%] flex flex-col gap-12">
            <h1 className="text-4xl font-semibold text-center py-6">
              LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
            </h1>

            <h2>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </h2>
            <h2>
              I am fluent in classics like{" "}
              <span className="text-purple-500 font-semibold">Java</span> and{" "}
              <span className="text-purple-500 font-semibold">Javascript</span>{" "}
            </h2>
            <h2>
              My field of Interest is in{" "}
              <span className="text-purple-500 font-semibold">
                building new Web Technologies and Products.
              </span>
            </h2>
            <h2>
              Whenever possible, I also apply my passion for developing products
              with <span className="text-purple-500 font-semibold">Modern Javascript Library and Frameworks</span> like <span className="text-purple-500 font-semibold">React.js</span>
            </h2>
          </div>
          <div className="right">
            <img src="/avatar.svg" alt="" />
          </div>
        </section>

        {/* section - 3 */}
        <section className="section-3 py-12 flex flex-col justify-center gap-4 items-center text-white">
          <h1 className="text-2xl font-semibold">FIND ME ON</h1>
          <p>Feel free to <span className="text-purple-500">connect</span> with me</p>
          <div className="handles flex gap-4">
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
                <FaGithub className="text-purple-700"/>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
                <FaTwitter className="text-purple-700"/>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
                <FaLinkedin className="text-purple-700"/>
            </div>
            <div className="handle w-[3rem] h-[3rem] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer hover:scale-110 transition-all">
                <FaInstagram className="text-purple-700"/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;