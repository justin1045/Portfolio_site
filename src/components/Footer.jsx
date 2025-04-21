import React from 'react';
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer className='h-14 px-8 flex flex-col sm:flex-row justify-between items-center bg-[#16245686] text-white text-center sm:text-left'>
      <div className='text-sm sm:text-base'>
        <h1>Designed and Developed by <span className='text-green-400 font-semibold'>C.S.Tank</span></h1>
      </div>
      <div className='text-xs sm:text-sm'>
        <p>Copyright © 2025 JS</p>
      </div>
      <div className='flex gap-4 mt-2 sm:mt-0'>
        <a href="https://github.com/justin1045" target="_blank"><FaGithub /></a>
        <a href="https://x.com/mikewilson4268" target="_blank"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/chiragtank-developer/" target="_blank"><CiLinkedin /></a>
        <a href="https://www.instagram.com/c.s.tank/" target="_blank"><FaInstagram /></a>
      </div>
    </footer>
  );
}

export default Footer;