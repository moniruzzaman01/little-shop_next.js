import Image from "next/image";
import Link from "next/link";

export default function SingleProduct({ product }) {
  const { title, category, brand, discountPercentage, price, thumbnail, id } =
    product || {};

  if (!product) {
    return;
  }

  return (
    <div>
      <div
        className={`relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] transition-all duration-3000 ease-in-out transform`}
      >
        <Link href={`/products/${id}`}>
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            height={500}
            width={500}
          />
        </Link>
      </div>
      <div className="pl-2">
        <h2 className="text-sm lg:text-base mt-2 space-x-1">
          <Link className="text-base font-bold" href={`/products/${id}`}>
            {brand}
          </Link>
          <span className="text-[#919090]">
            <Link href={`/category/${category}`}>({category})</Link>
          </span>
        </h2>
        <p className="text-[#919090] text-sm">{title}</p>

        <p className="text-rose-600 text-sm mt-2">
          <span className="text-[#919090] line-through">
            ${discountPercentage}
          </span>{" "}
          $1{price}
        </p>
      </div>
    </div>
  );
}
