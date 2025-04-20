import React from 'react'
import {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className='h-14 px-8 flex justify-evenly items-center bg-[#16245686] text-white'>
        <div className='left'>
            <h1>
                Designed and Developed by  
                <span className='text-green-400 text-lg font-semibold'> C.S.Tank</span>
            </h1>
        </div>
        <div className='middle'>
        <p>Copyright © 2025 JS </p>
        </div>
        <div className='right flex justify-center items-center gap-4'>
            <Link to={"/"}><FaGithub /></Link>
            <Link to={"/"}><FaTwitter /></Link>
            <Link to={"/"}><CiLinkedin /></Link>
            <Link to={"/"}><FaInstagram /></Link>
        
        
        
        
        </div>
    </div>
    </>
  )
}

export default Footer