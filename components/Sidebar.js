"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-full flex items-center flex-col lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        href={"/category/all"}
        scroll={false}
        className="hover:border-b border-black h-6 mt-4"
      >
        All
      </Link>
      <Link
        href={"/category/beauty"}
        scroll={false}
        className="hover:border-b border-black h-6 mt-5"
      >
        Beauty
      </Link>
      <Link
        href={"/category/fragnances"}
        scroll={false}
        className="hover:border-b border-black h-6 mt-5"
      >
        Fragnances
      </Link>
      <Link
        href={"/category/groceries"}
        scroll={false}
        className="hover:border-b border-black h-6 mt-5"
      >
        Groceries
      </Link>
    </div>
  );
}
