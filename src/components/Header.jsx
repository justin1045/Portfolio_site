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

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="bg-[#101828] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-500">
          <Link to="/">Chirag Tank</Link>
        </div>

        <div className="min-[850px]:hidden">
          {!isOpen ? (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <IoMdCloseCircleOutline
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } min-[850px]:flex gap-6 flex-col min-[850px]:flex-row absolute min-[850px]:static top-16 left-0 w-full min-[850px]:w-auto bg-[#101828] min-[850px]:bg-transparent p-4 min-[850px]:p-0 transition-all duration-300`}
        >
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              <FaRegUser /> About
            </Link>
          </li>
          <li>
            <Link
              to="/certificate"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              <LiaCertificateSolid /> Certificate
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              <AiOutlineFundProjectionScreen /> Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              <MdContactMail /> Contact
            </Link>
          </li>
          <li>
            <Link
              to="/more"
              className="flex items-center gap-2 hover:text-indigo-400 transition"
              onClick={handleLinkClick} // Close the menu on click
            >
              More...
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
