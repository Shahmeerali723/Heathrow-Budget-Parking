import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const NavDropDown = ({ data }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex items-center justify-between w-full">
          {data?.title || "Data not Available"}
        <IoIosArrowDown/>
        </div>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {data?.runs?.map((item: any, index: any) => (
          <DropdownMenuItem
            key={index}
            className="focus:bg-orange focus:text-white p-2"
          >
            <Link href={data?.path ||""}>
            <span className="flex gap-2 items-center">{item?.icon}{item?.name}</span></Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropDown;
