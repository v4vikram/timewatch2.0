"use client";
import React from "react";
import { HeaderNavigationMenu } from "./HeaderNavigationMenu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white hidden lg:block">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/timewatch-logo.svg"}
            width={230}
            height={90}
            alt="timewatch logo"
            className="w-[230px] h-[80px]"
          />
        </Link>
        {/* menu */}
        <div className="relative z-10">
          <HeaderNavigationMenu />
        </div>
        {/* right side */}
        <div className="flex items-center">
          <SearchBar />
          <Button asChild>
            <Link href={'/partner'}>
              Become a Partner
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
