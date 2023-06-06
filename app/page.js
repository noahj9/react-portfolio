"use client";
import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill, BsTelephone} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillMail, AiFillPhone} from 'react-icons/ai';
import noah_image from '../public/noah2.jpg';
import noah_image2 from '../public/noah.jpg';
import renert from '../public/renert.png';
import ivey from '../public/ivey.jpg';
import western from '../public/western.gif';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Noah Jina Portfolio</title>
        <meta name="description" content="Generated by creator"></meta>
      </Head>

      <main className="bg-white">
        <section className="">
          <nav className="py-10 px-20 flex justify-between text-white bg-black dark:text-black dark:bg-white">
            <h1 className="text-4xl font-autography">Noah Jina</h1>
            <ul className="flex items-center">
            <li className="flex"><BsTelephone className="text-2xl mr-5"/>(403) 605-6059</li>
            <div className="text-3xl flex gap-2 px-5 md:gap-3 md:px-7 lg:gap-4 lg:px-10">
              <li><a href="https://www.instagram.com/noahj_09/"><AiFillInstagram/></a></li>
              <li><a href="https://www.linkedin.com/in/noahjina/"><AiFillLinkedin/></a></li>
              <li><a href="mailto:njina.hba2025@ivey.ca"><AiFillMail/></a></li>
            </div>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
            </ul>
          </nav>
          <div className="flex">
            <div className ="basis-3/5">
              <Image src={noah_image2} className=""/>
            </div>
            <div className="basis-2/5 bg-black bg-opacity-80 dark:bg-gray-200">
              <div className="text-white text-center dark:text-black">
                <h2 className="text-2xl lg:text-5xl dark:text-black py-5 mt-5 lg:mt-20 font-medium">Hi, I'm Noah</h2>
                <p className="text-sm py-5 mt-2 lg:mt-10 leading-2 mx-4">Thanks for checking out my website. Scroll down to learn more about me, my experiences, and interest. Feel free to reach out through any channel for potential opportunties or just to connect!</p>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="">
            <h3 className="text-4xl py-4 lg:py-10 text-center w-screen bg-black text-white dark:bg-gray-300 dark:text-black">EXPERIENCES</h3>
          </div>
          <div className="flex w-1/2 justify-center mt-10 text-black">
            <ul>
              <li>Experience 1</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="">
            <h3 className="text-4xl py-4 lg:py-10 text-center w-screen bg-black text-white dark:bg-gray-300 dark:text-black">EDUCATION</h3>
          </div>
          <div className="flex items-center justify-center">
            <ul className="text-black">
              <li className="py-5 flex items-center">
                <Image src={ivey} className="object-scale-down h-30 w-20 mr-3 md:w-40"></Image>
                <div>
                  <h6 className="text-lg">September 2022 - April 2025</h6>
                  <h3 className="text-2xl">HBA, IVEY BUSINESS SCHOOL AT WESTERN UNIVERSITY</h3>
                  <h3 className="mt-2">Currently pursuing an HBA degree with expected graduation in 2025.</h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={western} className=" object-scale-down w-20 md:w-40 mr-3"></Image>
                <div>
                  <h6 className="text-lg">September 2020 - April 2025</h6>
                  <h3 className="text-2xl">BESc Software Engineering, WESTERN UNIVERSITY</h3>
                  <h3 className="mt-2">Fourth year Software Engineering student. Coursework: DSA, JavaScript, Software Design</h3>
                  <h3>Dean's Honour List (2020, 2021). Nortel Engineering Distinction Scholarship. Western Scholarship of Excellence. 3.8/4.0  GPA.</h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={renert} className=" object-scale-down h-30 w-20 mr-3 md:w-40"></Image>
                <div>
                  <h6 className="text-lg">September 2017 - June 2020</h6>
                  <h3 className="text-2xl">THE RENERT SCHOOL, CALGARY</h3>
                  <h3 className="mt-2">Graduated in 2020 with a 97% average. AP Courses: Biology, Calculus AB</h3>
                  <h3>Sports and Clubs: Basketball, Golf, iGEM</h3>
                </div>  
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="">
            <h3 className="text-4xl py-4 lg:py-10 text-center w-screen bg-black text-white dark:bg-gray-300 dark:text-black">SKILLS & INTERESTS</h3>
          </div>
          <div className="grid gap-0 grid-cols-4 grid-rows-4">
            <span>Sports</span>
            <span>Music</span>
            <span>Travel</span>
            <span>Photography</span>
            <span>Coding</span>
            <span>Financial Markets</span>
            <span> images</span>
          </div>
        </section>

{/* FOOTER */}
        <section className="">
          <div className="w-screen mb-10 text-center bg-white text-black dark:bg-black dark:text-white">
            <h3 className="text-2xl py-4 text-center">LET'S CONNECT</h3>
            <ul>
            <li className="flex justify-center"><BsTelephone className="text-2xl mr-3"/>(403) 605-6059</li>
            <li className="text-md mt-5">njina.hba2025@ivey.ca</li>
            <div className="text-3xl flex justify-center gap-2 mt-5 px-5 md:gap-3 md:px-7 lg:gap-4 lg:px-10">
              <li><a href="https://www.instagram.com/noahj_09/"><AiFillInstagram/></a></li>
              <li><a href="https://www.linkedin.com/in/noahjina/"><AiFillLinkedin/></a></li>
              <li><a href="mailto:njina.hba2025@ivey.ca"><AiFillMail/></a></li>
            </div>
            </ul>
          </div>
        </section>

        <section className="bg-black text-center text-white py-5">
          <h3>Noah Jina - 2023</h3>
        </section>
      </main>
    </div>
  );
}
