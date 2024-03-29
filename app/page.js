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
import background1 from '../public/background1.jpg';
import eia from "../public/eia.svg";
import ewb from "../public/ewb.jpeg";
import hamptons from "../public/hamptons.jpeg";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpg";
import img7 from "../public/img7.jpg";
import website from "../public/website.png";
import stockdock from "../public/stockdock.png";
import ar from "../public/ar.png";
import ewbquiz from "../public/ewbquiz.png";
import scottstory from "../public/scottstory.png";
import { useState } from "react";
import { useEffect} from "react";
import smoothScroll from "../utils/smoothScroll";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";
import FadeInElement from "../components/fadeIn";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Noah Jina Portfolio</title>
        <meta name="description" content="Generated by creator"></meta>
      </Head>

      <main className="bg-white">
        <Navbar/>
        <section className="">
          <div className="flex pt-40 md:pt-40 lg:pt-24">
            <div className ="bg-[url('../public/noah.jpg')] w-screen h-96 bg-cover bg-center bg-no-repeat md:h-screen">
              {/* <Image src={noah_image2} className="object-cover"/> */}
              <FadeInElement/>
            </div>
            {/* <div className="bg-black bg-opacity-80 dark:bg-gray-200">
              <div className="text-white text-center dark:text-black">
                <h2 className="text-2xl lg:text-5xl dark:text-black py-5 mt-5 lg:mt-20 font-medium">Hi, I'm Noah</h2>
                <p className="text-sm py-5 mt-2 lg:mt-10 leading-2 mx-4">Thanks for checking out my website. Scroll down to learn more about me, my experiences, and interests. Feel free to reach out through any channel for potential opportunties or just to connect!</p>
              </div>
            </div> */}
          </div>
        </section>


        <section id="experiences">
          <div className="bg-[url('../public/ivey-business-school.jpg')] bg-cover bg-fixed">
            <h3 className="text-4xl py-6 lg:py-20 text-center w-screen bg-transparent text-white font-bold">EXPERIENCES</h3>
          </div>
          <div className="flex py-10 items-center w-screen bg-white text-black justify-center">
            <ul>
            <li className="py-5 flex items-center">
                <Image src={ar} className="object-scale-down h-24 w-30 mr-3 md:w-40"/>
                <div>
                <h6 className="text-lg">Summer 2022</h6>
                <h3 className="text-2xl">AllRush Print and Apparel - Calgary, AB</h3>
                  <h3 className="mt-2">
                    <ul className="list-disc ml-5">
                      <li>Worked as a Software Developer to build a custom web application for employees to create and manage internal documents</li>
                      <li>Utilized Python and Django frameworks, with Postgres databases; deployed on DigitalOcean</li>
                      <li>Served as a consultant to help identify areas for improvement in the new software; decreased errors in creating documents by 30%</li>
                    </ul>
                  </h3>
                </div>
              </li>
            <li className="py-5 flex items-center">
                <Image src={ewb} className="object-scale-down h-24 w-30 mr-3 md:w-40"/>
                <div>
                <h6 className="text-lg">September 2021 - April 2022</h6>
                <h3 className="text-2xl">Engineers Without Borders - Western Chapter</h3>
                  <h3 className="mt-2">
                    <ul className="list-disc ml-5">
                      <li>Member of the political advocacy team; worked on a project to increase voter turnout through a web application</li>
                      <li>Contributed to the development of a React web app to help voters decide which parties align with their values, deployed on Netlify</li>
                      <li>Served as the Member Director to organize educational events and workshops for groups of 20+ students</li>
                    </ul>
                  </h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={eia} className="object-scale-down h-30 w-20 mr-3 md:w-40"/>
                <div>
                <h6 className="text-lg">Summer 2019</h6>
                <h3 className="text-2xl">European Innovation Academy - Cascais, Portugal</h3>
                  <h3 className="mt-2">
                    <ul className="list-disc ml-5">
                      <li>One of three high school students selected to attend an international business and enterpreneurship program</li>
                      <li>Worked with a group of international students to found a startup, chosen as the CFO</li>
                      <li>Attended workshops hosted by industry leaders to learn skills such as Financial Modelling, Design, Customer Acquisition</li>
                    </ul>
                  </h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={hamptons} className="object-scale-down h-24 w-30 mr-3 md:w-40"/>
                <div>
                <h6 className="text-lg">2017 - 2022</h6>
                <h3 className="text-2xl">The Hamptons Golf Club - Calgary, AB</h3>
                  <h3 className="mt-2">
                    <ul className="list-disc ml-5">
                      <li>Member of the competitive team; multiple top 3 finishes across the province</li>
                      <li>Volunteered as an Assistant Coach for the Junior Development Program; running drills and practice sessions for groups of 10+ participants</li>
                    </ul>
                  </h3>
                </div>
              </li>
              
            </ul>
          </div>
        </section>

        <section id="education">
          <div className="bg-[url('../public/ivey-business-school.jpg')] bg-cover bg-fixed">
            <h3 className="text-4xl py-6 lg:py-20 text-center w-screen bg-transparent text-white font-bold">EDUCATION</h3>
          </div>
          <div className="flex py-10 items-center w-screen bg-white justify-center">
            <ul className="text-black">
              <li className="py-5 flex items-center">
                <Image src={ivey} className="object-scale-down h-30 w-20 mr-3 md:w-40"></Image>
                <div>
                  <h6 className="text-lg">September 2022 - April 2025</h6>
                  <h3 className="text-2xl">HBA, Ivey Business School at Western University</h3>
                  <h3 className="mt-2">Currently pursuing an HBA degree with expected graduation in 2025.</h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={western} className=" object-scale-down w-20 md:w-40 mr-3"></Image>
                <div>
                  <h6 className="text-lg">September 2020 - April 2025</h6>
                  <h3 className="text-2xl">BESc Software Engineering, Western University</h3>
                  <h3 className="mt-2">Fourth year Software Engineering student. Coursework: DSA, JavaScript, Software Design</h3>
                  <h3>Dean's Honour List (2020, 2021). Nortel Engineering Distinction Scholarship. Western Scholarship of Excellence. 3.8/4.0  GPA.</h3>
                </div>
              </li>
              <li className="py-5 flex items-center">
                <Image src={renert} className=" object-scale-down h-30 w-20 mr-3 md:w-40"></Image>
                <div>
                  <h6 className="text-lg">September 2017 - June 2020</h6>
                  <h3 className="text-2xl">The Renert School, Calgary</h3>
                  <h3 className="mt-2">Graduated in 2020 with a 97% average. AP Courses: Chemistry, Calculus AB</h3>
                  <h3>University Courses: ENTI 359 (U of C), Accounting 253 (Athabasca U), CS50 (Harvard edX)</h3>
                  <h3>Sports and Clubs: Basketball, Golf, iGEM</h3>
                </div>  
              </li>
            </ul>
          </div>
        </section>

        <section id="skills">
          <div className="bg-[url('../public/hamptons-background.jpg')] bg-cover bg-fixed">
            <h3 className="text-4xl py-6 lg:py-20 text-center w-screen bg-transparent text-white font-bold">SKILLS & INTERESTS</h3>
          </div>
          <div className="grid gap-0 grid-cols-2 lg:grid-cols-4">
            <span><Image src={img7} className="object-cover min-h-full"/></span>
            <span className="bg-[url('../public/background2.jpeg')] bg-cover">
              <div className="bg-black text-white min-h-full flex justify-start items-center text-start opacity-80">
                <ul className="mx-4 lg:mx-14">
                  <li><h3 className="text-lg md:text-xl lg:text-3xl font-mono">Sports</h3></li>
                  <li><h2 className="text-xs md:text-sm lg:text-md mt-5">Sports have been at the center of my life for as long as I can remember. I picked up hockey and golf from a young age, playing both competitively through highschool. I continue to play hockey recreationally and compete in golf during the summer months.</h2></li>
                </ul>
              </div>
            </span>
            <span><Image src={img3} className="object-cover"/></span>
            <span className="bg-[url('../public/background3.jpg')] bg-cover">
              <div className="bg-black text-white min-h-full flex justify-start items-center text-start opacity-80">
                <ul className="mx-4 lg:mx-14">
                  <li><h3 className="text-lg md:text-xl lg:text-3xl font-mono">Travel</h3></li>
                  <li><h2 className="text-xs md:text-sm lg:text-md mt-5">I've been to 17 countries, 178 to go! I love seeing new places and experiencing new things. I've done a summer program in Portugal, backpacked Eastern Europe and Colombia, and visited Tanzania. All of these were amazing experiences and I am looking forward to the next adventure!</h2></li>
                </ul>
              </div>
            </span>
            <span className="bg-[url('../public/background4.jpg')] bg-cover">
              <div className="bg-black text-white min-h-full flex justify-start items-center text-start opacity-80">
                <ul className="mx-4 lg:mx-14">
                  <li><h3 className="text-lg md:text-xl lg:text-3xl font-mono">Coding</h3></li>
                  <li><h2 className="text-xs md:text-sm lg:text-md mt-5">Since I picked up coding 6 years ago, I have become passionate about using it to solve real-world problems. I have experience in JS, Python, and Java along with React and Django frameworks.</h2></li>
                </ul>
              </div>
            </span>
            <span><Image src={img6} className="object-cover min-h-full"/></span>
            <span className="bg-[url('../public/background5.jpg')] bg-cover">
              <div className="bg-black text-white min-h-full flex justify-start items-center text-start opacity-80">
                <ul className="mx-4 lg:mx-14">
                  <li><h3 className="text-lg md:text-xl lg:text-3xl font-mono">Finance</h3></li>
                  <li><h2 className="text-xs md:text-sm lg:text-md mt-5">Following the stock market has become on of my many hobbies and has piqued my interest in quantitative finance in tandem with my software background.</h2></li>
                </ul>
              </div>
            </span>
            <span><Image src={noah_image} className="h-96 object-cover"/></span>
          </div>
        </section>

        <section id="projects">
          <div className="bg-[url('../public/hamptons-background.jpg')] bg-cover bg-fixed">
            <h3 className="text-4xl py-6 lg:py-20 text-center w-screen bg-transparent text-white font-bold">PROJECTS</h3>
          </div>
          <div className="grid justify-items-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-screen bg-black">
            <div className="max-w-md my-10 mx-5 rounded-2xl overflow-hidden drop-shadow-2xl bg-white">
              <Image className="w-full h-60" src={stockdock}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><a href="https://github.com/noahj9/PrintSoftware" target="_blank">StockDock Software</a></div>
                <p className="text-gray-700 text-base">
                  Developed a web application for a small business to manage and create internal documents. Used Django and Python and deployed the project on DigitalOcean.
                </p>
                <br></br>
                <a href="https://github.com/noahj9/PrintSoftware" target="_blank" className="underline">View Project</a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Django</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Postgres</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DigitalOcean</span>
              </div>
            </div> 

            <div className="max-w-md mx-5 my-10 rounded-2xl overflow-hidden bg-white drop-shadow-2xl">
              <Image className="w-full h-60" src={website}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><a href="https://noahjina.com" target="_blank">Personal Website</a></div>
                <p className="text-gray-700 text-base">
                  Created my personal website to showcase my experiences and accomplishments. Developed using React, Tailwind, NextJS and deployed on Vercel.
                </p>
                <br></br>
                <a href="https://noahjina.com" target="_blank" className="underline">View Project</a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">NextJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vercel</span>
              </div>
            </div>

            <div className="max-w-md mx-5 my-10 rounded-2xl overflow-hidden shadow-lg bg-white drop-shadow-2xl">
              <Image className="w-full" src={ewbquiz}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><a href="https://ewb-western-party-alignment.web.app/" target="_blank">EWB Quiz Website</a></div>
                <p className="text-gray-700 text-base">
                  Developed a React web application to create a quiz to help students determine which political party their opinions correlate with.
                </p>
                <br></br>
                <a href="https://ewb-western-party-alignment.web.app/" target="_blank" className="underline">View Project</a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Netlify</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
              </div>
            </div>

            <div className="max-w-md mx-5 my-10 rounded-2xl overflow-hidden shadow-lg bg-white drop-shadow-2xl">
              <Image className="w-full" src={scottstory}/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"><a href="https://github.com/noahj9/scottstory" target="_blank">Scottstory</a></div>
                <p className="text-gray-700 text-base">
                  Developed a 2D RPG game using Unity with C#. This was a group project and my first real exposure to game development and C#.
                </p>
                <br></br>
                <a href="https://github.com/noahj9/scottstory" target="_blank" className="underline">View Project</a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Unity</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C#</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Design</span>
              </div>
            </div>

          </div>
        </section>

        <Footer/>

      </main>
    </div>
  );
}
