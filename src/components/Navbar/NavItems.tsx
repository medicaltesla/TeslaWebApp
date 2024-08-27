import Link from "next/link";
import React from "react";
import Image from "next/image";
export const navItemsData = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "Tests",
    url: "/tests",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
];

type Props = {
  activeItem: number;
};

const NavItems: React.FC<Props> = ({ activeItem }) => {
    return (
        <>
            <div className="hidden md:flex">
                {navItemsData &&
                    navItemsData.map((i, index) => (
                        <Link href={`${i.url}`} key={index} passHref>
                            <span
                                className={`${
                                    activeItem === index
                                    ? " text-black"
                                    : " text-black"
                                } text-[18px] px-6 font-Poppins font-[400]`}
                            >
                                {i.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            
        </>
    );
};

export default NavItems;