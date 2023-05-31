import React, { useContext, useEffect, useState } from "react";
import logo from "../../public/logo.png";


import SideNavGenreList from "./SideNavGenreList";
import { HiMoon, HiOutlineBars3CenterLeft, HiOutlineMagnifyingGlass, HiOutlineXMark, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle,setToggle]=useState(false);
  const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} className="hidden md:block" />
      <div className="md:hidden">
      {!toggle? <HiOutlineBars3CenterLeft onClick={()=>setToggle(!toggle)}
      className="dark:text-white text-[25px] cursor-pointer"/>
      :<HiOutlineXMark onClick={()=>setToggle(!toggle)}
      className="dark:text-white text-[25px] cursor-pointer"/>}
      {toggle?
        <div className="absolute z-10 bg-white  mt-3 dark:bg-[#121212]">
          <SideNavGenreList/>
          </div>:null
      }
      </div>
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-xl items-center px-2">
        <HiOutlineMagnifyingGlass/>
        <input type="text" placeholder="Search Games" 
        className="bg-transparent w-full outline-none pl-2 items-center rounded-full"  />
      </div>
      <div className="rounded-xl cursor-pointer bg-slate-200 w-12 h-12 text-[35px] flex items-center justify-center">
      {theme=='dark'?  <HiSun className=" text-black p-1  " 
        onClick={()=>setTheme('light')} />
        :
        <HiMoon className=" text-black text-[25px]" 
        onClick={()=>setTheme('dark')} />}
      </div>
    </div>
  );
}

export default Header;
