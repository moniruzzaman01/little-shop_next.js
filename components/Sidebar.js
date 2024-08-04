"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname().split("/")[2];
  console.log("path", path);

  return (
    <div className="w-full flex items-center flex-col lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      <Link
        href={"/category/all"}
        scroll={false}
        className={`hover:border-b border-black h-6 mt-4 ${
          path == "all" && "border-b"
        }`}
      >
        All
      </Link>
      <Link
        href={"/category/beauty"}
        scroll={false}
        className={`hover:border-b border-black h-6 mt-5 ${
          path == "beauty" && "border-b"
        }`}
      >
        Beauty
      </Link>
      <Link
        href={"/category/fragrances"}
        scroll={false}
        className={`hover:border-b border-black h-6 mt-5 ${
          path == "fragrances" && "border-b"
        }`}
      >
        Fragrances
      </Link>
      <Link
        href={"/category/groceries"}
        scroll={false}
        className={`hover:border-b border-black h-6 mt-5 ${
          path == "groceries" && "border-b"
        }`}
      >
        Groceries
      </Link>
    </div>
  );
}
