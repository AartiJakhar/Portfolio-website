import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SocialLinks = () => {
  const [hideen, setHidden] = useState(false)
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/aarti-jakhar-developer",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aartijakhar",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:aartijakharkct@gmail.com",
      style: "rounded-br-md",
    },
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div className=" lg:flex flex-col top-[35%] left-0 fixed">
      <ul className=" md:block hidden">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              " flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gradient-to-r from-cyan-900 via-blue-600 to-cyan-900 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setHidden(!hideen)}
      >
        {hideen ? <MdOutlineKeyboardArrowLeft className="mt-8 md:hidden w-14 mb-1 rounded-br   text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-tr " size={30} /> : <MdOutlineKeyboardArrowRight className="mt-8 animate-pulse md:hidden rounded-br rounded-tr  absolute  text-white bg-gradient-to-r from-cyan-500 to-blue-500 w-6  h-24" size={30} />}
      </div>
      {hideen &&
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "  flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-500 bg-gradient-to-r from-cyan-900 via-blue-600 to-cyan-900" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>}
    </div>
  );
};

export default SocialLinks;