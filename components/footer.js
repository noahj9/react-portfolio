import React from 'react'
import {BsFillMoonStarsFill, BsTelephone} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillMail, AiFillPhone} from 'react-icons/ai';
const footer = () => {
  return (
    <div>
        <section id="contact" className="relative">
          <div className="bg-[url('../public/hamptons-background.jpg')] bg-fixed bg-cover h-96 w-screen" >
          <div className="absolute w-screen inset-x-0 inset-y-10 flex items-center justify-center text-center bg-black opacity-80 text-white dark:bg-white dark:text-black">
            <ul>
            <h3 className="text-2xl mb-5 flex justify-center">LET'S CONNECT!</h3>
            <li className="flex justify-center"><BsTelephone className="text-2xl mr-3"/>(403) 605-6059</li>
            <li className="text-md mt-5">njina.hba2025@ivey.ca</li>
            <div className="text-3xl flex justify-center gap-2 mb-8 mt-5 px-5 md:gap-3 md:px-7 lg:gap-4 lg:px-10">
              <li><a href="https://www.instagram.com/noahj_09/"><AiFillInstagram/></a></li>
              <li><a href="https://www.linkedin.com/in/noahjina/"><AiFillLinkedin/></a></li>
              <li><a href="mailto:njina.hba2025@ivey.ca"><AiFillMail/></a></li>
            </div>
            <li><a href='/resume.pdf' target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white dark:bg-black dark:text-white hover:bg-gray-700 rounded-xl justify-center text-md p-4">Resume Download</a></li>
            </ul>
           
          </div>
          </div>
          
          
        </section>

        <section className="bg-black text-center w-screen text-white py-5">
          <h3>Noah Jina - 2023</h3>
        </section>
    </div>
  )
}

export default footer