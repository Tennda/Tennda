'use client'
import React from "react";
import Image from "next/image";
import logo from '../../../assets/images/logo2.png'

type titleProps = {
    title?: string;
};
export default function Navbar({ title }: titleProps) {
    return (
        <nav className="bg-white shadow-sm md:shadow-md lg:shadow-lg  px-6 py-6 flex items-center justify-between">
            <div className=" flex items-center justify-center">
                <div className="text-2xl w-[90%] font-bold text-gray-800">
                    {/* <Image src={logo} alt="Logo" className="  w-full h-[100px]" /> */}
                </div>

            </div>
            <p className=" text-[#1E1E1E] text-2xl font-bold   ">{title}</p>
        </nav>
    );
}