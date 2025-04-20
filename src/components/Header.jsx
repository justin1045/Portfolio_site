import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdContactMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="min-h-18 px-1 sm:px-8 flex justify-between items-center bg-[#162456d2] text-white sticky top-0">
      <div className="left text-xl sm:text-2xl font-bold text-indigo-600">
        <h1>Chirag Tank</h1>
      </div>

      <div className="right">
        {/* hamburger icon */}
        {!isOpen && (
          <span
            className="min-[850px]:hidden text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu />
          </span>
        )}
{/* close icon */}
        {isOpen && (
          <span
            className="min-[850px]:hidden text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoMdCloseCircleOutline className="text-2xl" />
          </span>
        )}
{/* nav links */}
        <ul className={`${isOpen ? "" : "hidden"} min-[850px]:flex gap-6`}>
          <li>
            <Link to="/" className="flex items-center gap-1">
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-1">
              <FaRegUser /> About
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="flex items-center gap-1">
              <LiaCertificateSolid /> Certificate
            </Link>
          </li>
          <li>
            <Link to="/projects" className="flex items-center gap-1">
              <AiOutlineFundProjectionScreen /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-1">
              <MdContactMail /> Contact
            </Link>
          </li>
          <li>
            <Link to="/more" className="flex items-center gap-1">
              More...
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;