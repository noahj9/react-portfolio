"use client";
import React from 'react';
import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill, BsTelephone} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillMail, AiFillPhone} from 'react-icons/ai';
import { useState } from "react";
import { useEffect} from "react";
import smoothScroll from "../utils/smoothScroll";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
    <div>
    <Head>
        <title>Noah Jina Portfolio</title>
        <meta name="description" content="Generated by creator"></meta>
      </Head>

      <div className="bg-white scroll-auto w-screen">
        <section className="">
          <nav className="fixed z-10 w-screen py-10 px-20 flex justify-between text-white bg-black dark:text-black dark:bg-white">
            <h1 className="text-5xl flex items-center font-autography mr-20 md:mr-3">Noah Jina</h1>
            <ul className="md:flex items-center">
            <div className="invisible md:visible flex text-xl gap-5 mr-10 text-white dark:text-black">
              <li><a href="#experiences" onClick={smoothScroll}>Experiences</a></li>
              <li><a href="#education" onClick={smoothScroll}>Education</a></li>
              <li><a href="#skills" onClick={smoothScroll}>Skills</a></li>
              <li><a href="#projects" onClick={smoothScroll}>Projects</a></li>
              <li><a href="#contact" onClick={smoothScroll}>Contact</a></li>
            </div>
            <li className="flex md:mt-0"><BsTelephone className="text-2xl mr-2 md:mr-5"/>(403) 605-6059</li>
            <div className="text-3xl flex gap-2 mt-4 md:mt-0 md:gap-3 md:px-7 lg:gap-4 lg:px-10">
              <li><a href="https://www.instagram.com/noahj_09/"><AiFillInstagram/></a></li>
              <li><a href="https://www.linkedin.com/in/noahjina/"><AiFillLinkedin/></a></li>
              <li><a href="mailto:njina.hba2025@ivey.ca"><AiFillMail/></a></li>
            </div>
            </ul>
          </nav>
        </section>
        </div>
    </div>
  )
}

export default Navbar
